import styled, { css } from "styled-components";

const GrandContainer = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 0.4rem;
`;

const StyledText = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 160px;
`;

const Container1 = styled.div`
  position: absolute;
  right: 30px;
  bottom: 60px;
  z-index: 2;
`;

const Container2 = styled.div`
  position: absolute;
  right: 60px;
  bottom: 90px;
`;

const ColorButton = styled.div`
  border: none;
  border-radius: 80%;
  height: 60px;
  width: 60px;

  ${({ color }) =>
    color &&
    css`
      background-color: #${color};
    `}
`;

export default function VillagerColors({ title_color, text_color }) {
  return (
    <>
      <StyledText>likes these colors</StyledText>
      <GrandContainer>
        <Container1>
          <ColorButton color={"EB9698"}></ColorButton>
        </Container1>
        <Container2>
          <ColorButton color={"F6C564"}></ColorButton>
        </Container2>
      </GrandContainer>
    </>
  );
}
