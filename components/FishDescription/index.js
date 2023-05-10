import DescriptionBox from "../DescriptionBox";

export default function FishDescription({ fish }) {
  const { shadow_size, location, rarity, image_url } = fish;
  const { months, time } = fish.north.availability_array[0];

  const sizeText =
    shadow_size === "Medium"
      ? "Medium-sized"
      : shadow_size === "Very large (finned)"
      ? "Very large"
      : shadow_size;

  const rarityText =
    rarity === ""
      ? "common "
      : rarity === "Unknown"
      ? null
      : `${rarity.toLowerCase()} `;

  const locationText =
    location === "River"
      ? "in rivers"
      : location === "Pier"
      ? "at the Pier"
      : location === "Pond"
      ? "in ponds"
      : location === "River (clifftop)"
      ? "in clifftop rivers"
      : location === "Sea (raining)"
      ? "at Sea when it's raining"
      : location === "River (mouth)"
      ? "at river mouths"
      : "at Sea";

  const monthsText =
    months === "All year"
      ? " all\u2011year"
      : months.includes("; ")
      ? ` from ${months.replace(/; /g, " & ")}`
      : ` from ${months}`;

  const timeText = time === "All day" ? "all\u2011day" : time;

  const hasFinnedShadow = shadow_size === "Very large (finned)" ? true : false;

  return (
    <DescriptionBox icon={image_url}>
      <p>
        {sizeText}
        {rarityText ? `, ${rarityText}` : ""} fish found {locationText}
        {monthsText}, {timeText}.
        {hasFinnedShadow && <div>You can spot it by its fins!</div>}
      </p>
    </DescriptionBox>
  );
}
