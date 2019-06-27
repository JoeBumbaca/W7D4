import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import  { fetchAllPokemon } from './util/api.util';

document.addEventListener("DOMContentLoaded", () =>  {

  const root = document.getElementById('root')

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;

  ReactDOM.render(<h1>REACT IS WORKING</h1>, root);

})