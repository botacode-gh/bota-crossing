import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import Tag from "../Tag";

export default function TagsContainer({ furniture }) {
  if (!furniture) {
    return <h1>Loading tags (or trying to)...</h1>;
  }

  const { category, tag, customizable } = furniture;

  const tags = [
    category.toLowerCase(),
    tag.toLowerCase(),
    `${customizable ? "✔" : "❌"} customizable`,
  ];

  return (
    <>
      <StyledList variant="tags">
        {tags.map((tag) => {
          return (
            <StyledListItem key={tag}>
              <Tag text={tag} />
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
