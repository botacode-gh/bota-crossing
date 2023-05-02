import styled from "styled-components";
import Image from "next/image";

const StyledVariantContainer = styled.div`
  width: 100%;
`;

const StyledVariantsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const StyledVariantListItem = styled.li`
  border: 1px solid black;
  border-radius: 20px;
  padding: 0 0 1rem 1rem;
  margin-top: 1rem;
`;

export default function VariantsDisplay({ furniture }) {
  return (
    <StyledVariantContainer>
      <h3>Variants</h3>
      <StyledVariantsList>
        {furniture.variants.map((variant) => {
          return (
            <StyledVariantListItem key={variant.variant}>
              <h4>{variant.variant}</h4>
              <Image
                src={variant.imageSource}
                alt="dummy alt"
                width={100}
                height={100}
              />
            </StyledVariantListItem>
          );
        })}
      </StyledVariantsList>
    </StyledVariantContainer>
  );
}
