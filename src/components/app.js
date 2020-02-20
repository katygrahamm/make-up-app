import React from 'react';
import { Component } from 'react';
import MakeUpList from '../containers/make-up-list';
import Filters from '../containers/filters';

export default class App extends Component {
  render() {
    return (
      <div>
        <Filters />
        <MakeUpList />
      </div>
    );
  }
}
