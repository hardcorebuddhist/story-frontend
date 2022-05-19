import { createSlice } from "@reduxjs/toolkit";

const initialState = { allSpaces: [], spaceDetails: null };

export const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    fetchSpacesSuccess: (state, action) => {
      state.allSpaces = action.payload;
    },
    spaceDetailsFetched: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { fetchSpacesSuccess, spaceDetailsFetched } = spacesSlice.actions;

export default spacesSlice.reducer;
