import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>EventsNearYou</h5>
            <p>
              Discover local happenings on our Events Page. Your one-stop destination to find all nearby events,
              bringing your community closer in just a few clicks.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Connect with Us</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook
              <i className="fab fa-facebook-f mr-3"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter
              <i className="fab fa-twitter mr-3"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
