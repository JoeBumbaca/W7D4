import React from 'react'
import {Provider} from 'react-redux'
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container'
import { HashRouter, Route } from 'react-router-dom'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <h1> Hello POKEMONS </h1>
        <Route path='/' component={PokemonIndexContainer} />
      </HashRouter>
    </Provider>
  ) 

}

export default Root 