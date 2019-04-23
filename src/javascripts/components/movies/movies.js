import moviesData from '../../helpers/data/moviesData';
import './movies.scss';
import util from '../../helpers/util';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id=${movie.id} class="card movie col-3">`;
    domString += '<div class="card">';
    domString += `<h3 class="card-header">${movie.name}</h3>`; domString += `<h3>${movie.name}</h3>`;
    domString += `<h4>${movie.genre}</h4>`;
    domString += `<h4>${movie.releaseDate}</h4>`;
    domString += `<h4>${movie.description}</h4>`;
    domString += `<h4>${movie.locations.length}</h4>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
