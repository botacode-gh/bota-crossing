import { formatDate } from "@/lib/utils";
import styled, { css } from "styled-components";

const StyledUnlockDate = styled.div`
  font-size: 0.75rem;
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  ${({ variant }) =>
    variant === "villager" &&
    css`
      right: 1rem;
    `}

  ${({ variant }) =>
    variant === "furniture" &&
    css`
      left: 1rem;
    `}
`;

export default function AcquiredDate({ date, type }) {
  const verb =
    type === "fish" || type === "bug"
      ? "caught"
      : type === "villager"
      ? "moved to island"
      : "acquired";

  return (
    <StyledUnlockDate variant={type}>
      {date ? `${verb} on ${formatDate(date)}` : "not acquired yet"}
    </StyledUnlockDate>
  );
}
