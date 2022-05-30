import React, { Component } from 'react';

import Title from '../Title/title.js';
import CreateCard from '../CreateCard/create-card.js';
import Categories from '../Categories/categories.js';
import CardBox from '../CardBox/cardBox.js';
import Search from '../Search/search.js';

import './app.css';

export default class App extends Component {

   state = {
      cards: [
         {
            id: 1,
            category: 'Животные',
            favorites: false,
            image: 'https://neposed.net/images/olga/obuchai-ka/tematicheskie-nedeli/prirodnii-mir/TKsobaka1/tk-sobaka9.png',
            word: 'Dog',
            translate: 'Coбака',
         },
         {
            id: 2,
            category: 'Животные',
            favorites: false,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCI0kxG2_47VotnQlymNiohYzcMJ4p3QPjw&usqp=CAU',
            word: 'Cat',
            translate: 'Кот',
         },
         {
            id: 3,
            category: 'Объект',
            favorites: false,
            image: 'https://pristor.ru/wp-content/uploads/2018/05/%D0%94%D0%BE%D0%BC-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-3.jpg',
            word: 'House',
            translate: 'Дом',
         },
         {
            id: 4,
            category: 'Транспорт',
            favorites: false,
            image: 'https://printonic.ru/uploads/images/2016/02/20/img_56c8983e0ff8d.jpg',
            word: 'Car',
            translate: 'Машина',
         },
         {
            id: 5,
            category: 'Предмет',
            favorites: false,
            image: 'https://www.ikea.com/ru/ru/images/products/mammut-stol-detskiy-d-doma-ulicy-siniy__0735844_pe740211_s5.jpg',
            word: 'Table',
            translate: 'Стол',
         },
         {
            id: 6,
            category: 'Одежда',
            favorites: false,
            image: 'https://tvmag.by/wa-data/public/shop/products/55/80/8055/images/2132/2132.970.jpg',
            word: 'Hat',
            translate: 'Шапка',
         },
         {
            id: 7,
            category: 'Части тела',
            favorites: false,
            image: 'https://emojis.wiki/emoji-pics/facebook/leg-facebook.png',
            word: 'Leg',
            translate: 'Нога',
         },
         {
            id: 8,
            category: 'Части тела',
            favorites: false,
            image: 'https://png.pngtree.com/element_origin_min_pic/17/02/09/64537f6073dbb05bf4e5dc6604479fb2.jpg',
            word: 'Nose',
            translate: 'Нос',
         },
         {
            id: 9,
            category: 'Еда',
            favorites: false,
            image: 'https://i.pinimg.com/736x/76/0a/c9/760ac9bb4cb536e5d4420de69d1454d0.jpg',
            word: 'Chocolate',
            translate: 'Шоколад',
         },
         {
            id: 10,
            category: 'Числа',
            favorites: false,
            image: 'https://content1.rozetka.com.ua/goods/images/big/132989003.jpg',
            word: 'Five',
            translate: 'Пять',
         },

      ],
      selectedValue: "",
      search: "",
      сreateCard: false,
   };

   searchCard(items, selectedValue) {

      if (selectedValue.length === 0) {
         return items;
      }
      if (selectedValue === "favorites") {
         return items.filter((el) => {
            return el.favorites;
         });
      }

      return items.filter((el) => {
         return el.category === selectedValue;
      });
   }

   onOptionValue = (selectedValue) => {
      this.setState({ selectedValue });
   }

   toggleFavorites(arr, id, favorites) {

      const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = { ...oldItem, favorites: !oldItem[favorites] };

      return [
         ...arr.slice(0, idx),
         newItem,
         ...arr.slice(idx + 1),
      ];
   }

   onSetFaforites = (id) => {
      this.setState(({ cards }) => {
         return {
            cards: this.toggleFavorites(cards, id, 'favorites')
         };
      })
   }

   deleteCard = (id) => {
      this.setState(({ cards }) => {

         const idx = cards.findIndex((el) => el.id === id);

         const newArr = [
            ...cards.slice(0, idx),
            ...cards.slice(idx + 1),

         ];

         return {
            cards: newArr
         };

      });

   }

   onInputSearch = (search) => {
      this.setState({ search });
   }

   onCreateCardValue = () => {
      this.setState({ сreateCard: !this.state.сreateCard });

   }
   search(arr, str) {

      return arr.filter((item) => {    
         return item.translate.toLowerCase().indexOf(str.toLowerCase()) > -1 || item.word.toLowerCase().indexOf(str.toLowerCase()) > -1;
      })
   }

   onCreateCard = (data) => {
      data.id = Date.now();
      
      this.setState((state) => {
         return {cards: [...state.cards, data]}
      })

   }
   render() {

      const { cards, selectedValue, search, сreateCard } = this.state;

      const visibleCards = !search ? this.searchCard(cards, selectedValue) : this.search(cards, search)
      const addNewCard = сreateCard ? <CreateCard onCreateCard={this.onCreateCard} onCreateCardValue={ this.onCreateCardValue}/> : null

      return (
         <div className='container'>
            <Title />
            {addNewCard}
            <Categories allCards={cards}
               selectedValue={selectedValue}
               onCreateCardValue={this.onCreateCardValue}
               onOptionValue={ this.onOptionValue }
            />
            <Search onInputSearch={this.onInputSearch} />
            <CardBox cards={visibleCards}
               onSetFaforites={this.onSetFaforites}
               deleteCard={this.deleteCard} />
         </div>
      )
   }
}

