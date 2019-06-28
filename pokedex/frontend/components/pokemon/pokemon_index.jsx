import React from 'react'
import { PokemonIndexItem } from './pokemon_index_item'

class PokemonIndex extends React.Component {
  constructor(props){
    super(props) 
    
  }
  //props is an array of pokemon objects [ {pika}, {bulb} ,{char} ]

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
        <ul>
          <PokemonIndexItem pokemon={this.props.pokemon} />     
        </ul>

    )
  }

}



export default PokemonIndex