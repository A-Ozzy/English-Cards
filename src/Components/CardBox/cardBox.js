import React, { Component } from 'react';

import './cardBox.css';

export default class CardBox extends Component {


   showWord = (e) => {
       
      const childrens = e.target.childNodes;
      childrens[0].classList.add('hide');
      childrens[1].classList.remove('hide');

      setTimeout(() => {
         childrens[1].classList.add('hide');
         childrens[0].classList.remove('hide');
      }, 3000);

   }

   hendlerFunc = (e) => {
      const targetedElem = e.target.classList;
      if (targetedElem.contains('cardBox__wordBox')) {
         this.showWord(e);
      }
   }

   render() {

      const { cards, onSetFaforites, deleteCard } = this.props;

      const cardElement = cards.map((el) => {

         let classes = 'far fa-star';
         if (el.favorites) {
            classes += ' favorites';
         }

         return (
            <div className='cardBox__item' key={el.id}
               onClick={this.hendlerFunc}>
               <div className="cardBox__icons">
                  <div className="cardBox__icons-item"
                     onClick={() => onSetFaforites(el.id)}>
                     <i className={classes}></i>
                  </div>
                  <div className="cardBox__icons-item"
                     onClick={() => deleteCard(el.id)}>
                     <i className="far fa-trash-alt"></i>
                  </div>
               </div>
               <div className='cardBox__img'>
                  <img src={el.image} alt="картинки нет" />
               </div>
               <div className='cardBox__wordBox '>
                  <div className='cardBox__question'>?</div>
                  <div className='cardBox__word hide'>{el.word}</div>
               </div>
               <div className='cardBox__translate '>{el.translate}</div>
            </div>
         )
      });


      return (
         <div className='cardBox'>
            {cardElement}
         </div>
      );

   }
}