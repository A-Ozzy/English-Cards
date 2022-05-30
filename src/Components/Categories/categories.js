import React, { Component } from 'react';
import CategoriesItem from '../CategoriesItem/categoriesItem.js';

import './categories.css';

export default class Categories extends Component {

   render() {
      const { allCards, onOptionValue, onCreateCardValue } = this.props;
    
      return (
         <div className='categories'>
            <CategoriesItem cards={allCards}
               onOptionValue={onOptionValue}
               onCreateCardValue={ onCreateCardValue }
            />
         </div>
      )
   }
}


