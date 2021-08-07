import React from 'react'

class Search extends React.Component {

  // state = {
  //   searchData: ""
  // }

  // onChange = event => {
  //   this.setState({
  //     searchData: event.target.value
  //   }, () => this.props.handleSearch(this.state.searchData))
  // }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={(event) => this.props.handleChange(event)} className="prompt"/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
