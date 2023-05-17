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
          rgba(249, 246, 230, 1) 64%
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
          rgba(249, 246, 230, 1) 84%
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
          rgba(249, 246, 230, 1) 84%
        );
      }
    `}
    `;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 0 0.8rem;
  position: relative;
`;

export default function Layout({ children }) {
  const router = useRouter();
  const isIndexPage = router.pathname === "/";
  const isFishPage = router.pathname.startsWith("/fish/");
  const isVillagerPage = router.pathname.startsWith("/villagers/");
  const isBugPage = router.pathname.startsWith("/bugs/");

  return (
    <>
      <Head>
        <title>bota-crossing</title>
      </Head>
      <TitleBar />
      {isIndexPage && <CustomGlobalStyle variant="index" />}
      {isFishPage && <CustomGlobalStyle variant="fish" />}
      {isVillagerPage && <CustomGlobalStyle variant="villager" />}
      {isBugPage && <CustomGlobalStyle variant="bug" />}
      <Main>{children}</Main>
    </>
  );
}
