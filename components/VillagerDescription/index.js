import styled from "styled-components";

const StyledSection = styled.section`
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.29);
`;

export default function VillagerDescription({ villager }) {
  const { personality, species, phrase, birthday_month, birthday_day, sign } =
    villager;

  const birthday = `${birthday_day} ${birthday_month}`;
  const article = /[aeiou]/i.test(personality[0]) ? "An" : "A";
  const descriptionText = `
    ${article} ${personality.toLowerCase()} ${species}, likes to say "${phrase}" a lot.
  `;

  return (
    <StyledSection>
      <div>
        <p>{descriptionText}</p>
        <p>
          Born {birthday} ({sign})
        </p>
      </div>
    </StyledSection>
  );
}
