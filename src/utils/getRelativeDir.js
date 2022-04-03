export default function getRelativeDir(x, y) {
  const dirMap = new Map([
    ['0-1', 'up'],
    ['01', 'down'],
    ['-10', 'left'],
    ['10', 'right'],
  ]);

  return dirMap.get('' + x + y);
}
