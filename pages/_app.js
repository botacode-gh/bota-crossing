import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import useStore from "@/zustand/store";

const fetcher = async (...args) => {
  const response = await fetch(...args, {
    headers: {
      "X-API-KEY": process.env.API_KEY,
      "Accept-Version": "1.6.0",
    },
  });
  if (!response.ok) {
    const error = new Error(`Error requesting ${JSON.stringify(args)}`);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  const fetchData = useStore((state) => state.fetchData);
  const setVillagers = useStore((state) => state.setVillagers);
  const setFish = useStore((state) => state.setFish);
  const setBugs = useStore((state) => state.setBugs);
  const setFurniture = useStore((state) => state.setFurniture);
  const setClothing = useStore((state) => state.setClothing);
  const setRecipes = useStore((state) => state.setRecipes);

  // fetch and update zustand store with API data
  // const fetchData = async () => {
  //   const VILLAGERS_URL = "https://api.nookipedia.com/villagers";
  //   const FISH_URL = "https://api.nookipedia.com/nh/fish";
  //   const BUGS_URL = "https://api.nookipedia.com/nh/bugs";
  //   const FURNITURE_URL = "https://api.nookipedia.com/nh/furniture";
  //   const CLOTHING_URL = "https://api.nookipedia.com/nh/clothing";
  //   const RECIPES_URL = "https://api.nookipedia.com/nh/recipes";
  //   console.log("about to fetch");
  //   try {
  //     const villagersData = await fetcher(VILLAGERS_URL);
  //     // const fishData = await fetcher(FISH_URL);
  //     // const bugsData = await fetcher(BUGS_URL);
  //     // const furnitureData = await fetcher(FURNITURE_URL);
  //     // const clothingData = await fetcher(CLOTHING_URL);
  //     // const recipesData = await fetcher(RECIPES_URL);
  //     // console.log("villagersData:", villagersData);

  //     setVillagers(villagersData);
  //     // setFish(fishData);
  //     // setBugs(bugsData);
  //     // setFurniture(furnitureData);
  //     // setClothing(clothingData);
  //     // setRecipes(recipesData);
  //   } catch (error) {
  //     console.error("Error fetching API data:", error);
  //   }
  // };

  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    // setHasFetchedData(true);
    // console.log("hasFetchedData:", hasFetchedData);
    // if (hasFetchedData) {
    //   return;
    // }

    fetchData();
  }, []);

  const villagers = useStore((state) => state.villagers);
  console.log("villagers in _app.js:", villagers);

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
