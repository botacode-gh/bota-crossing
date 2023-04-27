import Tag from "../Tag";

export default function TagsContainer({ furniture }) {
  if (!furniture) {
    return <h1>Loading tags (or trying to)...</h1>;
  }

  const { tag, isDIY, isInteractive, isCatalog } = furniture;

  const tags = [
    tag,
    `${isDIY ? "✔" : "❌"} DIY`,
    `${isInteractive ? "✔" : "❌"} Interactive`,
    `${isCatalog ? "✔" : "❌"} Catalog`,
  ];

  return (
    <>
      <ul>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <Tag text={tag} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
