import customFetch from "../../ultils/axios";

export const getAllProductsThunk = async (_, thunkAPI) => {
  const { search, page, size, sort, filter } = thunkAPI.getState().products;
  let url = `/api/products?sort=${sort}&filter=${filter}&page=${page}&size=${size}`;
  if (search) {
    url += `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
