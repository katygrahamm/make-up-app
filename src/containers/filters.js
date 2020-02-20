import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMakeUp} from '../actions/index';

class Filters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productTypes: [
                {
                    name: 'Lipstick',
                    product_type: "lipstick"
                }, {
                    name: 'Eyeliner',
                    product_type: "eyeliner"
                }, {
                    name: 'Eyeshadow',
                    product_type: "eyeshadow"
                }, {
                    name: 'Mascara',
                    product_type: "mascara"
                }, {
                    name: 'Foundation',
                    product_type: "foundation"
                }, {
                    name: 'Blush',
                    product_type: "blush"
                }, {
                    name: 'Bronzer',

                    product_type: "bronzer"
                }, {
                    name: 'Eyebrow',
                    product_type: "eyebrow"
                }, {
                    name: 'Lip Liner',
                    product_type: "lip_liner"
                }, {
                    name: 'Nail Polish',
                    product_type: "nail_polish"
                }
            ],
            //hold all the tags we are interested in providing
            tags: [
                'gluten+free', 'natural'
            ],
            //holds all the products the user is interested in seeing
            productTypeClicked: []
        }

        //this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        //condition statement to check if the button is being clicked or unclicked and also to set the area of products
        //if button is being unchecked
        if (!event.target.checked) {
            console.log('event clicked', event.target.checked)
            //removes the id of the clicked item to the end of the productTypeClicked array
            const newState = this.state.productTypeClicked.filter(function (p) {
                    return p !== event.target.id
                })
            //new state is up to date. Why isnt the state????
            console.log('newstate', newState)
            this.setState({productTypeClicked: newState})
        //if button is being checked
        } else {
            //adds the id of the clicked item to the end of the productTypeClicked array
            this.setState({
                productTypeClicked: this.state.productTypeClicked.concat([event.target.id])
            })
        }
        //first loop, loops through tags array
        for (let i = 0; i < this.state.tags.length; i++) {
            //second loop, loops through productTypesChecked array
            for (let j = 0; j < this.state.productTypeClicked.length; j++){ 
                //this calls the fetch makeup function, parameters pass the tag and product
                this.props.fetchMakeUp(this.state.tags[i], this.state.productTypeClicked[j])
            }
        }
      }
    //renders each individual checkbox and label
    renderACheckbox(productType) {
        return (
            <div className="side-bar">
                <div class="col m-2">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id={productType.product_type}
                        checked={productType.isChecked}></input>
                    <label className="form-check-label" for="exampleCheck1">{productType.name}</label>
                </div>
            </div>
        )
    }
    //renders list of checkboxes and labels
    render() {
        return (
            <div class="row ">
                <div id="side-bar" class="col-2">
                    <form class="m-3" onChange={this.onFormSubmit}>
                        {this.state.productTypes.map(this.renderACheckbox)}
                    </form>
                    ​
                </div>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMakeUp
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Filters);
