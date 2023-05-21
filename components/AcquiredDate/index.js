import styled, { css } from "styled-components";
import { getAcquiredText } from "@/lib/utils";

export default function AcquiredDate({ item }) {
  return (
    <StyledUnlockDate variant={item.type}>
      {getAcquiredText(item)}
    </StyledUnlockDate>
  );
}

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
      bottom: -2rem;
    `}
`;
