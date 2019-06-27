export const selectAllPokemon = ( {entities: {pokemon}} ) => {
  return Object.keys(pokemon).map(id => ( pokemon[id] ) )

};

