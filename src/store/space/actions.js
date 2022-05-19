import { fetchSpacesSuccess, spaceDetailsFetched } from "./slice";
import axios from "axios";

const API_URL = `http://localhost:4000`;

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      // const spaces = getState().spaces.allSpaces.length;
      const response = await axios.get(`${API_URL}/spaces`);

      // console.log("ResponseData", response.data);
      dispatch(fetchSpacesSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchSpaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/spaces/${id}`);
      console.log(response);
      dispatch(spaceDetailsFetched(response.data.space));
    } catch (e) {
      console.log(e);
    }
  };
};
