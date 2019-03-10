import React, { Component } from 'react';
import Select from '../../../node_modules/react-select/dist/react-select.esm';
import TasksRow from '../../containers/tasksRow/row';
import './table.css';


const data = require('../../data.json');

const mentorsNames = Object.keys(data).map(current => ({ value: current, label: current }));

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { mentor: undefined };
  }

  setMentor(select) {
    this.setState({ mentor: select.value });
  }

  render() {
    const { mentor } = this.state;
    return (
      <div className="container">
        <section className="search">
          <div className="title">
            <h1>RSS mentor Dashboard</h1>
          </div>
          <form>
            <Select
              type="text"
              options={mentorsNames}
              onChange={this.setMentor.bind(this)}
              value={mentor}
            />
          </form>
        </section>
        <section className="table">
          <table>
            <TasksRow mentor={mentor} />
          </table>
        </section>
      </div>
    );
  }
}

export default Table;
