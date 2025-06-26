export function deepFreeze<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const propValue = (obj as any)[prop];

    if (propValue && typeof propValue === 'object') {
      deepFreeze(propValue);
    }
  });

  return Object.freeze(obj);
}
