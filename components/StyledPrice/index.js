import { formatPrice } from "@/lib/utils";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: #27a590;
`;

export default function StyledPrice({ children }) {
  return <StyledSpan>{formatPrice(children)}</StyledSpan>;
}
