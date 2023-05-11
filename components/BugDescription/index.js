import {
  getLocationText,
  getMonthsText,
  getRarityText,
  getTimeText,
} from "@/lib/utils";
import DescriptionBox from "../DescriptionBox";

export default function BugDescription({ bug }) {
  const { image_url, rarity, location } = bug;
  const { months, time } = bug.north.availability_array[0];

  const article = /[aeiou]/i.test(rarityText[0]) ? "An" : "A";
  const rarityText = getRarityText(rarity);
  const locationText = getLocationText(location);
  const monthsText = getMonthsText(months);
  const timeText = getTimeText(time);

  return (
    <DescriptionBox icon={image_url}>
      <p>
        {article} {rarityText} bug, found {locationText.toLowerCase()}{" "}
        {monthsText}, {timeText}.
      </p>
    </DescriptionBox>
  );
}
