function exclude<T, Key extends keyof T>(
  generic: T,
  ...keys: Key[]
): Omit<T, Key> {
  for (let key of keys) {
    delete generic[key];
  }
  return generic;
}

export default exclude;
