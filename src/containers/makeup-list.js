import React, { Component } from 'react';
import { connect } from 'react-redux';


class MakeUpList extends Component {
 renderMakeUp (makeUpData) {
   console.log(makeUpData)
     return (
        <div>
              {
                makeUpData.map(m => (
                  <div className="makeUp-item" key={m.id}>
                    <img src={m.image_link} alt="" width="150" height="auto"></img>
                    <p className="item-name">{m.name}</p>
                    <p className="item-brand">{m.brand}</p>
                    <p className="price">${m.price}</p>
                    <button type="button" className="btn btn-info btn-sm">Buy it Now</button>
                  </div>
                ))
              }
          </div>
        )
      }

render() {
    return (
      <div class="row">
       <div class="col-md-4">
         <div class="card-container">
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
