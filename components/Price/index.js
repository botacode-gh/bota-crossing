import styled from "styled-components";
import { formatPrice } from "@/lib/utils";

const StyledPrice = styled.span`
  color: #27a590;
`;

export default function Price({ children }) {
  return <StyledPrice>{formatPrice(children)}</StyledPrice>;
}
