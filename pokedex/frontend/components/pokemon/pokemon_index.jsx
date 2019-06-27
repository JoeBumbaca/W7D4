import React from 'react'

class PokemonIndex extends React.Component {
  constructor(props){
    super(props) 
    
  }
  //props is an array of pokemon objects [ {pika}, {bulb} ,{char} ]

  componentDidMount() {
    this.props.requestAllPokemon
  }

  render() {
    return(
      <div>
        <ul>
        {this.props.pokemon.map (poke => {
          return (<li>{poke.name}</li>)
        }
      )}      
        </ul>
      </div>
    
    // <h1> POKEMON INDEX IS WORKING</h1>
    )
  }

}



export default PokemonIndex