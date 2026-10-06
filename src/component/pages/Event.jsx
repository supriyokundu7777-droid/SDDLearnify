import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import {
  eventCategories,
  eventFormats,
  eventsData,
  eventPerks
} from '../../user/data/Event';

const Event = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  const [searchKeyword, setSearchKeyword] = useState('');

  // Filtering Logic
  const filteredEvents = eventsData.filter((ev) => {
    const matchCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    const matchFormat = selectedFormat === 'All Formats' || ev.format === selectedFormat;
    const matchSearch =
      ev.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      ev.speaker.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchCategory && matchFormat && matchSearch;
  });

  return (
    <div className="events-page bg-dark text-white min-vh-100">
      
      {/* 1. TOP HERO BREADCRUMB */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-2 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="d-flex justify-content-center align-items-center gap-2 small text-secondary mb-3">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <span className="text-info fw-medium">Pages</span>
                <span>/</span>
                <span className="text-light">Events</span>
              </div>
              <h1 className="display-5 fw-bold mb-3 text-white">
                Live Tech Masterclasses & <span className="text-info">Cohorts</span>
              </h1>
              <p className="lead text-secondary fs-6 mb-4 mx-auto" style={{ maxWidth: '650px' }}>
                Join interactive webinars, deep-dive live coding sessions, and system design breakdowns hosted by leading tech practitioners.
              </p>

              {/* Instant Search Bar */}
              <div className="mx-auto" style={{ maxWidth: '520px' }}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-50 border border-secondary border-opacity-50 shadow">
                  <Form.Control
                    type="search"
                    placeholder="Search by topic, speaker, or keyword..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="bg-transparent text-white border-0 ps-4 shadow-none fs-6"
                  />
                  <Button variant="info" className="rounded-pill px-4 fw-bold text-dark">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. FILTER CONTROLS TOOLBAR */}
      <section className="py-3 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <Row className="g-3 align-items-center justify-content-between">
            {/* Category Filter Pills */}
            <Col lg={9}>
              <div className="d-flex flex-wrap gap-2">
                {eventCategories.map((cat, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant={selectedCategory === cat ? 'info' : 'outline-secondary'}
                    className="rounded-pill px-3 fw-medium"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </Col>

            {/* Format Dropdown */}
            <Col lg={3} className="text-lg-end">
              <Form.Select
                size="sm"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {eventFormats.map((fmt, idx) => (
                  <option key={idx} value={fmt}>{fmt}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. EVENTS DIRECTORY CARDS */}
      <section className="py-5">
        <Container fluid="xxl">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-secondary small">
              Showing <strong>{filteredEvents.length}</strong> upcoming events
            </span>
            {(selectedCategory !== 'All' || selectedFormat !== 'All Formats' || searchKeyword !== '') && (
              <button 
                onClick={() => { setSelectedCategory('All'); setSelectedFormat('All Formats'); setSearchKeyword(''); }}
                className="btn btn-sm btn-link text-info text-decoration-none p-0"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredEvents.length > 0 ? (
            <Row className="g-4">
              {filteredEvents.map((ev) => (
                <Col key={ev.id} xs={12} md={6} lg={4}>
                  <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm">
                    {/* Thumbnail & Badges */}
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={ev.image} 
                        alt={ev.title}
                        style={{ height: '200px', objectFit: 'cover' }} 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      <Badge bg="danger" className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-1">
                        {ev.badge}
                      </Badge>
                      <Badge bg="dark" className="position-absolute bottom-0 start-0 m-3 bg-opacity-75 rounded-pill px-2 py-1 text-light border border-secondary border-opacity-50">
                        {ev.format}
                      </Badge>
                    </div>

                    <Card.Body className="d-flex flex-column p-4">
                      {/* Date & Remaining Seats */}
                      <div className="d-flex justify-content-between align-items-center small mb-2">
                        <span className="text-info fw-bold">📅 {ev.date}</span>
                        <span className="text-danger fw-semibold">{ev.seatsLeft} spots left</span>
                      </div>

                      <Card.Title className="fw-bold fs-5 mb-2 lh-base">
                        <Link to="/single-event" className="text-white text-decoration-none hover-text-info">
                          {ev.title}
                        </Link>
                      </Card.Title>

                      <p className="text-secondary small mb-3 flex-grow-1">
                        {ev.description}
                      </p>

                      {/* Speaker Profile Strip */}
                      <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-25 mb-3">
                        <img 
                          src={ev.speakerAvatar} 
                          alt={ev.speaker} 
                          className="rounded-circle border border-info border-1"
                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                        <div className="overflow-hidden">
                          <strong className="d-block text-white small text-truncate">{ev.speaker}</strong>
                          <span className="text-secondary d-block text-truncate" style={{ fontSize: '0.75rem' }}>{ev.speakerRole}</span>
                        </div>
                      </div>

                      {/* Time & Registration Action */}
                      <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                        <div>
                          <small className="text-secondary d-block" style={{ fontSize: '0.75rem' }}>⏰ {ev.time}</small>
                          <span className="fw-bold fs-5 text-white">{ev.price}</span>
                        </div>
                        <Button 
                          as={Link} 
                          to="/single-event" 
                          variant="info" 
                          size="sm" 
                          className="rounded-pill px-4 fw-bold shadow-sm"
                        >
                          Register
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <h4 className="fw-bold text-white mb-2">No Events Found</h4>
              <p className="text-secondary mb-4">Try clearing your filters or changing your search terms.</p>
              <Button 
                variant="outline-info" 
                size="sm" 
                className="rounded-pill px-4"
                onClick={() => { setSelectedCategory('All'); setSelectedFormat('All Formats'); setSearchKeyword(''); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. WHY ATTEND LIVE EVENTS */}
      <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #111317 0%, #171a1f 100%)' }}>
        <Container fluid="xxl" className="py-3">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Interactive Learning</Badge>
            <h2 className="fw-bold">Why Attend Learnify Live Sessions?</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '580px' }}>
              Unlike pre-recorded videos, live events provide active participation, instantaneous code reviews, and networking with global peers.
            </p>
          </div>
          <Row className="g-4">
            {eventPerks.map((perk) => (
              <Col key={perk.id} xs={12} sm={6} lg={3}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-3 rounded-4 text-center">
                  <div className="fs-1 my-2">{perk.icon}</div>
                  <Card.Body className="p-2">
                    <Card.Title className="fw-bold fs-6 mb-2">{perk.title}</Card.Title>
                    <Card.Text className="text-secondary small">{perk.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Event;