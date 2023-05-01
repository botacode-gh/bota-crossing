export function getRandom(array, ...objectKey) {
  const randomArrayElement = array[Math.floor(Math.random() * array.length)];

  const randomArrayValue = array[objectKey];

  if (objectKey.length === 0) {
    const randomValue = randomArrayElement;
    return randomValue || array[0]?.objectKey;
  }

  const randomValue = randomArrayValue;
  return randomValue || array[0]?.objectKey;
}

export function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  return currentDate.toLocaleDateString("en", options);
}
