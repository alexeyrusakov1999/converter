import { createSlice } from "@reduxjs/toolkit";

const filter = [
  {
    from: {
      code: "BTC",
      name: "Bitcoin BTC ",
    },
    to: [
      {
        code: "CASHRUB",
        name: " Наличные RUB",
      },
      {
        code: "CASHUSD",
        name: " Наличные USD",
      },
      {
        code: "SBERRUB",
        name: " Сбербанк RUB",
      },
      {
        code: "ACRUB",
        name: " Альфа-банк RUB",
      },
      {
        code: "TCSBRUB",
        name: " Тинькофф RUB",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC-20 USDTTRC",
      },
    ],
  },
  {
    from: {
      code: "ETH",
      name: "Ethereum ETH ",
    },
    to: [
      {
        code: "CASHUSD",
        name: " Наличные USD",
      },
      {
        code: "CASHRUB",
        name: " Наличные RUB",
      },
      {
        code: "SBERRUB",
        name: " Сбербанк RUB",
      },
      {
        code: "ACRUB",
        name: " Альфа-банк RUB",
      },
      {
        code: "TCSBRUB",
        name: " Тинькофф RUB",
      },
    ],
  },
  {
    from: {
      code: "CASHUSD",
      name: "Наличные USD ",
    },
    to: [
      {
        code: "BTC",
        name: " Bitcoin BTC",
      },
      {
        code: "ETH",
        name: " Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC20 USDT",
      },
    ],
  },
  {
    from: {
      code: "CASHRUB",
      name: "Наличные RUB ",
    },
    to: [
      {
        code: "BTC",
        name: " Bitcoin BTC",
      },
      {
        code: "ETH",
        name: " Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC20 USDT",
      },
    ],
  },
  {
    from: {
      code: "ACRUB",
      name: "Альфа-банк RUB ",
    },
    to: [
      {
        code: "BTC",
        name: " Bitcoin BTC",
      },
      {
        code: "ETH",
        name: " Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC20 USDT",
      },
    ],
  },
  {
    from: {
      code: "SBERRUB",
      name: "Сбербанк RUB ",
    },
    to: [
      {
        code: "BTC",
        name: " Bitcoin BTC",
      },
      {
        code: "ETH",
        name: " Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC20 USDT",
      },
      {
        code: "PMUSD",
        name: " PerfectMoney USD",
      },
      {
        code: "TRX",
        name: " TRON TRX",
      },
      {
        code: "P24UAH",
        name: " Приват24 UAH",
      },
      {
        code: "MONOBUAH",
        name: " Монобанк UAH",
      },
      {
        code: "CARDUAH",
        name: " Visa/Mastercard UAH",
      },
    ],
  },
  {
    from: {
      code: "TCSBRUB",
      name: "Тинькофф RUB ",
    },
    to: [
      {
        code: "BTC",
        name: " Bitcoin BTC",
      },
      {
        code: "ETH",
        name: " Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC20 USDT",
      },
      {
        code: "PMUSD",
        name: " PerfectMoney USD",
      },
      {
        code: "TRX",
        name: " TRON TRX",
      },
      {
        code: "P24UAH",
        name: " Приват24 UAH",
      },
      {
        code: "MONOBUAH",
        name: " Монобанк UAH",
      },
    ],
  },
  {
    from: {
      code: "USDTTRC",
      name: "Tether TRC20 USDT ",
    },
    to: [
      {
        code: "ACRUB",
        name: " Альфа RUB",
      },
      {
        code: "TCSBRUB",
        name: " Тинькофф RUB",
      },
      {
        code: "SBERRUB",
        name: " Сбербанк RUB",
      },
      {
        code: "CARDRUB",
        name: " Visa/Mastercard RUB",
      },
      {
        code: "QWRUB",
        name: " Qiwi RUB",
      },
      {
        code: "CASHRUB",
        name: " Наличные RUB",
      },
      {
        code: "CASHUSD",
        name: " Наличные USD",
      },
      {
        code: "CARDUAH",
        name: " Visa/Mastercard UAH",
      },
      {
        code: "MONOBUAH",
        name: " Монобанк UAH",
      },
      {
        code: "WIREUAH",
        name: " Любой банк UAH",
      },
      {
        code: "OSDBUAH",
        name: " Ощадбанк UAH",
      },
      {
        code: "P24UAH",
        name: " Приват24 UAH",
      },
      {
        code: "BTC",
        name: " Bitcoin BTC",
      },
      {
        code: "CASHAED",
        name: " Наличные AED",
      },
      {
        code: "CNTRUB",
        name: " Qiwi Contact RUB",
      },
    ],
  },
];

const initialState = {
  category: "Все",
  filteredDirections: [],
  currency: "USD",
  currencyOptions: [],
  conversionCategory: "Все",
  filteredCurrencyOptions: [],
};

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.conversionCategory = "Все";
    },
    setConversionCategory: (state, action) => {
      state.conversionCategory = action.payload;
    },
    filterDirections: (state, action) => {
      const { directions, selectedCategory } = action.payload;
      if (selectedCategory === "Все") {
        state.filteredDirections = directions;
      } else if (selectedCategory === "Криптовалюты") {
        state.filteredDirections = directions.filter((direction) =>
          ["BTC", "ETH", "USDTTRC"].includes(direction.code)
        );
      } else if (selectedCategory === "Наличные") {
        state.filteredDirections = directions.filter((direction) =>
          ["CASHUSD", "CASHRUB"].includes(direction.code)
        );
      } else if (selectedCategory === "Банки RUB") {
        state.filteredDirections = directions.filter((direction) =>
          ["ACRUB", "SBERRUB", "TCSBRUB"].includes(direction.code)
        );
      } else if (selectedCategory === "Банки UAH") {
        state.filteredDirections = directions.filter((direction) =>
          ["ACRUB", "SBERRUB", "TCSBRUB"].includes(direction.code)
        );
      }
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
      state.conversionCategory = "Все";

      const currencyOptions = filter.find(
        (item) => item.from.code === action.payload
      );

      if (currencyOptions) {
        const toCodes = currencyOptions.to.map((option) => option.code);
        state.currencyOptions = toCodes;
      } else {
        state.currencyOptions = [];
      }
    },
    filterCurrencyOptions: (state, action) => {
      console.log(action.payload);
      const { filter, selectedCategory } = action.payload;
      if (selectedCategory === "Все") {
        state.filteredCurrencyOptions = state.currencyOptions;
      } else if (selectedCategory === "Криптовалюты") {
        state.filteredCurrencyOptions = state.currencyOptions.filter((item) =>
          filter.Криптовалюты.includes(item)
        );
      } else if (selectedCategory === "Наличные") {
        state.filteredCurrencyOptions = state.currencyOptions.filter((item) =>
          filter.Наличные.includes(item)
        );
      } else if (selectedCategory === "Банки RUB") {
        state.filteredCurrencyOptions = state.currencyOptions.filter((item) =>
          filter["Банки RUB"].includes(item)
        );
      } else if (selectedCategory === "Банки UAH") {
        state.filteredCurrencyOptions = state.currencyOptions.filter((item) =>
          filter["Банки UAH"].includes(item)
        );
      }
    },
  },
});

export default toolkitSlice.reducer;
export const {
  setCategory,
  setCurrency,
  filterDirections,
  setConversionCategory,
  filterCurrencyOptions,
} = toolkitSlice.actions;
