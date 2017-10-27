import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';
import records from './data/record.json';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: records,
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div className="main">
        <div className="search">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
          </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
        />
      </div>
    );

  }
}

export default App;