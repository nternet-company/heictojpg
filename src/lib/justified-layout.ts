// Justified rows, adapted from flickr/justified-layout (MIT).
export interface JustifiedBox {
  left: number;
  top: number;
  width: number;
  height: number;
  cropFraction: number;
}

export interface JustifiedLayout {
  boxes: JustifiedBox[];
  containerHeight: number;
}

export interface JustifiedOptions {
  heightTolerance?: number;
  cropCap?: number;
}

export function computeJustifiedLayout(
  aspectRatios: number[],
  containerWidth: number,
  targetRowHeight = 96,
  gap = 4,
  options: JustifiedOptions = {},
): JustifiedLayout {
  const heightTolerance = options.heightTolerance ?? 0;
  const cropCap = options.cropCap ?? 0.07;

  const boxes: JustifiedBox[] = [];
  let row: number[] = [];
  let rowRatioSum = 0;
  let top = 0;

  const flushRow = (isLast: boolean) => {
    if (row.length === 0) return;
    const gapsWidth = gap * (row.length - 1);
    const availableWidth = containerWidth - gapsWidth;
    const idealHeight = availableWidth / rowRatioSum;
    let height = isLast ? Math.min(idealHeight, targetRowHeight * 1.2) : idealHeight;
    let cropFraction = 0;
    if (!isLast && heightTolerance > 0) {
      const minHeight = targetRowHeight * (1 - heightTolerance);
      const maxHeight = targetRowHeight * (1 + heightTolerance);
      const clamped = Math.min(maxHeight, Math.max(minHeight, idealHeight));
      if (clamped !== idealHeight) {
        const residual = availableWidth - rowRatioSum * clamped;
        const fraction = Math.abs(residual) / (rowRatioSum * clamped);
        if (fraction <= cropCap) {
          height = clamped;
          cropFraction = fraction;
        }
      }
    }
    const naturalWidth = rowRatioSum * height;
    const widthScale = cropFraction > 0 ? availableWidth / naturalWidth : 1;
    let left = 0;
    for (const ratio of row) {
      const width = ratio * height * widthScale;
      boxes.push({ left, top, width, height, cropFraction });
      left += width + gap;
    }
    top += height + gap;
    row = [];
    rowRatioSum = 0;
  };

  for (const ratio of aspectRatios) {
    row.push(ratio);
    rowRatioSum += ratio;
    if (rowRatioSum * targetRowHeight >= containerWidth - gap * (row.length - 1)) {
      flushRow(false);
    }
  }
  flushRow(true);

  return { boxes, containerHeight: Math.max(0, top - gap) };
}
