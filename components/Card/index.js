import styled from "styled-components";

const StyledArticle = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
`;

export default function Card({ name, category }) {
  return (
    <StyledArticle>
      {name}
      <div>{category}</div>
    </StyledArticle>
  );
}
