import styled from "styled-components";
import Image from "next/image";
import islandPic from "@/public/floating_island.png";

export default function IslandPic({ shouldFade }) {
  return (
    <StyledIslandPic
      src={islandPic}
      alt="floating island"
      item="furniture"
      width={500}
      shouldFade={shouldFade}
    />
  );
}

const StyledIslandPic = styled(Image)`
  position: absolute;
  top: 180px;
  left: -180px;
  transform: scaleX(-1);
  z-index: ${(props) => (props.shouldFade ? -1 : 1)};
  opacity: ${(props) => (props.shouldFade ? "33%" : "100%")};
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
`;
