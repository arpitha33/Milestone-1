import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', { name, email, comments });
  };

  return (
    <section id="feedback">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Comments:</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Feedback;