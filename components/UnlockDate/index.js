import styled from "styled-components";

const StyledUnlockDate = styled.div`
  justify-self: center;
`;

export default function UnlockDate({ date, type }) {
  const verb =
    type === "fish" || type === "bug"
      ? "caught"
      : type === "resident"
      ? "moved to island"
      : "acquired";

  return (
    <StyledUnlockDate>
      {date ? `${verb} on ${date}` : "not unlocked yet"}
    </StyledUnlockDate>
  );
}
