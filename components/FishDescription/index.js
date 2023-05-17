import {
  getLocationText,
  getMonthsText,
  getRarityText,
  getTimeText,
} from "@/lib/utils";
import DescriptionBox from "../DescriptionBox";

function getSizeText(shadow_size) {
  if (shadow_size === "Medium") {
    return "Medium-sized";
  } else if (shadow_size === "Very large (finned)") {
    return "Very large";
  } else {
    return shadow_size;
  }
}

export default function FishDescription({ fish }) {
  const { shadow_size, location, rarity } = fish;
  const { months, time } = fish.north.availability_array[0];

  const sizeText = getSizeText(shadow_size);
  const rarityText = getRarityText(rarity);
  const locationText = getLocationText(location);
  const monthsText = getMonthsText(months);
  const timeText = getTimeText(time);
  const hasFinnedShadow = shadow_size === "Very large (finned)" ? true : false;

  return (
    <DescriptionBox item={fish}>
      <p>
        {sizeText}
        {rarityText ? `, ${rarityText}` : ""} fish found {locationText}
        {monthsText}, {timeText}.
        {hasFinnedShadow && <div>You can spot it by its fins!</div>}
      </p>
    </DescriptionBox>
  );
}
