import { useState } from 'react';
import { PrismaClient } from '@prisma/client';

export default function Home({ books }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedBooks, setSortedBooks] = useState(books);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSortedBooks(filteredBooks);
  };

  const handleSort = (criteria) => {
    const sorted = [...sortedBooks].sort((a, b) => a[criteria].localeCompare(b[criteria]));
    setSortedBooks(sorted);
  };

  return (
    <div>
      <input type="text" placeholder="Search books..." value={searchTerm} onChange={handleSearch} />
      <button onClick={() => handleSort('title')}>Sort by Title</button>
      <button onClick={() => handleSort('author')}>Sort by Author</button>
      <ul>
        {sortedBooks.map((book) => (
          <li key={book.id}>
            <h2>{book.title} by {book.author}</h2>
            <p>Stars: {book.stars}</p>
            <p>{book.description}</p>
            <p>{book.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const books = await prisma.book.findMany();
  return { props: { books } };
}
