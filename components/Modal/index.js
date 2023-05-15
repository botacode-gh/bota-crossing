import { useEffect } from "react";
import styled from "styled-components";

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
  max-width: 500px;
  inset: 10vh 10vw;
  margin: auto;
  gap: 1rem;
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
        <StyledModal>{children}</StyledModal>
      </Shroud>
    </>
  );
}
