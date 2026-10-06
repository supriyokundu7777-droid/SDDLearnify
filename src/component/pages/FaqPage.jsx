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
import Accordion from 'react-bootstrap/Accordion';


import {
  faqCategories,
  faqsData,
  supportChannels
} from '../../user/data/FaqPage';

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketData, setTicketData] = useState({ name: '', email: '', subject: '', message: '' });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // Search and Category Filter Logic
  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (ticketData.email && ticketData.message) {
      setTicketSubmitted(true);
      setTimeout(() => {
        setTicketSubmitted(false);
        setTicketData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="faq-page bg-dark text-white min-vh-100">
      
      {/* 1. HERO HEADER WITH LIVE SEARCH */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-3 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              {/* Breadcrumb */}
              <div className="d-flex justify-content-center align-items-center gap-2 small text-secondary mb-3">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <span className="text-info fw-medium">Support</span>
                <span>/</span>
                <span className="text-light">FAQs</span>
              </div>

              <Badge bg="info" className="text-dark fw-bold mb-3 px-3 py-2 rounded-pill">
                Knowledgebase & Help Desk
              </Badge>
              <h1 className="display-5 fw-bold mb-3 text-white">
                How Can We <span className="text-info">Help You?</span>
              </h1>
              <p className="lead text-secondary fs-6 mb-4 mx-auto" style={{ maxWidth: '620px' }}>
                Search our knowledge base for instant answers regarding curriculums, cloud lab setups, subscriptions, and certifications.
              </p>

              {/* Instant Search Bar */}
              <div className="mx-auto" style={{ maxWidth: '560px' }}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-50 border border-secondary border-opacity-50 shadow">
                  <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">
                    🔍
                  </InputGroup.Text>
                  <Form.Control
                    type="search"
                    placeholder="Search by topic, e.g. 'refund', 'certificate', 'GPU'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white border-0 shadow-none fs-6 ps-2"
                  />
                  {searchQuery && (
                    <Button 
                      variant="link" 
                      className="text-secondary text-decoration-none pe-3"
                      onClick={() => setSearchQuery('')}
                    >
                      ✕
                    </Button>
                  )}
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. CATEGORY PILL FILTER BAR */}
      <section className="py-3 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {faqCategories.map((cat) => (
              <Button
                key={cat.id}
                size="sm"
                variant={activeCategory === cat.id ? 'info' : 'outline-secondary'}
                className="rounded-pill px-3 py-2 fw-medium d-flex align-items-center gap-2"
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. MAIN FAQ ACCORDION SECTION */}
      <section className="py-5">
        <Container fluid="xxl">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-secondary small">
              Showing <strong>{filteredFaqs.length}</strong> matching questions
            </span>
            {(activeCategory !== 'all' || searchQuery !== '') && (
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="btn btn-sm btn-link text-info text-decoration-none p-0"
              >
                Reset filters
              </button>
            )}
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              {filteredFaqs.length > 0 ? (
                <Accordion defaultActiveKey="0" className="accordion-dark custom-accordion d-flex flex-column gap-3">
                  {filteredFaqs.map((faq, idx) => (
                    <Accordion.Item 
                      eventKey={String(idx)} 
                      key={faq.id} 
                      className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 overflow-hidden"
                    >
                      <Accordion.Header>
                        <span className="fw-semibold text-white fs-6 py-1">
                          {faq.question}
                        </span>
                      </Accordion.Header>
                      <Accordion.Body className="bg-black bg-opacity-25 text-secondary small lh-lg pt-2 pb-4 px-4">
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-5">
                  <h4 className="fw-bold text-white mb-2">No Matching Questions Found</h4>
                  <p className="text-secondary mb-4">
                    Try searching for another keyword or submit your question below directly to our support team.
                  </p>
                  <Button 
                    variant="outline-info" 
                    size="sm" 
                    className="rounded-pill px-4"
                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. QUICK SUPPORT CHANNELS */}
      <section className="py-5 bg-black bg-opacity-25 border-top border-bottom border-secondary border-opacity-25">
        <Container fluid="xxl">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Need Direct Help?</Badge>
            <h2 className="fw-bold">We Are Here For You</h2>
            <p className="text-secondary small mx-auto" style={{ maxWidth: '520px' }}>
              Can't find the answer you are looking for? Reach out through any of our community and technical support channels.
            </p>
          </div>

          <Row className="g-4">
            {supportChannels.map((channel) => (
              <Col key={channel.id} xs={12} md={4}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-4 rounded-4 text-center">
                  <div className="fs-1 mb-3">{channel.icon}</div>
                  <Card.Title className="fw-bold fs-5 mb-2">{channel.title}</Card.Title>
                  <Card.Text className="text-secondary small mb-4 flex-grow-1">
                    {channel.desc}
                  </Card.Text>
                  <a 
                    href={channel.actionLink} 
                    className="btn btn-outline-info rounded-pill px-4 btn-sm fw-semibold"
                  >
                    {channel.actionText}
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. SUBMIT A QUESTION / TICKET FORM */}
      <section className="py-5">
        <Container fluid="xxl">
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-lg-5 text-white shadow-lg">
                <div className="text-center mb-4">
                  <Badge bg="info" className="text-dark fw-bold mb-2">Still Have Questions?</Badge>
                  <h3 className="fw-bold mb-2">Send Us a Direct Message</h3>
                  <p className="text-secondary small mb-0">
                    Our technical support leads and curriculum mentors will get back to you within 24 hours.
                  </p>
                </div>

                {ticketSubmitted && (
                  <div className="alert alert-success py-3 rounded-4 text-center mb-4">
                    <h6 className="fw-bold mb-1">🎉 Message Sent Successfully!</h6>
                    <small>We have received your question and will reply to your email shortly.</small>
                  </div>
                )}

                <Form onSubmit={handleTicketSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label className="small text-secondary fw-semibold">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="e.g. Supriyo Kundu"
                          value={ticketData.name}
                          onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                          required
                          className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label className="small text-secondary fw-semibold">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          value={ticketData.email}
                          onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                          required
                          className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group className="mb-2">
                        <Form.Label className="small text-secondary fw-semibold">Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="e.g. Question regarding cloud GPU credits in Pro plan"
                          value={ticketData.subject}
                          onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                          required
                          className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label className="small text-secondary fw-semibold">Your Question</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Describe your inquiry in detail..."
                          value={ticketData.message}
                          onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
                          required
                          className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="text-center pt-2">
                    <Button variant="info" type="submit" size="lg" className="rounded-pill px-5 fw-bold text-dark shadow-sm">
                      Submit Inquiry
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default FaqPage;