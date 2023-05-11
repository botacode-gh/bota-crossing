import useStore from "@/zustand/store";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const acquiredItems = useStore((state) => state.acquiredItems);

  useEffect(() => {
    useStore.getState().loadAcquiredItems();
  }, []);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} acquiredItems={acquiredItems} />
    </Layout>
  );
}
