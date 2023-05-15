import { formatDate } from "@/lib/utils";
import styled from "styled-components";

const StyledUnlockDate = styled.div`
  font-size: 0.75rem;
  position: absolute;
  bottom: -1rem;
  right: 0;
  opacity: 60%;
  font-size: 0.7rem;
`;

export default function AcquiredDate({ item }) {
  const isAcquired = item.isAcquired === true;

  const { acquireDate: date, type } = item;
  const verb =
    type === "fish" || type === "bug"
      ? "caught"
      : type === "villager"
      ? "moved to island"
      : "acquired";

  function getAcquiredText(item) {
    if (!item.isAcquired) {
      return "not acquired yet";
    }
    return `${verb} on ${formatDate(date)}`;
  }

  console.log("item in AcquiredDate:", item);

  return <StyledUnlockDate>{getAcquiredText(item)}</StyledUnlockDate>;
}
