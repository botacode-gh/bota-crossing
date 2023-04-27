import styled from "styled-components";
import Image from "next/image";

const StyledSection = styled.section`
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

export default function ResidentDescription({ resident }) {
  const {
    name,
    personality,
    species,
    hobby,
    catchphrase,
    birthday,
    iconSource,
  } = resident;

  const article = /[aeiou]/i.test(personality[0]) ? "An" : "A";
  const descriptionText = `
    ${article} ${personality} ${species}, likes to ${hobby} and say "${catchphrase}" a lot.
  `;

  return (
    <StyledSection>
      <div>
        <p>{descriptionText}</p>
        <p>Birthday: {birthday}</p>
      </div>
      <Image src={iconSource} alt={`${name} icon`} width={100} height={100} />
    </StyledSection>
  );
}
