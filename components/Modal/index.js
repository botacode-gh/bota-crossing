import { useEffect } from "react";
import styled from "styled-components";

const Shroud = styled.div`
  inset: 0;
  background-color: black;
  opacity: 50%;
  position: fixed;
  z-index: 1;
`;

const StyledModal = styled.div`
  position: fixed;
  inset: 10vh 10vw;
  max-height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  padding: 1rem;
  max-width: 700px;
  z-index: 2;
`;

const CloseButton = styled.div`
  position: fixed;
  top: 12vh;
  right: 15vw;
  scale: 1.5;
  cursor: pointer;
  z-index: 2;
`;

export default function Modal({ handleModalIsVisible, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Enter") {
        handleModalIsVisible();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalIsVisible]);

  return (
    <>
      <Shroud onClick={handleModalIsVisible} />
      <StyledModal>
        {children}
        <CloseButton onClick={handleModalIsVisible}>✖️</CloseButton>
      </StyledModal>
    </>
  );
}
