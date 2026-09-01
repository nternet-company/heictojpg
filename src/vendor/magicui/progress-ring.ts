// Magic UI animated-circular-progress-bar (MIT), ported off React.
// Source: https://magicui.design/r/animated-circular-progress-bar.json
const NS = "http://www.w3.org/2000/svg";

export interface ProgressRing {
  root: HTMLElement;
  update(value: number): void;
}

export function createProgressRing(options: {
  max?: number;
  min?: number;
  value?: number;
  gaugePrimaryColor: string;
  gaugeSecondaryColor: string;
  size?: number;
}): ProgressRing {
  const max = options.max ?? 100;
  const min = options.min ?? 0;
  const size = options.size ?? 100;

  const circumference = 2 * Math.PI * 45;
  const percentPx = circumference / 100;

  const root = document.createElement("div");
  root.className = "mu-ring";
  root.style.position = "relative";
  root.style.width = size + "px";
  root.style.height = size + "px";
  for (const [key, val] of Object.entries({
    "--circle-size": "100px",
    "--circumference": String(circumference),
    "--percent-to-px": percentPx + "px",
    "--gap-percent": "5",
    "--offset-factor": "0",
    "--transition-length": "1s",
    "--transition-step": "200ms",
    "--delay": "0s",
    "--percent-to-deg": "3.6deg",
  }))
    root.style.setProperty(key, val);
  root.style.transform = "translateZ(0)";

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.style.width = "100%";
  svg.style.height = "100%";

  const secondary = document.createElementNS(NS, "circle");
  const primary = document.createElementNS(NS, "circle");
  for (const circle of [secondary, primary]) {
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "45");
    circle.setAttribute("stroke-width", "10");
    circle.setAttribute("stroke-dashoffset", "0");
    circle.setAttribute("stroke-linecap", "round");
    circle.setAttribute("stroke-linejoin", "round");
  }

  secondary.style.stroke = options.gaugeSecondaryColor;
  secondary.style.setProperty(
    "--offset-factor-secondary",
    "calc(1 - var(--offset-factor))",
  );
  secondary.style.strokeDasharray =
    "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)";
  secondary.style.transform =
    "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)";
  secondary.style.transition = "all var(--transition-length) ease var(--delay)";
  secondary.style.transformOrigin =
    "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)";

  primary.style.stroke = options.gaugePrimaryColor;
  primary.style.strokeDasharray =
    "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)";
  primary.style.transition =
    "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)";
  primary.style.transitionProperty = "stroke-dasharray,transform";
  primary.style.transform =
    "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))";
  primary.style.transformOrigin =
    "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)";

  svg.append(secondary, primary);

  const label = document.createElement("span");
  label.style.position = "absolute";
  label.style.inset = "0";
  label.style.margin = "auto";
  label.style.width = "fit-content";
  label.style.height = "fit-content";

  root.append(svg, label);

  function update(value: number) {
    const currentPercent = Math.round(((value - min) / (max - min)) * 100);
    const showSecondary = currentPercent <= 90 && currentPercent >= 0;
    secondary.style.display = showSecondary ? "" : "none";
    if (showSecondary)
      secondary.style.setProperty("--stroke-percent", String(90 - currentPercent));
    primary.style.setProperty("--stroke-percent", String(currentPercent));
    label.dataset.currentValue = String(currentPercent);
    label.textContent = String(currentPercent);
  }

  update(options.value ?? 0);
  return { root, update };
}
