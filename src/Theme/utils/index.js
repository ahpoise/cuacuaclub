function convertRGBtoHEX(r, g, b) {
  const SIZE = 2;

  r = r.toString(16);
  while (r.length < SIZE) r = "0" + r;

  g = g.toString(16);
  while (g.length < SIZE) g = "0" + g;

  b = b.toString(16);
  while (b.length < SIZE) b = "0" + b;

  return r + g + b;
}

export default function lightenDarkenColor(colorHex, adjustment) {
  let usePound = false;

  if (colorHex[0] == "#") {
    colorHex = colorHex.slice(1);
    usePound = true;
  }

  let num = parseInt(colorHex, 16);

  let r = (num >> 16) + adjustment;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let g = ((num >> 8) & 0x00ff) + adjustment;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  let b = (num & 0x0000ff) + adjustment;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  return (usePound ? "#" : "") + convertRGBtoHEX(r, g, b);
}
