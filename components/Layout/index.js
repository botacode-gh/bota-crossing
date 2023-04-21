import TitleBar from "@/components/TitleBar";
import styled from "styled-components";
import Head from "next/head";

const Main = styled.main`
  display: grid;
  gap: 0.7rem;
  padding: 0.5rem;
  position: relative;
  max-width: 800px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>bota 🏝️ crossing</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}
