import React, { useState } from 'react';

const AddDestination = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDestination = {
        location,
        description,
        image,
      };

      const response = await fetch('http://localhost:5000/destinations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDestination),
      });

      if (!response.ok) {
        throw new Error('Failed to add destination');
      }

      alert('Destination added successfully!');
      
      setLocation('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Error adding destination:', error);
    }
  };

  return (
    <div className="container">
    <div>
      <h2>Add Your Dream Travel Destination</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Destination</button>
      </form>
    </div>
    </div>
  );
};

export default AddDestination;
