import styled from "styled-components";

const StyledModelContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  position: relative;
  width: 100%;
  padding-left: 1rem;
`;

const StyledCheckbox = styled.input`
  top: 1rem;
  right: 1.5rem;
  bottom: 1rem;
  position: absolute;
  transform: scale(3);
`;

export default function ModelMade({ bug, onChange }) {
  const { slug, isModelled } = bug;

  const inputId = `modelMade-${slug}`;

  return (
    <StyledModelContainer>
      <label htmlFor={inputId}>
        <h3>Model made:</h3>
      </label>
      <StyledCheckbox
        type="checkbox"
        id={inputId}
        name={`modelMade-${slug}`}
        value="isModelled"
        checked={isModelled}
        onChange={onChange}
      />
    </StyledModelContainer>
  );
}
