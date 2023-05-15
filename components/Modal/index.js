import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ModalPopupAnimation = keyframes`
  from {
    bottom: -200px;
  }
  
  to {
    bottom: 200px;
  }`;

const Shroud = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledModal = styled.div`
  position: fixed;
  max-height: 200px;
  background-color: white;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.19);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  padding: 1rem;
  z-index: 2;
  width: 80vw;
  inset: 10vh 10vw;

  animation-name: ${ModalPopupAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
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
      <Shroud onClick={handleModalIsVisible}>
        <StyledModal>
          {children}
          <CloseButton onClick={handleModalIsVisible}>✖️</CloseButton>
        </StyledModal>
      </Shroud>
    </>
  );
}
