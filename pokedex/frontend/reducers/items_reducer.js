import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash'

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const itemsArr = action.poke.item_ids
  let newItemState = state;
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      for (let i = 0; i < itemsArr.length; i++) {
        debugger
        newItemState = merge({}, newItemState, action.items[itemsArr[i]])
      }
      return newItemState;
    default:
      return state;
  }
}

export default itemsReducer;