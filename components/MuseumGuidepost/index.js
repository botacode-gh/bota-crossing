import Image from "next/image";
import styled from "styled-components";

const StyledMuseumGuidepost = styled.div`
  border: 1px solid black;
`;

export default function MuseumGuidepost({ displayLocation, mapSource }) {
  return (
    <StyledMuseumGuidepost>
      <h3>Museum Display</h3>
      <p>
        <span aria-label="Location">📍</span>
        {displayLocation}
      </p>
      <Image
        src={mapSource}
        alt="Placeholder image for Museum Map"
        width={600}
        height={400}
      />
    </StyledMuseumGuidepost>
  );
}
