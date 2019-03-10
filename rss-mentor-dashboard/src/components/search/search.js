import React, { Component } from 'react';

class Search extends Component {
  
  render() {
    return (
      <section className="search">
        <div className="title">
          <h1>RSS mentor Dashboard</h1>
        </div>
        <form>
          <input type="text" />
          <button id="getSearch" onClick= {() => {this.props.updateData(this.props.state)}}>Search</button>
        </form>
      </section>
    );
  }
}

export default Search;
