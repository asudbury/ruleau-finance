// Uses default values here in case the environment
// variables are incapable of being found.
const {
  REACT_APP_RULEAU_DEFAULT_API_URL = process.env.PUBLIC_URL + "/jsonData",
  REACT_APP_RULEAU_API_URL = "",
  REACT_APP_RULEAU_OVERRIDE_API_URL = "",
} = process.env;

export const API_URL =
  REACT_APP_RULEAU_OVERRIDE_API_URL.trim() ||
  REACT_APP_RULEAU_API_URL.trim() ||
  REACT_APP_RULEAU_DEFAULT_API_URL;

export const FETCH_CASES = "/cases/cases2.json";
export const CASES = "/cases/cases2.json";
