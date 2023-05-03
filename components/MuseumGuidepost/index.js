import styled from "styled-components";
import Image from "next/image";

const StyledMuseumGuidepost = styled.div`
  width: 100%;

  div {
    border: 1px solid black;
    border-radius: 20px;
    padding: 0 0 1rem 1rem;
  }
`;

export default function MuseumGuidepost({ displayLocation, mapSource }) {
  return (
    <StyledMuseumGuidepost>
      <h3>Museum Display</h3>
      <div>
        <p>
          <span aria-label="Location">📍</span>
          {displayLocation}
        </p>
        <Image
          src={mapSource}
          alt="Placeholder image for Museum Map"
          width={150}
          height={100}
        />
      </div>
    </StyledMuseumGuidepost>
  );
}
