import { createSlice } from "@reduxjs/toolkit";

const conversionSlice = createSlice({
  name: "conversion",
  initialState: {
    selectedCategory: "Все",
    filteredCurrencies: [],
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterCurrencies: (state, action) => {
      console.log(action.payload);
      const { filter, selectedCategory } = action.payload;
      if (selectedCategory === "Все") {
        state.filteredCurrencies = Object.keys(filter).filter(
          (currency) => filter[currency].length > 0
        );
      } else {
        state.filteredCurrencies = filter[selectedCategory];
      }
    },
  },
});

export const { selectCategory, filterCurrencies } = conversionSlice.actions;

export default conversionSlice.reducer;
