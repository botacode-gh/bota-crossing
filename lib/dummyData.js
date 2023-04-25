const DUMMY_RECIPES = [
  {
    slug: "sardines-in-oil",
    name: "Sardines in Oil",
    ingredients: [[1, "Anchovy"]],
    sellingPrice: 300,
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
  {
    slug: "anchoas-al-ajillo",
    name: "Anchoas al Ajillo",
    ingredients: [[2, "Anchovy"]],
    sellingPrice: 600,
    isAcquired: false,
  },
  {
    slug: "sea-bass-pie",
    name: "Sea-bass pie",
    ingredients: [
      [3, "Flour"],
      [1, "Sea Bass"],
    ],
    sellingPrice: 1240,
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
];

const DUMMY_FISH = [
  {
    slug: "anchovy",
    name: "Anchovy",
    quotes: [
      "I caught an anchovy!\nStay away from my pizza!",
      "They swim—mouths open—to filter\nfood particles from the sea.",
    ],
    imageSource: "https://acnhapi.com/v1/images/fish/56",
    iconSource: "https://acnhapi.com/v1/icons/fish/56",
    availability: {
      rarity: "Common",
      location: "Sea",
      month: "",
      time: "4am – 9pm",
    },
    museum: {
      displayLocation: "Aquarium East, Tank 1",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: [
      ["Nook's", 200],
      ["CJ", 300],
    ],
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
  {
    slug: "sea-bass",
    name: "Sea Bass",
    quotes: [
      "I caught a sea bass!\n No, wait— it's at least a C++!",
      "Some are as small as 10cm\nand some as big as 2m!",
    ],
    imageSource: "https://acnhapi.com/v1/images/fish/59",
    iconSource: "https://acnhapi.com/v1/icons/fish/59",
    availability: {
      rarity: "Common",
      location: "Sea",
      month: "",
      time: "",
    },
    museum: {
      displayLocation: "Sea Fish, Far-Right Tank",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: [
      ["Nook's", 400],
      ["CJ", 600],
    ],
    isAcquired: false,
  },
];

export { DUMMY_RECIPES, DUMMY_FISH };
