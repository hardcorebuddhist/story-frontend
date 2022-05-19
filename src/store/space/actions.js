import { fetchSpacesSuccess } from "./slice";
import axios from "axios";

const API_URL = `http://localhost:4000`;

export async function fetchDrumSamples(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}/spaces`);
    console.log("response", response);
    const spaces = response.data;
    dispatch(fetchSpacesSuccess(spaces));
  } catch (e) {
    // setDownLoading
    // setError
    console.log(e.message);
  }
}
