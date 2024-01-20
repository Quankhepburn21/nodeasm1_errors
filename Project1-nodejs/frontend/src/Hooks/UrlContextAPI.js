import React from "react";
// đưa toàn bộ link api vào một object để dễ dùng và quản lý
const API_KEY = "ecdccbc6db9089b36fd6df2185e5a3cd";

const requests = {
  fetchTrending: `/trending?page=1`,
  fetchTopRated: `/top-rate?page=1`,

  fetchNetflixOriginals: `/discover/tv?with_network=123`,

  fetchActionMovies: `/discover?genre=28&page=1`,
  fetchComedyMovies: `/discover?genre=35&page=1`,
  fetchHorrorMovies: `/discover?genre=27&page=1`,
  fetchRomanceMovies: `/discover?genre=10749&page=1`,
  fetchDocumentaries: `/discover?genre=99&page=1`,

  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};
// đưa dữ liệu ra ngoài
const UrlContextAPI = React.createContext(requests);
export default UrlContextAPI;
