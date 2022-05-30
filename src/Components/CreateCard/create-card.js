import React, { Component } from 'react';


import './create-card.css';

export default class CreateCard extends Component {

   state = {
      createCard: false,
      category: '',
      favorites: false,
      image: '',
      word: '',
      translate: '',
   }
   componentDidMount() {
      this.setState({ createCard: !this.state.createCard });
   }
   
   onToggleCreateCard = (e) => {
      this.setState({ createCard: !this.state.createCard });
      this.props.onCreateCardValue();
   }

   handleInputChange = (e) => {

      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value[0].toUpperCase() + target.value.substring(1);
      const name = target.name;

      this.setState({
         [name]: value
      });

   }

   createNewCard = () => {
      this.props.onCreateCard(this.state);

      this.setState({
         createCard: true,
         category: '',
         favorites: false,
         image: '',
         word: '',
         translate: '',
      });
      this.onToggleCreateCard();
   }
   render() {

      const { category, favorites, image, word, translate, } = this.state;

      return (
         <div className="createCard"
         onClick={this.onToggleCreateCard}>
            <div className='createCard__container'
            onClick={e => e.stopPropagation()}>
               <h1>Создание карточки</h1>
               <form>
                  <ul className='createCard__list'>
                     <li className='createCard__item'>
                        <label htmlFor="category">Категория:
                           <input type="text" name="category" id="category" defaultValue={category} onChange={this.handleInputChange} />
                        </label>
                     </li>
                     <li className='createCard__item'><label htmlFor="image">Каринка:
                        <input type="text" name="image"
                           id="image" defaultValue={image}
                           onChange={this.handleInputChange} />
                     </label></li>
                     <li className='createCard__item'><label htmlFor="word">Слово<span>(eng)</span>:
                        <input type="text" name="word"
                           id="word" defaultValue={word}
                           onChange={this.handleInputChange} />
                     </label></li>
                     <li className='createCard__item'><label htmlFor="translate">Перевод<span>(ру)</span>:
                        <input type="text" name="translate"
                           id="translate" defaultValue={translate}
                           onChange={this.handleInputChange} />
                     </label></li>
                     <li className='createCard__item'><label htmlFor="favorites">Сделать избранным:
                        <input type="checkbox" name="favorites"
                           id="favorites" checked={favorites}
                           onChange={this.handleInputChange} />
                     </label></li>
                  </ul>
               </form>
               <div className='createCard__buttons buttons'>
                  <button className='buttons__create btn'
                     onClick={this.createNewCard}
                  >Создать</button>
                  <button className='buttons__cancel btn'
                     onClick={this.onToggleCreateCard}>Отмена</button>
               </div>
            </div>
         </div>
      )
   }
}