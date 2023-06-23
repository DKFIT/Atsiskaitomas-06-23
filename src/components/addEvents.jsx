import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../services/firebase';
import { ref, push, set } from 'firebase/database';
import { Container, Form, Button } from 'react-bootstrap';

function AddEvents() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dbRef = ref(database, 'events');
    const newEventRef = push(dbRef);
    const newEventData = {
      title,
      category,
      time,
      place,
      img,
    };

    try {
      await set(newEventRef, newEventData);
      console.log('Event data successfully added to the database');
      // Reset form fields
      setTitle('');
      setCategory('');
      setTime('');
      setPlace('');
      setImg('');
      // Navigate to the home page or any other desired page
    } catch (error) {
      console.error('Error adding event data to the database:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Add Your Events</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category:</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formTime">
          <Form.Label>Time:</Form.Label>
          <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formPlace">
          <Form.Label>Place:</Form.Label>
          <Form.Control type="text" value={place} onChange={(e) => setPlace(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default AddEvents;

