export default function joinClassNames(...classNames) {
  if (classNames[0] instanceof Array) {
    classNames = classNames[0];
  }

  return classNames.join(' ').trim().replace(/  +/g, ' ');
}
