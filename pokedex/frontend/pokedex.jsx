import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import  { fetchAllPokemon } from './util/api.util';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () =>  {

  const root = document.getElementById('root')
  const store = configureStore();

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<h1>REACT IS WORKING</h1>, root);

}) 