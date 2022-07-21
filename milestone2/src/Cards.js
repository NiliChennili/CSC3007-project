import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Milestones</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/vis-spiral.png'
              text='In milestone 1, we provided critiques and validation on Visualizations as well as providing solutions for improvements.'
              label='Milestone 1'
              path='/milestone1'
            />
            <CardItem
              src='images/hexbin-img.png'
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
