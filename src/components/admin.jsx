import React, { useEffect, useState } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { getDatabase, ref, onValue, update, remove } from 'firebase/database';


function Admin() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const eventsRef = ref(db, 'events');

    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const eventList = Object.entries(data).map(([id, eventData]) => ({ id, ...eventData }));
        setEvents(eventList);
      } else {
        setEvents([]);
      }
    });
  }, []);

  const handleApprove = async (eventId) => {
    const db = getDatabase();
    const eventRef = ref(db, `events/${eventId}`);

    try {
      await update(eventRef, { approved: true });
      console.log('Event approved');
    } catch (error) {
      console.error('Error approving event:', error);
    }
  };

  const handleDelete = async (eventId) => {
    const db = getDatabase();
    const eventRef = ref(db, `events/${eventId}`);

    try {
      await remove(eventRef);
      console.log('Event deleted');
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className='text-center'> Admin Panel</h1>

      <h2 className="mt-4">Events Approval</h2>
      <Row className="mb-4">
        {events.map((event) => (
          <Col md={4} className="mb-3">
            <Card key={event.id} className="h-100 m-3">
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
                {event.approved ? (
                  <div>
                    <div className="text-success">Approved</div>
                    <Button variant="danger" onClick={() => handleDelete(event.id)}>
                      Delete
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button variant="success" onClick={() => handleApprove(event.id)}>
                      Approve
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(event.id)}>
                      Deny
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Admin;
