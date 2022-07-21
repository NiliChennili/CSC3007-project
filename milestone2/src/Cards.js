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
              src='images/img-9.jpg'
              text='In milestone 1, we provided critiques and validation on Visualizations as well as providing solutions for improvements.'
              label='Milestone 1'
              path='/milestone1'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Based on the Visualizations picked in milestone 1, we picked and implemented a solution for our visualization.'
              label='Milestone 2'
              path='/milestone2'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Click here to look at our visualisation'
              label='Visualisation'
              path='/visualisation'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
