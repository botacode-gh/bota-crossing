const DUMMY_RECIPES = [
  {
    slug: "sardines-in-oil",
    type: "recipe",
    name: "Sardines in Oil",
    ingredients: [[1, "Anchovy"]],
    sellingPrice: 300,
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
  {
    slug: "anchoas-al-ajillo",
    type: "recipe",
    name: "Anchoas al Ajillo",
    ingredients: [[2, "Anchovy"]],
    sellingPrice: 600,
    isAcquired: false,
  },
  {
    slug: "sea-bass-pie",
    type: "recipe",
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
    type: "fish",
    name: "Anchovy",
    quotes: [
      "I caught an anchovy!\nStay away from my pizza!",
      "They swim—mouths open—to filter\nfood particles from the sea.",
    ],
    imageSource: "https://acnhapi.com/v1/images/fish/56",
    iconSource: "https://acnhapi.com/v1/icons/fish/56",
    availability: {
      rarity: "Common",
      location: "at Sea",
      month: "",
      time: "4am – 9pm",
    },
    museum: {
      displayLocation: "Aquarium East, Tank 1",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 400],
        ["Flick", 600],
      ],
    },
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
  {
    slug: "sea-bass",
    type: "fish",
    name: "Sea Bass",
    quotes: [
      "I caught a sea bass!\n No, wait— it's at least a C++!",
      "Some are as small as 10cm\nand some as big as 2m!",
    ],
    imageSource: "https://acnhapi.com/v1/images/fish/59",
    iconSource: "https://acnhapi.com/v1/icons/fish/59",
    availability: {
      rarity: "Common",
      location: "at Sea",
      month: "",
      time: "",
    },
    museum: {
      displayLocation: "Sea Fish, Far-Right Tank",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 400],
        ["Flick", 600],
      ],
    },
    isAcquired: false,
  },
];

const DUMMY_BUGS = [
  {
    slug: "ladybug",
    type: "bug",
    name: "Ladybug",
    quotes: [
      "I caught a ladybug!\n Sorry to disturb you, ma'am.",
      "It is said that when a ladybug lands on you\n...you'll have good luck!",
    ],
    imageSource: "https://acnhapi.com/v1/images/bugs/43",
    iconSource: "https://acnhapi.com/v1/icons/bugs/43",
    availability: {
      rarity: "Common",
      location: "on flowers",
      month: "Mar–Jun & Oct",
      time: "8am – 5pm",
    },
    museum: {
      displayLocation: "Bug Exhibit, Butterfly Garden",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 200],
        ["Flick", 300],
      ],
    },
    isAcquired: true,
    unlockDate: "25 Apr '23",
    isModelled: false,
  },
];

const DUMMY_FURNITURES = [
  {
    slug: "moroccan-sofa",
    type: "furniture",
    name: "Moroccan Sofa",
    imageSource:
      "https://dummyimage.com/600x400/000/fff.png&text=moroccan sofa",
    iconSource:
      "https://dummyimage.com/400x400/000/fff.png&text=moroccan sofa icon",
    price: {
      buy: [["Nook's", 15000]],
      sell: [["Nook's", 3750]],
    },
    tag: "sofa",
    isDIY: false,
    isInteractive: true,
    isCatalog: true,
    variants: [
      {
        variant: "Red",
        imageSource: "https://dummyimage.com/600x400/000/f00.png&text=red sofa",
      },
      {
        variant: "Yellow",
        imageSource:
          "https://dummyimage.com/600x400/000/ff0.png&text=yellow sofa",
      },
      {
        variant: "Blue",
        imageSource:
          "https://dummyimage.com/600x400/000/00f.png&text=blue sofa",
      },
      {
        variant: "Pink",
        imageSource:
          "https://dummyimage.com/600x400/000/f0c.png&text=pink sofa",
      },
      {
        variant: "White",
        imageSource:
          "https://dummyimage.com/600x400/000/fff.png&text=white sofa",
      },
      {
        variant: "Green",
        imageSource:
          "https://dummyimage.com/600x400/000/080.png&text=green sofa",
      },
    ],
    isAcquired: true,
    unlockDate: "26 Apr '23",
  },
];

