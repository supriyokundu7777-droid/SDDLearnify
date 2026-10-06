import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';

import {
  singleEventData,
  eventKeyTakeaways,
  eventAgenda,
  eventSpeaker,
  eventSingleFaqs
} from '../../user/data/SingleEvent';

const SingleEvent = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', company: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        setShowRegisterModal(false);
      }, 2500);
    }
  };

  return (
    <div className="single-event-page bg-dark text-white min-vh-100">
      
      {/* 1. TOP HERO BREADCRUMB & HEADER */}
      <section 
        className="py-5 position-relative border-bottom border-secondary border-opacity-25" 
        style={{ 
          backgroundImage: `linear-gradient(180deg, rgba(23, 26, 31, 0.88) 0%, rgba(17, 19, 23, 0.98) 100%), url(${singleEventData.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container fluid="xxl" className="py-2">
          {/* Breadcrumb Navigation */}
          <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
            <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
            <span>/</span>
            <Link to="/event" className="text-secondary text-decoration-none hover-text-white">Events</Link>
            <span>/</span>
            <span className="text-info fw-medium">{singleEventData.category}</span>
          </div>

          <Row className="gy-4">
            <Col lg={8}>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill">
                  {singleEventData.badge}
                </Badge>
                <Badge bg="danger" className="rounded-pill px-3 py-2 fw-semibold">
                  🔥 Only {singleEventData.seatsLeft} Spots Remaining
                </Badge>
              </div>

              <h1 className="display-5 fw-bold mb-3 text-white lh-sm">
                {singleEventData.title}
              </h1>

              <p className="lead text-secondary fs-6 mb-4">
                {singleEventData.subtitle}
              </p>

              {/* Event Meta Highlights */}
              <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small">
                <span className="text-info fw-semibold">📅 {singleEventData.date}</span>
                <span>•</span>
                <span className="text-light">⏰ {singleEventData.time}</span>
                <span>•</span>
                <span>⏱️ {singleEventData.duration}</span>
                <span>•</span>
                <span>🌐 {singleEventData.format}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. MAIN LAYOUT: CONTENT + STICKY REGISTRATION SIDEBAR */}
      <section className="py-5">
        <Container fluid="xxl">
          <Row className="g-4">
            
            {/* === LEFT CONTENT COLUMN === */}
            <Col lg={8}>
              
              {/* Event Overview & Key Takeaways */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-4">
                <h4 className="fw-bold mb-3 text-white">What You Will Master</h4>
                <Row className="g-3">
                  {eventKeyTakeaways.map((item, idx) => (
                    <Col md={6} key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-info fw-bold">✓</span>
                      <span className="text-light small">{item}</span>
                    </Col>
                  ))}
                </Row>
              </Card>

              {/* Prerequisites Card */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-2 text-white">Prerequisites & Target Audience</h5>
                <p className="text-secondary small mb-0">
                  {singleEventData.prerequisites}. Ideal for Software Engineers, Machine Learning Practitioners, and Product Architects wanting hands-on production code.
                </p>
              </Card>

              {/* Detailed Agenda Timeline */}
              <div className="mb-5">
                <h4 className="fw-bold mb-3 text-white">Event Schedule & Agenda</h4>
                <div className="d-flex flex-column gap-3">
                  {eventAgenda.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-2 gap-2">
                        <h6 className="fw-bold text-white mb-0">{item.title}</h6>
                        <Badge bg="info" className="text-dark fw-bold px-2 py-1 align-self-start align-self-sm-center">
                          {item.time}
                        </Badge>
                      </div>
                      <p className="text-secondary small mb-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speaker Profile Section */}
              <div className="mb-5 p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                <h4 className="fw-bold mb-4 text-white">Featured Session Host</h4>
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                  <img 
                    src={eventSpeaker.avatar} 
                    alt={eventSpeaker.name} 
                    className="rounded-circle border border-info border-2 shadow"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5 className="fw-bold mb-1 text-white">{eventSpeaker.name}</h5>
                    <p className="text-info small fw-medium mb-2">{eventSpeaker.role} ({eventSpeaker.company})</p>
                    
                    <div className="d-flex flex-wrap gap-3 small text-secondary mb-3">
                      <span>★ {eventSpeaker.rating} Speaker Rating</span>
                      <span>•</span>
                      <span>👨‍🏫 {eventSpeaker.studentsCount} Students</span>
                      <span>•</span>
                      <span>🎤 {eventSpeaker.eventsHosted} Hosted Workshops</span>
                    </div>

                    <p className="text-secondary small mb-3">{eventSpeaker.bio}</p>

                    <div className="d-flex gap-2">
                      <a href={eventSpeaker.social.linkedin} className="btn btn-sm btn-outline-secondary rounded-pill text-light px-3">LinkedIn</a>
                      <a href={eventSpeaker.social.twitter} className="btn btn-sm btn-outline-secondary rounded-pill text-light px-3">Twitter</a>
                      <a href={eventSpeaker.social.github} className="btn btn-sm btn-outline-secondary rounded-pill text-light px-3">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event FAQs Accordion */}
              <div>
                <h4 className="fw-bold mb-3 text-white">Event Attendance FAQs</h4>
                <Accordion defaultActiveKey="0" className="accordion-dark custom-accordion">
                  {eventSingleFaqs.map((faq, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={faq.id} className="bg-dark border border-secondary border-opacity-25 rounded-3 mb-2 overflow-hidden">
                      <Accordion.Header>
                        <span className="fw-semibold text-white small">{faq.question}</span>
                      </Accordion.Header>
                      <Accordion.Body className="bg-black bg-opacity-25 text-secondary small">
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>

            </Col>

            {/* === RIGHT COLUMN: STICKY REGISTRATION PASS CARD === */}
            <Col lg={4}>
              <div className="sticky-lg-top" style={{ top: '90px' }}>
                <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 overflow-hidden shadow-lg">
                  
                  {/* Thumbnail / Header */}
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={singleEventData.bannerImage} 
                      alt={singleEventData.title}
                      style={{ height: '190px', objectFit: 'cover' }} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <span className="position-absolute bottom-0 start-0 m-3 badge bg-black bg-opacity-75 text-light px-2 py-1">
                      {singleEventData.format}
                    </span>
                  </div>

                  <Card.Body className="p-4">
                    {/* Price Block */}
                    <div className="d-flex align-items-baseline gap-2 mb-3">
                      <span className="display-6 fw-bold text-white">{singleEventData.price}</span>
                      <span className="text-secondary text-decoration-line-through fs-5">{singleEventData.originalPrice}</span>
                      <Badge bg="success" className="ms-auto">100% Free Pass</Badge>
                    </div>

                    <div className="small text-danger fw-semibold mb-3">
                      ⚠️ Limited Capacity: {singleEventData.seatsLeft} of {singleEventData.totalSeats} seats remaining!
                    </div>

                    {/* CTA Button */}
                    <Button 
                      variant="info" 
                      size="lg" 
                      onClick={() => setShowRegisterModal(true)}
                      className="w-100 rounded-pill fw-bold text-dark shadow-sm mb-3"
                    >
                      Reserve Free Seat
                    </Button>

                    <div className="text-center small text-secondary mb-4">
                      Instant calendar invite (.ics) and Zoom access email provided.
                    </div>

                    {/* Pass Includes List */}
                    <h6 className="fw-bold text-white mb-3">Pass Includes:</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
                      <li className="d-flex align-items-center gap-2">
                        <span>📹</span> <span>Full HD live webinar access</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>💻</span> <span>Interactive Discord coding stage invitation</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>📦</span> <span>Complete GitHub starter repos & slide decks</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>🏆</span> <span>Verifiable digital badge of participation</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>💬</span> <span>Direct 45-min live Q&A with the speaker</span>
                      </li>
                    </ul>

                    {/* Share Action */}
                    <div className="pt-3 border-top border-secondary border-opacity-25 text-center">
                      <button className="btn btn-link text-info text-decoration-none small p-0">
                        Share This Event With Friends &rarr;
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* 3. FAST REGISTRATION MODAL */}
      <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} centered contentClassName="bg-dark text-white border-secondary">
        <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
          <Modal.Title className="fs-6">Reserve Seat: {singleEventData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {isRegistered ? (
            <div className="alert alert-success text-center py-3 rounded-4 mb-0">
              <h5 className="fw-bold mb-1">🎉 Seat Reserved Successfully!</h5>
              <p className="small mb-0">Check your email for the direct Zoom link and calendar invite.</p>
            </div>
          ) : (
            <Form onSubmit={handleRegisterSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="small text-secondary fw-semibold">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Supriyo Kundu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary bg-opacity-10 border-secondary text-white rounded-3 shadow-none small"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small text-secondary fw-semibold">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary bg-opacity-10 border-secondary text-white rounded-3 shadow-none small"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="small text-secondary fw-semibold">Current Role / Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Frontend Developer / Student"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-secondary bg-opacity-10 border-secondary text-white rounded-3 shadow-none small"
                />
              </Form.Group>

              <Button variant="info" type="submit" className="w-100 rounded-pill fw-bold text-dark shadow-sm">
                Confirm Reservation
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default SingleEvent;