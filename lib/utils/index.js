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
  return new Intl.NumberFormat("en-US").format(number);
}

export function formatDate(date) {
  const sourceDate = new Date(date);
  const day = sourceDate.getDate();
  const month = sourceDate.getMonth();
  const year = sourceDate.getFullYear().toString().substring(2);

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
  const formattedMonth = monthNames[month];

  return `${day} ${formattedMonth} '${year}`;
}

export function getRarityText(rarity) {
  if (rarity === "") {
    return "common";
  } else if (rarity === "Unknown") {
    return null;
  } else {
    return rarity.toLowerCase();
  }
}

export function getLocationText(location) {
  const locationDictionary = {
    "From hitting rocks": "By hitting rocks",
    "On trees (any kind)": "On trees of any kind",
    "Shaking trees (hardwood and cedar)": "By shaking hardwood & cedar trees",
    "On trees (hardwood and cedar)": "On hardwood & cedar trees",
    Flying: "Flying around",
    "Pushing snowballs": "Pushing snowballs around",
    "On villagers": "On villagers 🤢",
    "Shaking trees": "By shaking trees",
    "Shaking non-fruit hardwood trees or cedar trees":
      "By shaking non-fruit hardwood trees or cedar trees",
    River: "in rivers",
    Pier: "at the pier",
    Pond: "in ponds",
    "River (mouth)": "at the mouth of rivers",
    "River (clifftop)": "at the top of rivers",
    "Sea (raining)": "at Sea while raining",
    Sea: "at Sea",
  };

  return locationDictionary[location] || location;
}

export function getMonthsText(months) {
  if (months.includes("; ")) {
    return ` from ${months.replace(/; /g, " & ")}`;
  } else if (months === "All year") {
    return " all\u2011year";
  }
  return ` from ${months}`;
}

export function getTimeText(time) {
  if (time === "All day") {
    return "all\u2011day";
  }
  return time;
}

export function isAnimal(item) {
  item.type === ("fish" || "bug") ? true : false;
}
