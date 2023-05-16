import { useEffect } from "react";
import useStore from "@/zustand/store";
import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const { acquiredItems, isRemoveModalOpen } = useStore();

  useEffect(() => {
    useStore.getState().loadAcquiredItems();
  }, []);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        acquiredItems={acquiredItems}
        isRemoveModalOpen={isRemoveModalOpen}
      />
    </Layout>
  );
}
