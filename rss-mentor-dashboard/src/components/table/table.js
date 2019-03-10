import React, { Component } from 'react';
import TasksRow from '../../containers/tasksRow/row';
import './table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { mentor: 'Aleh Lipski' };
  }

  setMentor(e) {
    e.preventDefault()
    debugger;
    this.setState({ mentor: document.querySelector('form input').value });
  }

  componentWillUnmount() {
    alert(this.state);
  }

  render() {
    // console.log(store.getState());
    return (
      <div className="container">
        <section className="search">
          <div className="title">
            <h1>RSS mentor Dashboard</h1>
          </div>
          <form>
            <input type="text" />
            <button id="getSearch" onClick={this.setMentor.bind(this)}>Search</button>
          </form>
        </section>
        <section className="table">
          <table>
            <TasksRow mentor={this.state.mentor} />
          </table>
        </section>
      </div>
    );
  }
}

export default Table;
