import React from 'react';
import { Component } from 'react';
import NaturalMakeUpList from '../containers/naturalList';
import GlutenFreeMakeUpList from '../containers/veganList';
import InstagramEmbed from 'react-instagram-embed';
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
        <GlutenFreeMakeUpList />
        </div>
        <div id="influencer-view">
        <h3 className="text-center">Follow Our Favorite Influencers</h3>
        <InstagramEmbed
            url='https://www.instagram.com/p/B8ttLJODUYt/?utm_source=ig_web_copy_link'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
          <br></br>
          <InstagramEmbed
              url='https://www.instagram.com/p/B8ZfKWHpL5n/?utm_source=ig_web_copy_link'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <br></br>
            <InstagramEmbed
                url='https://www.instagram.com/p/B8ZfKWHpL5n/?utm_source=ig_web_copy_link'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
        </div>
      </div>
    );
  }
}
