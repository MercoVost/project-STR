const BASE_URL = "https://restcountries.eu/rest/v2/";

export const ALL_COUNTRIES = BASE_URL + "all";

export const searchByCountry = (name) => BASE_URL + "name/" + name;

export const filterByCode = (codes) =>
  BASE_URL + "alpha?codes" + codes.join(",");