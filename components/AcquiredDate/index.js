import styled, { css } from "styled-components";
import { getAcquiredText } from "@/lib/utils";

const StyledUnlockDate = styled.div`
  font-size: 0.75rem;
  position: absolute;
  right: 14px;
  bottom: -1rem;
  opacity: 60%;
  font-size: 0.7rem;

  ${({ variant }) =>
    variant === "furniture" &&
    css`
      right: 32px;
      bottom: 1rem;
    `}
`;

export default function AcquiredDate({ item }) {
  return (
    <StyledUnlockDate variant={item.type}>
      {getAcquiredText(item)}
    </StyledUnlockDate>
  );
}
