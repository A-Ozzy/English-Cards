import React, { Component } from 'react';

import './categoriesItem.css';

export default class CategoriesItem extends Component {
   state = {
      сreateCard: false,
   }
   
   render() {

      const { cards, onOptionValue, selectedValue,  onCreateCardValue} = this.props;

      const filterCategory = (obj) => {
         
         let uniq = [];
         let filtered = obj.filter((elm) => {
            

            if (uniq.indexOf(elm.category) < 0) {               
               uniq.push(elm.category);
               return true;
            }
            return false;
         });

         return filtered;
      };

      const uniqCategory = filterCategory(cards);

      const optionElem = uniqCategory.map((item) => {

         return <option key={item.id} value={item.category}>{item.category}</option>
      });

      return (
         <div className='category-box'>

            <div className='category__item'>
               <div className='category-text'>Категория:</div>
               <select className='selctBox'
                  defaultValue={ selectedValue }
                  onChange={(e) => { onOptionValue(e.target.value) }}>
                  <option value="">Все</option>
                  <option value="favorites" style={{fontWeight: "bold"}}>ИЗБРАННОЕ</option>
                  {optionElem}
               </select>
            </div>
            <button className='category__button'
               onClick={onCreateCardValue}
            >Добавить карточку</button>
         </div>
      )
   }

}
