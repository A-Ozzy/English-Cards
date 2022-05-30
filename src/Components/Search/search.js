
import React, { Component } from 'react';
import './search.css';


export default class Search extends Component {

   state = {
      search: '',
   }
   onInputFocus = (e) => {
      e.target.placeholder = '';
   }

   onInputBlur = (e) => {
      e.target.placeholder = 'Ввод..';
   }

   onSearchInput = (e) => {
      const search = e.target.value;
      this.setState({ search });
      this.props.onInputSearch(search);
            
   }
   render() {
      
      return (
         <div className='search'>
            <label htmlFor="card-search">Поиск:</label>
            <input tupe='search' className='search__input' id='card-search'
               value={this.state.search}
               placeholder='Ввод..'
               onFocus={this.onInputFocus}
               onBlur={this.onInputBlur}
               onChange={ this.onSearchInput }></input>
         </div>
      )
   }

}