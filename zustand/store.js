import Fuse from "fuse.js";
import { create } from "zustand";

import bugs from "../lib/apiData/bugs.json";
import clothing from "../lib/apiData/clothing.json";
import fish from "../lib/apiData/fish.json";
import furniture from "../lib/apiData/furniture.json";
import recipes from "../lib/apiData/recipes.json";
import villagers from "../lib/apiData/villagers.json";

const useStore = create((set, get) => ({
  acquiredItems: [],
  allItems: [],
  fuse: null,

  addedModalMessage: "Item added!",
  isAddedModalOpen: false,
  isRemoveModalOpen: false,
  isDropdownOpen: false,

  itemName: "",
  inputPrompt: "Add something!",

  setAcquiredItems: (items) => set({ acquiredItems: items }),
  setItemName: (item) => set({ itemName: item }),
  setInputPrompt: (prompt) => set({ inputPrompt: prompt }),

  setAddedModalMessage: (message) => set({ addedModalMessage: message }),
  setIsAddedModalOpen: (isOpen) => set({ isAddedModalOpen: isOpen }),
  setRemoveModalOpen: (isOpen) => set({ isRemoveModalOpen: isOpen }),
  setIsDropdownOpen: (isOpen) => set({ isDropdownOpen: isOpen }),

  // add items to acquiredItems array in localStorage
  addAcquiredItem: (item) => {
    const acquiredItem = {
      // name: item.name,
      // type: item.type,
      // icon_url: item.icon_url,
      // image_url: item.image_url,
      ...item,
      isAcquired: true,
      acquireDate: new Date(),
    };
    // if (item.type === "furniture" || item.type === "clothing") {
    //   acquiredItem.variations = item.variations;
    // }
    const storedItems = JSON.parse(localStorage.getItem("acquiredItems")) || [];
    const newStoredItems = [...storedItems, acquiredItem];
    localStorage.setItem("acquiredItems", JSON.stringify(newStoredItems));
    set({ acquiredItems: newStoredItems });
  },

  // load items from acquiredItems array in localStorage
  loadAcquiredItems: () => {
    const storedItems = localStorage.getItem("acquiredItems");
    if (storedItems) {
      set({ acquiredItems: JSON.parse(storedItems) });
    }
  },

  // prepare items for search
  loadAllItems: () => {
    const allItems = [...bugs, ...fish, ...furniture, ...villagers];

    // create fuse object for searching items
    const options = {
      includeScore: true,
      keys: ["name"],
    };
    const fuse = new Fuse(allItems, options);
    set({ allItems, fuse });
  },

  // remove all items from localStorage
  removeAllItems: () => {
    localStorage.removeItem("acquiredItems");
  },

  // function to search for items using fuse.js
  searchItems: (searchTerm) => {
    const fuse = get().fuse;
    const results = fuse.search(searchTerm);
    return results.map(({ item }) => item);
  },
}));

export default useStore;
