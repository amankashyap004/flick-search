import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDRkMjkxMDliMDYwYjM3ODJiYzMzOTM2NDFlYmY0NiIsInN1YiI6IjY0NWE0Y2QzMWI3MGFlMDBmZDZiZDMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6BjKc3eJiCTVCpbyXR0AI445i6Mbazm54BbSE66KBHc";

const headers = {
   Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
   try {
      const { data } = await axios.get(BASE_URL + url, {
         headers,
         params,
      });
      return data;
   } catch (err) {
      console.log(err);
      return err;
   }
};
