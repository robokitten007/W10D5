import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions'
import configureStore from './store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore()

  window.fetchAllPokemon = fetchAllPokemon
  window.receiveAllPokemon = receiveAllPokemon
  window.requestAllPokemon = requestAllPokemon
  window.getState = store.getState
  window.dispatch = store.dispatch

  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});