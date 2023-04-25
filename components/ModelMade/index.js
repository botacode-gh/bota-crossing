import styled from "styled-components";

const StyledModelContainer = styled.div`
  border: 1px solid black;
  position: relative;
`;

const StyledCheckbox = styled.input`
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  position: absolute;
  transform: scale(3);
`;

export default function ModelMade() {
  return (
    <StyledModelContainer>
      <label htmlFor="modelMade">
        <h3>Model made:</h3>
      </label>
      <StyledCheckbox
        type="checkbox"
        id="modelMade"
        name="modelMade"
        value="isModelled"
      />
    </StyledModelContainer>
  );
}
