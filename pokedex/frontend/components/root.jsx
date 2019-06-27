import React from 'react'
import {Provider} from 'react-redux'
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <h1> Hello POKEMONS </h1>
      <PokemonIndexContainer />
    </Provider>
  ) 

}

export default Root 