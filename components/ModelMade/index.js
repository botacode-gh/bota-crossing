import styled from "styled-components";
import Section from "../StyledSection";

export default function ModelMade({ item, onChange }) {
  const { name, isModelled } = item;

  const inputId = `modelMade-${name}`;

  return (
    <Section variant="ModelMade">
      <label htmlFor={inputId}>
        <h3>Model made:</h3>
      </label>
      <CheckboxContainer>
        <HiddenCheckbox
          type="checkbox"
          id={inputId}
          name={inputId}
          value="isModelled"
          checked={isModelled}
          // onChange={onChange}
        />
        <StyledCheckbox />
      </CheckboxContainer>
    </Section>
  );
}

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    background-color: #ccc;
  }
`;

const StyledCheckbox = styled.span`
  position: absolute;
  right: -5px;
  bottom: -5px;
  height: 2rem;
  width: 2rem;
  background-color: #eee;
  border-radius: 10px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 11px;
    top: 4px;
    width: 10px;
    height: 20px;
    border: solid white;
    border-width: 0 5px 5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: #27a590;
  }

  &:checked ~ span:after {
    display: block;
  }
`;
