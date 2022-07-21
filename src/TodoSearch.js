import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const [] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="TodoSearch" 
      placeholder="Do something..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
