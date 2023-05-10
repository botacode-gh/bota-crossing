import styled from "styled-components";
import { getRandom } from "@/lib/utils";

const StyledQuote = styled.article`
  text-align: center;
  rotate: 15deg;
  font-size: 0.8rem;
  color: #593b23;
`;

export default function ItemQuote({ quotes }) {
  return <StyledQuote>{getRandom(quotes)}</StyledQuote>;
}
