import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllProductsThunk } from "./productThunk";

const initialState = {
  isProductLoading: false,
  products: [],
  totalProductPages: 1,
  page: 1,
  size: 10,
  search: "",
  sort: "All",
  sortOptions: ["AscName", "DescName", "AscPrice", "DescPrice"],
  filter: "All",
  filterOptions: ["Ingredient", "Tool"],
};

export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  getAllProductsThunk
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleProductChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    changeProductPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isProductLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.isProductLoading = false;
      state.products = payload.products;
      state.totalProductPages = payload.totalPages;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isProductLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleProductChange, changeProductPage } = productSlice.actions;
export default productSlice.reducer;
