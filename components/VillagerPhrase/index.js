import styled, { css } from "styled-components";

export default function VillagerPhrase({ title_color, text_color, phrase }) {
  const colors = {
    background: `#${title_color}69`,
    text: `#${text_color}`,
  };

  return <StyledPhrase colors={colors}>{phrase}</StyledPhrase>;
}

const StyledPhrase = styled.span`
  border-radius: 20px;
  padding: 0.05rem 0.4rem;
  white-space: nowrap;
  margin: 0 0.2rem;

  ${({ colors }) =>
    colors &&
    css`
      background: ${colors.background};
      color: ${colors.text};
    `}
`;
