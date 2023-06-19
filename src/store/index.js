import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const NetflixSlice = createSlice({
  name: "Neflix",
  initialState,
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
