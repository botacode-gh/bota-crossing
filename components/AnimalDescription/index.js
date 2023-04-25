export default function AnimalDescription({ species }) {
  const { availability } = species;
  console.log("species:", species);

  const { month, time, rarity, location } = availability;

  const descriptionText = `${rarity} ${
    species.type === "fish" ? "fish" : "bug"
  } found ${location} ${month ? month : "all-year"}, ${
    time ? time : "day & night"
  }.`;

  return <p>{descriptionText}</p>;
}

//
