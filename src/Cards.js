import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import visspiral from "./images/vis-spiral.png";
import hexbin from "./images/hexbin-img.png";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Milestones</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={visspiral}
              text='In milestone 1, we provided critiques and validation on Visualizations as well as providing solutions for improvements.'
              label='Milestone 1'
              path='/milestone1'
            />
            <CardItem
              src={hexbin}
              text='Based on the Visualizations picked in milestone 1, we picked and implemented a solution for our visualization.'
              label='Milestone 2'
              path='/milestone2'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
