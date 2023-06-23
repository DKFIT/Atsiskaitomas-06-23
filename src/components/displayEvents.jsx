import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { ref, onValue, getDatabase } from 'firebase/database';
import { app } from '../services/firebase';
import './displayEvents.css'; // Import the CSS file for styling

function DisplayEvents() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const eventsRef = ref(db, 'events');

    const fetchEvents = async () => {
      try {
        onValue(eventsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const eventList = Object.values(data);
            setEvents(eventList);

            // Extract unique categories from event data
            const categories = [...new Set(eventList.map((event) => event.category))];
            setAvailableCategories(categories);
          }
        });
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredEvents = events.filter(event => 
    (selectedCategory ? event.category === selectedCategory : true) && 
    event.approved // Check if the event is approved
  );

  return (
    <Container className="mt-5">
      <h1 className='text-center'> Events</h1>
      <h3 className='text-center mt-5 mb-5'> Discover local happenings on our Events Page. Your one-stop destination to find all nearby events, bringing your community closer in just a few clicks.</h3>
      <div>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select className='border  border-black ms-2' id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {availableCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="card-container">
        {filteredEvents.map((event, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                <strong>Category:</strong> {event.category}
              </Card.Text>
              <Card.Text>
                <strong>Time:</strong> {event.time}
              </Card.Text>
              <Card.Text>
                <strong>Place:</strong> {event.place}
              </Card.Text>
              <Card.Text>
                <strong>Image:</strong>
                <img src={event.img} alt={event.title} className="event-image" />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default DisplayEvents;
