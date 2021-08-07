import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends Component{

  state = {
    clicked: false
  }

  changeDisplay = () => {
    return this.state.clicked === false ? this.setState({clicked: true}) : this.setState({clicked: false})
  }

  render() {
    const pokemon = this.props.pokemon
    let frontCard = 
      <Card>
        <div onClick={this.changeDisplay} id={pokemon.id} className="frontCard" >
          <div className="image">
            <img alt="oh no!" src={pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp} hp
            </span><br></br>
            <button onClick={() => this.props.deletePokemon(pokemon.id)}>Delete Me</button>
          </div>
        </div>
        </Card>
    let backCard =
      <Card>
        <div onClick={this.changeDisplay} id={pokemon.id} className="backCard">
          <div className="image">
            <img alt="oh no!" src={pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp} hp
            </span><br></br>
            <button onClick={() => this.props.deletePokemon(pokemon.id)}>Delete Me</button>
          </div>
        </div>
      </Card>
    return this.state.clicked === true ? backCard : frontCard
  }
}

export default PokemonCard;
