import React from 'react'

const TradingBook = ({book, handleSelect}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleSelect(book);
  }

  return (
    <li className="TradingBook">
      <a href="#" onClick={handleClick}>{book.name}</a>
    </li>
  );
};

export default TradingBook;
