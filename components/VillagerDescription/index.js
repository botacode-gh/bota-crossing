import DescriptionBox from "../DescriptionBox";

export default function VillagerDescription({ villager }) {
  const { personality, species, phrase, birthday_month, birthday_day, sign } =
    villager;

  const birthday = `${birthday_day} ${birthday_month}`;
  const article = /[aeiou]/i.test(personality[0]) ? "An" : "A";
  const descriptionText = `
    ${article} ${personality.toLowerCase()} ${species}, likes to say "${phrase}" a lot.
  `;

  return (
    <DescriptionBox item={villager}>
      <div>
        <p>{descriptionText}</p>
        <p>
          Born {birthday} ({sign})
        </p>
      </div>
    </DescriptionBox>
  );
}
