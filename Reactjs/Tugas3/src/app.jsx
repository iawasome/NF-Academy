import React, { useState } from 'react';
import initialBooks from './Utils/books';
import BookCard from './components/bookcard.jsx';
import './App.css';

function App() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru yang Misterius",
      author: "Penulis Tak Dikenal",
      year: new Date().getFullYear(),
      description: "Buku ini muncul secara ajaib ketika tombol 'nilai tambah' diklik. Apa isinya? Tidak ada yang tahu.",
      image: `https://placehold.co/300x400/BDBDBD/white?text=Buku\\nBaru`,
    };

    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Koleksi Buku Anti-Mainstream</h1>
        <p>Halaman Home dan Halaman Book yang menampilkan data yang sama.</p>

        <button onClick={handleAddBook} className="add-button">
          nilai tambah
        </button>
      </header>
      
      <main className="book-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </main>
    </div>
  );
}

export default App;