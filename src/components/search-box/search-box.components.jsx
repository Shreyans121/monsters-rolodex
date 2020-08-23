import React from 'react';
import './search-box.style.css'

export const SearchBox = ({placeholder, handleChange}) => (
  <input 
    className='search'
    type='search' 
    placeholder={placeholder}x
    onChange={handleChange} />
)