const DUMMY_RESIDENTS = [
  {
    slug: "ozzie",
    type: "resident",
    name: "Ozzie",
    saying: "Half a loaf is better than none.",
    personality: "lazy",
    species: "koala",
    hobby: "play",
    catchphrase: "ol' bear",
    birthday: "May 5th",
    imageSource: "https://acnhapi.com/v1/images/villagers/225",
    iconSource: "https://acnhapi.com/v1/icons/villagers/225",
    isAcquired: true,
    unlockDate: "27 Apr '23",
  },
];

const DUMMY_ITEMS = [
  {
    slug: "sardines-in-oil",
    type: "recipe",
    name: "Sardines in Oil",
    ingredients: [[1, "Anchovy"]],
    sellingPrice: 300,
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
  {
    slug: "anchoas-al-ajillo",
    type: "recipe",
    name: "Anchoas al Ajillo",
    ingredients: [[2, "Anchovy"]],
    sellingPrice: 600,
    isAcquired: false,
  },
  {
    slug: "sea-bass-pie",
    type: "recipe",
    name: "Sea-bass pie",
    ingredients: [
      [3, "Flour"],
      [1, "Sea Bass"],
    ],
    sellingPrice: 1240,
    isAcquired: true,
    unlockDate: "1 Apr '23",
  },
  {
    slug: "ozzie",
    type: "resident",
    name: "Ozzie",
    saying: "Half a loaf is better than none.",
    personality: "lazy",
    species: "koala",
    hobby: "play",
    catchphrase: "ol' bear",
    birthday: "May 5th",
    imageSource: "https://acnhapi.com/v1/images/villagers/225",
    iconSource: "https://acnhapi.com/v1/icons/villagers/225",
  },
  {
    slug: "anchovy",
    type: "fish",
    name: "Anchovy",
    quotes: [
      "I caught an anchovy!\nStay away from my pizza!",
      "They swim—mouths open—to filter\nfood particles from the sea.",
    ],
    imageSource: "https://acnhapi.com/v1/images/fish/56",
    iconSource: "https://acnhapi.com/v1/icons/fish/56",
    availability: {
      rarity: "Common",
      location: "at Sea",
      month: "",
      time: "4am – 9pm",
    },
    museum: {
      displayLocation: "Aquarium East, Tank 1",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 400],
        ["Flick", 600],
      ],
    },
  },
  {
    slug: "ladybug",
    type: "bug",
    name: "Ladybug",
    quotes: [
      "I caught a ladybug!\n Sorry to disturb you, ma'am.",
      "It is said that when a ladybug lands on you\n...you'll have good luck!",
    ],
    imageSource: "https://acnhapi.com/v1/images/bugs/43",
    iconSource: "https://acnhapi.com/v1/icons/bugs/43",
    availability: {
      rarity: "Common",
      location: "on flowers",
      month: "Mar–Jun & Oct",
      time: "8am – 5pm",
    },
    museum: {
      displayLocation: "Bug Exhibit, Butterfly Garden",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 200],
        ["Flick", 300],
      ],
    },
    isModelled: false,
  },
  {
    slug: "moroccan-sofa",
    type: "furniture",
    name: "Moroccan Sofa",
    imageSource:
      "https://dummyimage.com/600x400/000/fff.png&text=moroccan sofa",
    iconSource:
      "https://dummyimage.com/400x400/000/fff.png&text=moroccan sofa icon",
    price: {
      buy: [["Nook's", 15000]],
      sell: [["Nook's", 3750]],
    },
    tag: "sofa",
    isDIY: false,
    isInteractive: true,
    isCatalog: true,
    variants: [
      {
        variant: "Red",
        imageSource: "https://dummyimage.com/600x400/000/f00.png&text=red sofa",
      },
      {
        variant: "Yellow",
        imageSource:
          "https://dummyimage.com/600x400/000/ff0.png&text=yellow sofa",
      },
      {
        variant: "Blue",
        imageSource:
          "https://dummyimage.com/600x400/000/00f.png&text=blue sofa",
      },
      {
        variant: "Pink",
        imageSource:
          "https://dummyimage.com/600x400/000/f0c.png&text=pink sofa",
      },
      {
        variant: "White",
        imageSource:
          "https://dummyimage.com/600x400/000/fff.png&text=white sofa",
      },
      {
        variant: "Green",
        imageSource:
          "https://dummyimage.com/600x400/000/080.png&text=green sofa",
      },
    ],
  },
];

export {
  DUMMY_RECIPES,
  DUMMY_FISH,
  DUMMY_BUGS,
  DUMMY_FURNITURES,
  DUMMY_RESIDENTS,
  DUMMY_ITEMS,
};
