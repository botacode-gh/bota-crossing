import DescriptionBox from "../DescriptionBox";
import VillagerPhrase from "../VillagerPhrase";

export default function VillagerDescription({ villager }) {
  const { personality, species, phrase, birthday_month, birthday_day, sign } =
    villager;

  const birthday = `${birthday_day} ${birthday_month}`;
  const article = /[aeiou]/i.test(personality[0]) ? "An" : "A";
  const descriptionText = `
    ${article} ${personality.toLowerCase()} ${species}, likes to say "${phrase}" a lot.
  `;

  function DescriptionText({ title_color, text_color }) {
    console.log(
      "title_color, text_color in DescriptionText:",
      title_color,
      text_color
    );

    return (
      <p>
        {article} {personality.toLowerCase()} {species}, likes to say{" "}
        <VillagerPhrase
          title_color={title_color}
          text_color={text_color}
          phrase={phrase}
        />{" "}
        a lot.
      </p>
    );
  }

  return (
    <DescriptionBox item={villager}>
      <div>
        <DescriptionText
          title_color={villager.title_color}
          text_color={villager.text_color}
        />
        <p>
          Born {birthday} ({sign})
        </p>
      </div>
    </DescriptionBox>
  );
}
