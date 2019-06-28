import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {merge} from 'lodash'
import { requestOnePokemon } from './actions/pokemon_actions'
import {dispatch} from 'redux'

document.addEventListener("DOMContentLoaded", () =>  {

  const root = document.getElementById('root')
  const store = configureStore();
  window.dispatch = dispatch;
  window.merge = merge;
  window.requestOnePokemon = requestOnePokemon;
  ReactDOM.render(<Root store={store}/>, root);

}) 