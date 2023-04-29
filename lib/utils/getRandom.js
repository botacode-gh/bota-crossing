export default function getRandom(array, ...objectKey) {
  const randomArrayElement = array[Math.floor(Math.random() * array.length)];

  const randomArrayValue = array[objectKey];

  if (objectKey.length === 0) {
    const randomValue = randomArrayElement;
    return randomValue || array[0]?.objectKey;
  }

  const randomValue = randomArrayValue;
  return randomValue || array[0]?.objectKey;
}
