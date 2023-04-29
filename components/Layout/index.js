import styled from "styled-components";
import Head from "next/head";
import TitleBar from "@/components/TitleBar";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding: 0.5rem;
  width: 90vw;
  max-width: 700px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>🏝️ bota-crossing</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}
