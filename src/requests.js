const API_KEY = "2c974b22dcf187037d0e31ed8401e259";

const requests = {
  fetchTrending: `discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  fetchNetflixOriginals: `discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,

  fetchTopRated: `discover/movie?api_key=${API_KEY}&certification=R&certification_country=US&sort_by=vote_average.desc`,

  fetchActionMovies: `discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=${API_KEY}`,

  fetchComedyMovies: `discover/movie?with_genres=18&primary_release_year=2014&api_key=${API_KEY}`,

  fetchHorrorMovies: `discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${API_KEY}`,

  fetchRomanceMovies: `discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&api_key=${API_KEY}`,

  fetchDocumentaries: `discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${API_KEY}`,
};

export default requests;
