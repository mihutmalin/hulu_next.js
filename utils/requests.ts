const API_KEY = process.env.API_KEY;

export const navReq = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api+key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api+key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMisteryMovies: {
    title: "Mistery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
};

export const getRequest = (genre: string) => {
  switch (genre) {
    case "fetchTrending":
      return {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      };
    case "fetchTopRated":
      return {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      };
    case "fetchActionMovies":
      return {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      };
    case "fetchComedyMovies":
      return {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      };
    case "fetchHorrorMovies":
      return {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      };
    case "fetchRomanceMovies":
      return {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      };
    case "fetchMisteryMovies":
      return {
        title: "Mistery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
      };
    default:
      return {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      };
  }
};
