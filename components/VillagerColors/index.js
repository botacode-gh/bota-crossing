import styled, { css } from "styled-components";

export default function VillagerColors({ title_color, text_color }) {
  return (
    <>
      {title_color && text_color && (
        <GrandContainer>
          <StyledText>likes these colors</StyledText>
          <Container1>
            <ColorCircle
              color={title_color}
              title={`#${title_color}`}
            ></ColorCircle>
          </Container1>
          <Container2>
            <ColorCircle
              color={text_color}
              title={`#${text_color}`}
            ></ColorCircle>
          </Container2>
        </GrandContainer>
      )}
    </>
  );
}

const GrandContainer = styled.div`
  position: absolute;
  right: calc(50% - 156px);
  top: 555px;
`;

const StyledText = styled.div`
  position: absolute;
  right: 0;
  bottom: 155px;
  text-align: right;
  width: max-content;
  font-size: 0.8rem;
`;

const Container1 = styled.div`
  position: absolute;
  right: 30px;
  bottom: 60px;
  z-index: 2;
`;

const Container2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 90px;
`;

const ColorCircle = styled.div`
  border-radius: 80%;
  height: 60px;
  width: 60px;

  ${({ color }) =>
    color &&
    css`
      background-color: #${color};
    `}
`;
