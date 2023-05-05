import { create } from "zustand";

const useStore = create((set, get) => ({
  // fetch: async (...args) => {
  //   const response = await fetch(...args, {
  //     headers: {
  //       "X-API-KEY": process.env.API_KEY,
  //       "Accept-Version": "1.6.0",
  //     },
  villagers: [],
  fish: [],
  bugs: [],
  furniture: [],
  clothing: [],
  recipes: [],
  setVillagers: (data) => set({ villagers: data }),
  setFish: (data) => set({ fish: data }),
  setBugs: (data) => set({ bugs: data }),
  setFurniture: (data) => set({ furniture: data }),
  setClothing: (data) => set({ clothing: data }),
  setRecipes: (data) => set({ recipes: data }),

  requestMade: false,

  fetchData: async () => {
    if (get().requestMade) {
      return;
    }
    set({ requestMade: true });
    const response = await fetch("/api/animal-crossing");
    const data = await response.json();
    console.log("data in store:", data);
    set({ villagers: data });
  },
}));

export default useStore;
