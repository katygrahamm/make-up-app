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
                    isChecked: null,
                    product_type: "lipstick"
                }, {
                    name: 'Eyeliner',
                    isChecked: null,
                    product_type: "eyeliner"
                }, {
                    name: 'Eyeshadow',
                    isChecked: null,
                    product_type: "eyeshadow"
                }, {
                    name: 'Mascara',
                    isChecked: null,
                    product_type: "mascara"
                }, {
                    name: 'Foundation',
                    isChecked: null,
                    product_type: "foundation"
                }, {
                    name: 'Blush',
                    isChecked: null,
                    product_type: "blush"
                }, {
                    name: 'Bronzer',
                    isChecked: null,
                    product_type: "bronzer"
                }, {
                    name: 'Eyebrow',
                    isChecked: null,
                    product_type: "eyebrow"
                }, {
                    name: 'Lip Liner',
                    isChecked: null,
                    product_type: "lip_liner"
                }, {
                    name: 'Nail Polish',
                    isChecked: null,
                    product_type: "nail_polish"
                }
            ],

            tags: [
                'gluten+free', 'natural'
            ],

            productTypeClicked: []
        }

        //this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        if (!event.target.checked) {
            console.log('event clicked', event.target.checked)
            const newState = this.state.productTypeClicked.filter(function (p) {
                    return p !== event.target.id
                })
            console.log('newstate', newState)
            this.setState({productTypeClicked: newState})

        } else {
            // fetch make-up data
            this.setState({
                productTypeClicked: this.state.productTypeClicked.concat([event.target.id])
            })
            //looped through tags and fetch one for each tag

        }
        for (let i = 0; i < this.state.tags.length; i++) {
            for (let j = 0; j < this.state.productTypeClicked.length; j++) 
                this.props.fetchMakeUp(this.state.tags[i], this.state.productTypeClicked[j])
        }
    }
    //need to make the onchange the the oninputchangefunction
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

    render() {
        return (
            <div class="row ">
                <div id="side-bar" class="col-2">
                    <form class="m-3" onChange={this.onFormSubmit}>
                        {this
                            .state
                            .productTypes
                            .map(this.renderACheckbox)}
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
