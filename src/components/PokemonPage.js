import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchData: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  getCharacters = () => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  handleChange = event => {
    this.setState({
      searchData: event.target.value
    })
  }

  // handleSearch = () => {
  //   let result = this.state.pokemon.filter(pokemon => {
  //     return pokemon.name.toLowerCase().includes(this.state.searchData.toLowerCase())
  //   })
  //   if (this.state.pokemon !== result && result.length > 0) {
  //     this.setState({pokemon: result})
  //   }
  // }

  handleForm = newPokemon => {
    const requestOptions = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPokemon)
    }
    fetch('http://localhost:3000/pokemon', requestOptions)
    .then(resp => resp.json())
    .then(data => {
      this.setState((prevState) => {
        return { pokemon: [...prevState.pokemon, data]
        }
      })
    })
  }

  deletePokemon = id => {
    fetch(`http://localhost:3000/pokemon/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(() => this.getCharacters())
  }

  render() {
    let getPokemon = this.state.pokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchData.toLowerCase())})

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleForm={this.handleForm}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemon={getPokemon} deletePokemon={this.deletePokemon} />
      </Container>
    )
  }
}

export default PokemonPage
