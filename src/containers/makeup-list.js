import React, { Component } from 'react';
import { connect } from 'react-redux';


class MakeUpList extends Component {
 renderMakeUp (makeUpData) {
     return (
       <div className="justify-content-left">
              {
                makeUpData.map(m => (
                  <div className="makeUp-item" key={m.id}>
                    <div className="col-md-4">
                    <img src={m.image_link} alt=""></img>
                    <p className="item-name">{m.name}</p>
                    <p className="item-brand">{m.brand}</p>
                    <p className="price">${m.price}</p>
                    <button type="button" className="btn btn-info btn-sm">Buy it Now</button>
                  </div>
                </div>
                ))
              }
            </div>
        )
      }

render() {
    return (
      <div className="col-9  justify-content-left">
         <div className=" row">
           <div className="col">
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
