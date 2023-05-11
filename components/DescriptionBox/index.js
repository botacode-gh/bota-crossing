import styled from "styled-components";
import Image from "next/image";

const StyledSection = styled.section`
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.29);
`;

export default function DescriptionBox({ children, icon }) {
  return (
    <StyledSection>
      {children}
      <Image src={icon} alt={"icon"} width={100} height={100} />
    </StyledSection>
  );
}
