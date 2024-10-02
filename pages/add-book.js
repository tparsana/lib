import { useState } from 'react';

export default function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    stars: 0,
    description: '',
    review: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitBook = async (e) => {
    e.preventDefault();
    await fetch('/api/add-book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    // Optionally reset the form or redirect
  };

  return (
    <form onSubmit={submitBook}>
      <input name="title" onChange={handleChange} placeholder="Title" required />
      <input name="author" onChange={handleChange} placeholder="Author" required />
      <input name="stars" type="number" onChange={handleChange} placeholder="Stars (0-5)" required />
      <textarea name="description" onChange={handleChange} placeholder="Description" required />
      <textarea name="review" onChange={handleChange} placeholder="Review" required />
      <button type="submit">Add Book</button>
    </form>
  );
}
