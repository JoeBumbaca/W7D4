import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash'

const pokemonReducer = (state = {}, action) => {
  
  Object.freeze(state);
  let newPokemonState = {};
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:      
      newPokemonState = merge({}, state , action.pokemon )
     return newPokemonState;
    case RECEIVE_ONE_POKEMON:
      newPokemonState = merge({}, state, action.poke)
      return newPokemonState;
    default:
      return state;
  }
}


export default pokemonReducer 