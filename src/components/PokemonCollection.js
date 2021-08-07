import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {
  return (
    <Card.Group itemsPerRow={6}>
        {props.pokemon !== undefined ? props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} deletePokemon={props.deletePokemon} />): null}
    </Card.Group>
  )
}

export default PokemonCollection
