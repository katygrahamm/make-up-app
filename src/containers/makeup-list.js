import React, { Component } from 'react';
import { connect } from 'react-redux';


class MakeUpList extends Component {
 renderMakeUp (makeUpData) {
     return (
      
      
              
                makeUpData.map(m => (
                    <div className="col-3 makeup-item text-center" key={m.id}>
                      <img src={m.image_link} alt="" width="151" height="auto" className="rounded mx-auto d-block"></img>
                      <div className="item-name">{m.name}</div>
                      <div className="item-brand">{m.brand}</div>
                      <div className="price">${m.price}</div>
                      <button type="button" className="btn btn-info btn-sm">Buy it Now</button>
                      </div>

                ))
              
          
        
        )
      }

render() {
    return (
      <div className="container">
        <div className="row d-flex ">
          
        
        
          {this.props.makeUp.map(this.renderMakeUp)}
          
          
        </div>
        </div>  
     
    );
  }
}

function mapStateToProps({ makeUp }) {
  console.log('makeup', {makeUp})
  return { makeUp };
}

export default connect(mapStateToProps)(MakeUpList);