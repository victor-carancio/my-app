import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Country from "../../interfaces/Country";

import {
  getCountries,
  getFilterCountries,
  getCountryDetail,
} from "../../api/countriesApi";

export interface CountryState {
  countriesList: Country[];
  isLoading: boolean;
  countryDetails: [];
  search: string;
  filter: string;
  isDark: boolean;
}

const initialState: CountryState = {
  countriesList: [],
  isLoading: true,
  countryDetails: [],
  search: "",
  filter: "",
  isDark: true,
};

export const getCountryList = createAsyncThunk(
  "country/getCountryList",
  async (data, { getState, rejectWithValue }) => {
    const { country }: any = getState();
    const { search, filter } = country;

    try {
      if (filter && !search) {
        const response = await getFilterCountries(filter);
        return response;
      }
      if ((filter && search) || (!filter && search) || (!filter && !search)) {
        const response = await getCountries(search);
        return response;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCountryDetails = createAsyncThunk(
  "country/getCountryDetail",
  async (data: string) => {
    try {
      const response: any = await getCountryDetail(data);

      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.isDark = !state.isDark;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    clearFilters: (state) => {
      state.filter = "";
      state.search = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountryList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountryList.fulfilled, (state, { payload }) => {
        state.countriesList = payload;
        state.isLoading = false;
      })
      .addCase(getCountryList.rejected, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(getCountryDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountryDetails.fulfilled, (state, { payload }) => {
        state.countryDetails = payload;
        state.isLoading = false;
      });
  },
});

export const { darkMode, setSearch, setFilter, clearFilters } =
  countrySlice.actions;

export default countrySlice.reducer;
