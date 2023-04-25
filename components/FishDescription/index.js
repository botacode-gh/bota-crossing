export default function FishDescription({ fish }) {
  const { availability } = fish;
  const { month, time, rarity, location } = availability;

  "fish:", fish;

  const descriptionText = `${rarity} fish found at ${location} ${
    month ? month : "all-year"
  }, ${time ? time : "day & night"}.`;

  return <p>{descriptionText}</p>;
  //   return <p>Common fish found at Sea all-year, 4am – 9pm.</p>;
}
