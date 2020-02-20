import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMakeUp } from '../actions/index';


class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {productTypes: [
      {name : 'Lipstick' , isChecked: true},

      {name:'Eyeliner', isChecked: true},

      {name:'Eyeshadow', isChecked: true},

      {name: 'Mascara', isChecked: true},

      {name: 'Foundation', isChecked: true},

      {name: 'Blush', isChecked: true},

      {name: 'Bronzer', isChecked: true},

      {name: 'Eyebrow', isChecked: true},

      {name: 'Lip Liner', isChecked: true},

      {name: 'Nail Polish', isChecked: true},
    ],

      tags:'natural',

      productTypeClicked:''}

    //this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    console.log('i click')
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetch make-up data
    console.log(this)
    this.props.fetchMakeUp(this.state.tags);
  }
  //need to make the onchange the the oninputchangefunction
  renderACheckbox(productType){
    return (
      <div className="side-bar">
      <div class="col m-2">
          <input type="checkbox" class="form-check-input" onChange={console.log('hi')} id={productType.name} checked={productType.isChecked}></input>
          <label className="form-check-label" for="exampleCheck1">{productType.name}</label>
      </div>
      </div>
      )
  }

  render() {
    return (
      <div class="row ">
        <div id="side-bar" class="col-2 bg-light">
          <form class="m-3" onSubmit={this.onFormSubmit}>
            {this.state.productTypes.map(this.renderACheckbox)}
            <div class="col m-2">
            <button type="submit" class="btn badge badge-pill btn-outline-danger">Submit</button>
            </div>

          </form>
​        </div>
      </div>


    );
  }
}





/*  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="search product type"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
*/


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMakeUp }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Filters);
