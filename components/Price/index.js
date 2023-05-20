import styled from "styled-components";
import { formatPrice } from "@/lib/utils";

export default function Price({ children }) {
  return <StyledPrice>{formatPrice(children)}</StyledPrice>;
}

const StyledPrice = styled.span`
  color: #27a590;
`;
