import { getRelativeDir } from './utils';

export default function getroundedType(x, y, i, snakeParts) {
  let rounded = null;

  if (i === 0) {
    const nextSnakePart = snakeParts[i + 1];
    if (x - 1 === nextSnakePart.x) rounded = 'right';
    if (x + 1 === nextSnakePart.x) rounded = 'left';
    if (y - 1 === nextSnakePart.y) rounded = 'bottom';
    if (y + 1 === nextSnakePart.y) rounded = 'top';
  } else if (i === snakeParts.length - 2) {
    const prevSnakePart = snakeParts[i - 1];
    if (x - 1 === prevSnakePart.x) rounded = 'right';
    if (x + 1 === prevSnakePart.x) rounded = 'left';
    if (y - 1 === prevSnakePart.y) rounded = 'bottom';
    if (y + 1 === prevSnakePart.y) rounded = 'top';
  } else if (i !== snakeParts.length - 1) {
    const prevSnakePart = snakeParts[i - 1];
    const nextSnakePart = snakeParts[i + 1];

    const prevRelCoords = {
      x: prevSnakePart.x - x,
      y: prevSnakePart.y - y,
    };
    const nextRelCoords = {
      x: nextSnakePart.x - x,
      y: nextSnakePart.y - y,
    };

    const prevDir = getRelativeDir(prevRelCoords.x, prevRelCoords.y);
    const nextDir = getRelativeDir(nextRelCoords.x, nextRelCoords.y);

    if (
      (prevDir === 'up' && nextDir === 'left') ||
      (prevDir === 'left' && nextDir === 'up')
    ) {
      rounded = 'bottom right';
    } else if (
      (prevDir === 'up' && nextDir === 'right') ||
      (prevDir === 'right' && nextDir === 'up')
    ) {
      rounded = 'bottom left';
    } else if (
      (prevDir === 'down' && nextDir === 'right') ||
      (prevDir === 'right' && nextDir === 'down')
    ) {
      rounded = 'top left';
    } else if (
      (prevDir === 'down' && nextDir === 'left') ||
      (prevDir === 'left' && nextDir === 'down')
    ) {
      rounded = 'top right';
    }
  }

  return rounded;
}
