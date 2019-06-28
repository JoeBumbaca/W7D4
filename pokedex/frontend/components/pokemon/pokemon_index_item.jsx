import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => (
  props.pokemon.map(poke => (
    <Link to='/pokemon/:pokemonId' key={poke.id}>
      <li >{poke.name} <img src={poke.image_url} width="50" height="50"></img></li>
    </Link>
    )
  )
)
