import React from 'react';
import { Component } from 'react';
import MakeUpList from '../containers/makeup-list';
import Filters from '../containers/filters';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <Filters />
        <MakeUpList />
      </div>
    );
  }
}
