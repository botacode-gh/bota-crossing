import styled, { css, createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import TitleBar from "@/components/TitleBar";

const CustomGlobalStyle = createGlobalStyle`
  background-color: rgb(249, 246, 230);

  ${({ variant }) =>
    variant === "fish" &&
    css`
      body {
        background: rgb(158, 210, 202);
        background: linear-gradient(
          0deg,
          rgba(158, 210, 202, 1) 0%,
          rgba(249, 246, 230, 1) 47%
        );
      }
    `}

  ${({ variant }) =>
    variant === "villager" &&
    css`
      body {
        background: rgb(235, 150, 152);
        background: linear-gradient(
          0deg,
          rgba(235, 150, 152, 0.6432948179271709) 0%,
          rgba(249, 246, 230, 1) 44%
        );
      }
    `}

  ${({ variant }) =>
    variant === "bug" &&
    css`
      body {
        background: rgb(235, 150, 152);
        background: linear-gradient(
          0deg,
          rgba(235, 150, 152, 0.6432948179271709) 0%,
          rgba(249, 246, 230, 1) 44%
        );
      }
    `}
    `;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  width: 90vw;
  max-width: 700px;
`;

export default function Layout({ children }) {
  const router = useRouter();
  const isFishPage = router.pathname.startsWith("/fish/");
  const isVillagerPage = router.pathname.startsWith("/villagers/");
  const isBugPage = router.pathname.startsWith("/bug/");

  return (
    <>
      <Head>
        <title>bota-crossing</title>
      </Head>
      <TitleBar />
      {isFishPage && <CustomGlobalStyle variant="fish" />}
      {isVillagerPage && <CustomGlobalStyle variant="villager" />}
      {isBugPage && <CustomGlobalStyle variant="bug" />}
      <Main>{children}</Main>
    </>
  );
}
