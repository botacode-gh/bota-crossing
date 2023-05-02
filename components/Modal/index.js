import styled from "styled-components";

const Shroud = styled.div`
  inset: 0;
  background-color: black;
  opacity: 50%;
  position: fixed;
`;

const StyledModal = styled.div`
  position: fixed;
  inset: 10vh 10vw;
  max-height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
`;

export default function Modal({ handleModalIsVisible, children }) {
  return (
    <>
      <Shroud onClick={handleModalIsVisible} />
      <StyledModal>{children}</StyledModal>
    </>
  );
}
