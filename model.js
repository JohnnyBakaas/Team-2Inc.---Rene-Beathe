const root = document.getElementById("root");

const model = {
  app: {
    state: "homePage",
    curentUser: null,
  },

  inputs: {
    bookingData: {
      firstName: "",
      lastName: "",
      email: "",
      adress: "",
      zipCode: "",

      days: [],
    },

    loginData: {
      username: "",
      pasword: "",
    },

    shoppingCart: [],

    shoppingFilters: [],
  },

  data: {
    portfolioArticles: [
      {
        title: "Mauertua barnehage",
        img: "ing/mauertua barnehage.png",
        content: [
          { text: "i dette prosjektet..." },
          { img: "img/mauertua barnehage.png" },
          { text: "mer tekst og ting..." },
        ],
        articleId: 0,
      },
      {
        title: "Annen barnehage",
        img: "ing/annen barnehage.png",
        content: [
          { text: "i dette prosjektet..." },
          { img: "img/annen barnehage.png" },
          { text: "mer tekst og ting..." },
        ],
        articleId: 1,
      },
    ],
    storeArticles: [
      {
        title: "Kurs i mattematikk",
        img: "img/kurs i matteematikk.png",
        description: "dette er ett flott produkt..",
        category: ["Utdanningsmatreale", "Mattematikk"],
        storeId: 0,
        price: 24543,
      },
      {
        title: "Kurs i naturfag",
        img: "img/kurs i naturfag.png",
        description: "dette er ett flott produkt..",
        category: ["Utdanningsmatreale", "Naturfag"],
        storeId: 1,
        price: 24543,
      },
      {
        title: "Hettegenser",
        img: "img/hettegenser.png",
        description: "dette er ett flott produkt..",
        category: ["Hettegenser", "Klær"],
        colors: [{ text: "Svart", css: "black" }],
        storeId: 2,
        price: 999,
      },
    ],

    users: [
      {
        name: "Heine",
        userId: 0,
        pasword: "hemmelig",
      },
    ],

    orders: [
      {
        userId: 0,
        storeIds: [0, 2],
        orderDate: "18.01.2023",
      },
    ],
    calendar: [{ date: "28.01.2023" }],
  },
};
