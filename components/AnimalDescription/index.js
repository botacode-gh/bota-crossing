export default function AnimalDescription({ animal }) {
  const { availability } = animal;

  const { month, time, rarity, location } = availability;

  const descriptionText = `${rarity} ${
    animal.type === "fish" ? "fish" : "bug"
  } found ${location} ${month ? month : "all-year"}, ${
    time ? time : "day & night"
  }.`;

  return <p>{descriptionText}</p>;
}
