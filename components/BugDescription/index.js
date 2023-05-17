import {
  getArticle,
  getLocationText,
  getMonthsText,
  getRarityText,
  getTimeText,
} from "@/lib/utils";
import DescriptionBox from "../DescriptionBox";

export default function BugDescription({ bug }) {
  const { rarity, location } = bug;
  const { months, time } = bug.north.availability_array[0];

  const rarityText = getRarityText(rarity);
  const locationText = getLocationText(location).toLowerCase();
  const monthsText = getMonthsText(months);
  const timeText = getTimeText(time);
  const article = getArticle(rarityText);

  return (
    <DescriptionBox item={bug}>
      <p>
        {article} {rarityText} bug, found {locationText} {monthsText},{" "}
        {timeText}.
      </p>
    </DescriptionBox>
  );
}
