import React from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import '../../bnb.css';
import threepenny1 from './photos/threepenny/pic1.png';
import threepenny2 from './photos/threepenny/pic2.png';
import parade1 from './photos/parade/parade1.jpg';
import parade2 from './photos/parade/parade2.jpg';
import peter1 from './photos/peter/peter1.jpg';
import peter2 from './photos/peter/peter2.jpg';
import peter3 from './photos/peter/peter3.jpg';
import peter4 from './photos/peter/peter4.jpg';
import peter5 from './photos/peter/peter5.jpg';
import peter6 from './photos/peter/peter6.jpg';
import peter7 from './photos/peter/peter7.jpg';
import peter8 from './photos/peter/peter8.jpg';
import peter9 from './photos/peter/peter9.jpg';
import peter10 from './photos/peter/peter10.jpg';
import peter11 from './photos/peter/peter11.jpg';
import spring1 from './photos/spring-awakening/spring1.jpg';
import spring2 from './photos/spring-awakening/spring2.jpg';
import scarlet1 from './photos/scarlet-letter/scarlet1.jpg';
import scarlet2 from './photos/scarlet-letter/scarlet2.jpg';
import scarlet3 from './photos/scarlet-letter/scarlet3.jpg';
import scarlet4 from './photos/scarlet-letter/scarlet4.jpg';
import scarlet5 from './photos/scarlet-letter/scarlet5.jpg';
import scarlet6 from './photos/scarlet-letter/scarlet6.jpg';
import misc1 from './photos/misc/misc1.jpg';
import misc2 from './photos/misc/misc2.jpg';
import misc3 from './photos/misc/misc3.png';





const threepennyOpera = [{
    photo: threepenny1,
    caption: "Threepenny Opera",
    subcaption: "7 Stages",
    thumbnail: threepenny1,
  }, {
    photo: threepenny2,
    caption: "Threepenny Opera",
    subcaption: "7 Stages",
    thumbnail: threepenny2,
  }];

const parade = [{
    photo: parade1,
    caption: "Parade",
    subcaption: "Kennesaw State University",
    thumbnail: parade1,
  }, {
    photo: parade2,
    caption: "Parade",
    subcaption: "Kennesaw State University",
    thumbnail: parade2,
  }];

const peter = [{
    photo: peter1,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter1,
  }, {
    photo: peter2,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter2,
  }, {
    photo: peter3,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter3,
  }, {
    photo: peter4,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter4,
  }, {
    photo: peter5,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter5,
  }, {
    photo: peter6,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter6,
  }, {
    photo: peter7,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter7,
  }, {
    photo: peter8,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter8,
  }, {
    photo: peter9,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter9,
  }, {
    photo: peter10,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter10,
  }, {
    photo: peter11,
    caption: "Peter and the Starcather",
    subcaption: "Kennesaw State University",
    thumbnail: peter11,
  }];

const springAwakening = [{
    photo: spring1,
    caption: "Spring Awakening",
    subcaption: "Kennesaw State University",
    thumbnail: spring1,
  }, {
    photo: spring2,
    caption: "Spring Awakening",
    subcaption: "Kennesaw State University",
    thumbnail: spring2,
  }];

const scarletLetter = [{
    photo: scarlet1,
    caption: "The Scarlet Letter",
    subcaption: "Kennesaw State University",
    thumbnail: scarlet1,
  }, {
    photo: scarlet2,
    caption: "The Scarlett Letter",
    subcaption: "Kennesaw State University",
    thumbnail: scarlet2,
  }, {
    photo: scarlet3,
    caption: "The Scarlett Letter",
    subcaption: "Kennesaw State University",
    thumbnail: scarlet3,
  }, {
    photo: scarlet4,
    caption: "The Scarlett Letter",
    subcaption: "Kennesaw State University",
    thumbnail: scarlet4,
  }, {
    photo: scarlet5,
    caption: "The Scarlett Letter",
    subcaption: "Kennesaw State University",
    thumbnail: scarlet5,
  }, {
    photo: scarlet6,
    caption: "The Scarlett Letter",
    subcaption: "Kennesaw State University",
    thumbnail: scarlet6,
  }];

const misc = [{
    photo: misc1,
    caption: "K.I.S.S. Improv",
    subcaption: "Kennesaw State University",
    thumbnail: misc1,
  }, {
    photo: misc2,
    caption: "K.I.S.S. Improv",
    subcaption: "Kennesaw State University",
    thumbnail: misc2,
  }, {
    photo: misc3,
    caption: "KSU Flourish Magazine: Red Hanrahan",
    subcaption: "Kennesaw State University",
    thumbnail: misc3,
  }];


export class Gallery extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { 
            galleryOpened: false,
            photos: []};
        this.toggleGallery = this.toggleGallery.bind(this);
      }
    
    toggleGallery(gallery) {
        this.setState(prevState => ({
            galleryOpened: !prevState.galleryOpened,
            photos: gallery
        }));
    }
    
    render () {
        return (
            <div className='home'>
              <h3>Galleries:</h3>
              <button className='gal-button' onClick={() => this.toggleGallery(threepennyOpera)}>The Threepenny Opera</button>
              <br></br>
              <button className='gal-button' onClick={() => this.toggleGallery(parade)}>Parade</button>
              <br></br>
              <button className='gal-button' onClick={() => this.toggleGallery(peter)}>Peter and the Starcatcher</button>
              <br></br>
              <button className='gal-button' onClick={() => this.toggleGallery(springAwakening)}>Spring Awakening</button>
              <br></br>
              <button className='gal-button' onClick={() => this.toggleGallery(scarletLetter)}>The Scarlet Letter</button>
              <br></br>
              <button className='gal-button' onClick={() => this.toggleGallery(misc)}>Misc.</button>
              <ReactBnbGallery
                  show={this.state.galleryOpened}
                  photos={this.state.photos}
                  onClose={this.toggleGallery}
                  />
            </div>
        )
    }
}
