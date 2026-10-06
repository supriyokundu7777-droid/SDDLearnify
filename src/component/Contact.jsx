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
import Alert from 'react-bootstrap/Alert';

import {
  contactChannels,
  campusOffices,
  inquirySubjects,
  contactFaqs
} from '../user/Contact';
import { apiContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: inquirySubjects[0],
    orderId: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await apiContact(formData);
      setIsSubmitting(false);
      setTicketRef(response.ticketId || `TIC-${Math.floor(100000 + Math.random() * 900000)}`);
      setFormSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        subject: inquirySubjects[0],
        orderId: '',
        message: ''
      });
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Failed to submit contact request. Please try again.');
    }
  };

  return (
    <div className="contact-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB & HEADER */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <span className="text-info fw-medium">Support</span>
          <span>/</span>
          <span className="text-light">Contact Us</span>
        </div>

        <div className="text-center mb-5">
          <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill mb-2">
            24/7 Global Student & Developer Support
          </Badge>
          <h1 className="display-5 fw-bold text-white mb-3">
            We're Here To Help You <span className="text-info">Build & Ship</span>
          </h1>
          <p className="lead text-secondary fs-6 mx-auto mb-0" style={{ maxWidth: '640px' }}>
            Have questions regarding curriculum tracks, cloud sandboxes, team plans, or billing? Reach out through any of our channels below.
          </p>
        </div>

        {/* 2. DIRECT CONTACT CHANNEL CARDS */}
        <Row className="g-4 mb-5">
          {contactChannels.map((channel) => (
            <Col key={channel.id} xs={12} sm={6} lg={3}>
              <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm d-flex flex-column">
                <div className="fs-1 mb-3">{channel.icon}</div>
                <h5 className="fw-bold text-white mb-2">{channel.title}</h5>
                <p className="text-secondary small mb-3 flex-grow-1">{channel.description}</p>
                <div className="pt-3 border-top border-secondary border-opacity-25">
                  <div className="text-info fw-bold small text-truncate mb-1">{channel.contact}</div>
                  <small className="text-secondary d-block" style={{ fontSize: '0.75rem' }}>{channel.timing}</small>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 3. MAIN SECTION: INQUIRY FORM + CAMPUS HUBS */}
        <Row className="g-5 mb-5 align-items-start">
          
          {/* === LEFT COLUMN: CONTACT FORM === */}
          <Col lg={7}>
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-lg-5 shadow-lg">
              <h3 className="fw-bold text-white mb-2">Send Us a Direct Message</h3>
              <p className="text-secondary small mb-4">
                Fill in the details below and an engineer from our support desk will follow up promptly.
              </p>

              {formSubmitted && (
                <Alert variant="success" className="rounded-3 py-3 px-4 mb-4 border-0 shadow">
                  <h6 className="fw-bold mb-1">🎉 Message Stored in MongoDB Successfully!</h6>
                  <p className="small mb-0">
                    Your support ticket reference is <strong className="text-dark bg-warning px-2 py-0.5 rounded">{ticketRef}</strong>. Our team will review your inquiry shortly.
                  </p>
                </Alert>
              )}

              {errorMessage && (
                <Alert variant="danger" className="rounded-3 py-3 px-4 mb-4 border-0 shadow">
                  ⚠️ {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleFormSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Your Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="e.g. Supriyo Kundu"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Your Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Topic / Inquiry Area *</Form.Label>
                      <Form.Select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-dark text-white border-secondary border-opacity-50 rounded-3 shadow-none small"
                      >
                        {inquirySubjects.map((sub, idx) => (
                          <option key={idx} value={sub}>{sub}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Order / Ticket ID (Optional)</Form.Label>
                      <Form.Control
                        type="text"
                        name="orderId"
                        placeholder="e.g. LF-ORD-849201"
                        value={formData.orderId}
                        onChange={handleInputChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Detailed Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Explain your technical question, billing issue, or partnership proposal in detail..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="pt-2">
                    <Button
                      variant="info"
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="rounded-pill px-5 fw-bold text-dark shadow-sm"
                    >
                      {isSubmitting ? 'Transmitting Ticket...' : 'Send Message →'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>

          {/* === RIGHT COLUMN: REGIONAL CAMPUSES & EMBEDDED MAP === */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-4">
              
              {/* Campus Hubs */}
              <div>
                <h4 className="fw-bold text-white mb-3">Global Innovation Hubs</h4>
                <div className="d-flex flex-column gap-3">
                  {campusOffices.map((office) => (
                    <Card key={office.id} className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="fw-bold text-white mb-0">{office.city}</h5>
                        <Badge bg="secondary" className="bg-opacity-25 text-info border border-secondary border-opacity-50 small">
                          {office.badge}
                        </Badge>
                      </div>
                      <p className="text-secondary small mb-2">{office.address}</p>
                      <div className="d-flex flex-wrap gap-3 small text-secondary">
                        <span>📞 {office.phone}</span>
                        <span>•</span>
                        <span className="text-info">✉️ {office.email}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Preview Card */}
              <Card className="bg-black bg-opacity-40 border border-secondary border-opacity-25 rounded-4 overflow-hidden shadow">
                <iframe
                  title="Learnify SF Hub Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086395353592!2d-122.39958742357774!3d37.78854497198226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062967115ff%3A0xb3551db77ad15923!2sHoward%20St%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="210"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Card>

            </div>
          </Col>

        </Row>

        {/* 4. QUICK HELP & RESOLUTION ACCORDION */}
        <section className="pt-5 border-top border-secondary border-opacity-25">
          <div className="text-center mb-4">
            <h4 className="fw-bold text-white mb-1">Frequently Asked Support Questions</h4>
            <p className="text-secondary small mb-0">Instant answers to frequent account, sandbox, and certificate questions.</p>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion defaultActiveKey="c-faq-1" className="accordion-dark custom-accordion">
                {contactFaqs.map((faq) => (
                  <Accordion.Item eventKey={faq.id} key={faq.id} className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-3 mb-2 overflow-hidden">
                    <Accordion.Header>
                      <span className="fw-semibold text-white small">{faq.question}</span>
                    </Accordion.Header>
                    <Accordion.Body className="bg-black bg-opacity-25 text-secondary small leading-relaxed">
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </section>

      </Container>
    </div>
  );
};

export default Contact;