import DescriptionBox from "../DescriptionBox";

export default function BugDescription({ bug }) {
  const { image_url, rarity, location } = bug;
  const { months, time } = bug.north.availability_array[0];

  const rarityText =
    rarity === ""
      ? "common "
      : rarity === "Unknown"
      ? null
      : `${rarity.toLowerCase()} `;

  const locationText =
    location === "From hitting rocks"
      ? "By hitting rocks"
      : location === "On trees (any kind)"
      ? "On trees of any kind"
      : location === "Shaking trees (hardwood and cedar)"
      ? "By shaking hardwood & cedar trees"
      : location === "On trees (hardwood and cedar)"
      ? "On hardwood & cedar trees"
      : location === "Flying"
      ? "Flying around"
      : location === "Pushing snowballs"
      ? "Pushing snowballs around"
      : location === "On villagers"
      ? "On villagers 🤢"
      : location === "Shaking trees"
      ? "By shaking trees"
      : location === "Shaking non-fruit hardwood trees or cedar trees"
      ? "By shaking non-fruit hardwood trees or cedar trees"
      : location;

  const monthsText =
    months === "All year"
      ? " all\u2011year"
      : months.includes("; ")
      ? ` from ${months.replace(/; /g, " & ")}`
      : ` from ${months}`;

  const timeText = time === "All day" ? "all\u2011day" : time;

  const article = /[aeiou]/i.test(rarityText[0]) ? "An" : "A";

  return (
    <DescriptionBox icon={image_url}>
      <p>
        {article} {rarityText} bug, found {locationText.toLowerCase()}{" "}
        {monthsText}, {timeText}.
      </p>
    </DescriptionBox>
  );
}
