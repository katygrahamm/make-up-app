import React, { Component } from 'react';
import { connect } from 'react-redux';


class MakeUpList extends Component {
 renderMakeUp (makeUpData) {
     return (
       <div>
              {
                makeUpData.map(m => (
                    <div className="col-md-3 makeup-item text-center" key={m.id}>
                      <img src={m.image_link} alt="" width="151" height="auto" className="rounded mx-auto d-block"></img>
                      <div className="item-name">{m.name}</div>
                      <div className="item-brand">{m.brand}</div>
                      <div className="price">${m.price}</div>
                      <button type="button" className="btn btn-info btn-sm">Buy it Now</button>
                      </div>

                ))
              }
          </div>
        )
      }

render() {
    return (
      <div id= "main-view" className="col-9  justify-content-left">
        <div className="row">
        <div className="col">
         <h2 className="product-type">Organic</h2>
         <hr></hr>
          {this.props.makeUp.map(this.renderMakeUp)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ makeUp }) {
  return { makeUp };
}

export default connect(mapStateToProps)(MakeUpList);
