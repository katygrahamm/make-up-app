import React from 'react';
import { Component } from 'react';
import NaturalMakeUpList from '../containers/naturalList';
import VeganMakeUpList from '../containers/veganList';
import Filters from '../containers/filters';
import '../index.css';


export default class App extends Component {
  render() {
    return (
      <div className="row d-flex" >
        <div>
        <Filters />
        </div>
        <div id="main-view" className="container">
        <NaturalMakeUpList />
        <VeganMakeUpList />
        </div>
      </div>
    );
  }
}
