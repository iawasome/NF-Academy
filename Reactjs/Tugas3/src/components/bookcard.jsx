import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="book-author">oleh {book.author} ({book.year})</p>
        <p className="book-description">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;