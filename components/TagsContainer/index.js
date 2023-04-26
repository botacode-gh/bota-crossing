import Tag from "../Tag";

export default function TagsContainer({ furniture }) {
  if (!furniture) {
    return <h1>Loading tags (or trying to)...</h1>;
  }

  const { tag, isDIY, isInteractive, isCatalog } = furniture;

  const tags = [
    tag,
    `DIY ${isDIY ? "✔" : "❌"}`,
    `Interactive ${isInteractive ? "✔" : "❌"}`,
    `Catalog ${isCatalog ? "✔" : "❌"}`,
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
