'use strict'
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/550?';
const API_KEY = '4b14499a7a4d8e1fd5ccb6a9c42a98e1';

const searchParams = new URLSearchParams({
  key: API_KEY,
  // q: '',
});

export default class GetMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;

  }

  async getMovies(searchQuery) {
    const url = `${BASE_URL}q=${this.searchQuery}&${searchParams}`;
    const movies = await axios.get(url);
    return movies.data;
  }




  

  get query() {
    return this.name;
  }

  set query(newQuery) {
    this.name = newQuery;
  }
}

const getMovies = new GetMovies();
console.log('bla');
