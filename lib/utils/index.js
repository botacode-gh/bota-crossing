export function getRandom(strings, objectKey) {
  const array = Array.isArray(strings) ? strings : [strings];
  const randomArrayElement = array[Math.floor(Math.random() * array.length)];
  if (!objectKey) {
    return randomArrayElement || array[0];
  }
  return randomArrayElement[objectKey] || array[0][objectKey];
}

export function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  return currentDate.toLocaleDateString("en", options);
}

export function formatPrice(number) {
  const priceString = new Intl.NumberFormat("en-IN").format(number);
  return priceString;
}

export function formatDate(date) {
  const sourceDate = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = sourceDate.getDate();
  const month = monthNames[sourceDate.getMonth()];
  const year = sourceDate.getFullYear().toString().substring(2);
  const formattedDate = `${day} ${month} '${year}`;
  return formattedDate;
}
