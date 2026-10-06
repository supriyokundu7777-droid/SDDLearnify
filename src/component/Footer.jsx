import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';

import {
  footerNavSections,
  footerSocialLinks,
  footerPaymentIcons,
  footerContactInfo
} from '../user/Footer';
import { apiNewsletter } from '../services/api';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      try {
        await apiNewsletter({ email: newsletterEmail.trim(), source: 'footer' });
      } catch (err) {
        console.error('Newsletter subscribe error:', err);
      }
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer bg-black text-white pt-5 border-top border-secondary border-opacity-25">
      
      {/* 1. TOP NEWSLETTER STRIP */}
      <div className="pb-5 border-bottom border-secondary border-opacity-25">
        <Container fluid="xxl">
          <div className="p-4 p-lg-5 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 shadow-sm">
            <Row className="align-items-center gy-4">
              <Col lg={6}>
                <Badge bg="info" className="text-dark fw-bold px-3 py-1 rounded-pill mb-2">
                  Stay Updated
                </Badge>
                <h3 className="fw-bold text-white mb-2">
                  Subscribe to Learnify Developer Weekly
                </h3>
                <p className="text-secondary small mb-0" style={{ maxWidth: '480px' }}>
                  Get production architecture diagrams, framework releases, and free browser coding sandbox hours straight to your inbox.
                </p>
              </Col>
              
              <Col lg={6}>
                {isSubscribed ? (
                  <div className="alert alert-success py-3 px-4 rounded-pill mb-0 small fw-bold">
                    🎉 Thank you for subscribing! Check your inbox for your starter sandbox link.
                  </div>
                ) : (
                  <Form onSubmit={handleSubscribe}>
                    <InputGroup size="lg" className="rounded-pill p-1 bg-dark border border-secondary border-opacity-50 responsive-hero-inputgroup">
                      <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3 d-none d-sm-flex">
                        ✉️
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter your developer email..."
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                        className="bg-transparent text-white border-0 shadow-none fs-6 ps-3 ps-sm-2"
                      />
                      <Button variant="info" type="submit" className="rounded-pill px-4 fw-bold text-dark">
                        Subscribe
                      </Button>
                    </InputGroup>
                  </Form>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* 2. MAIN FOOTER NAVIGATION COLUMNS */}
      <div className="py-5">
        <Container fluid="xxl">
          <Row className="gy-4">
            
            {/* Brand Bio Column */}
            <Col lg={4} md={12}>
              <Link to="/home-one" className="text-decoration-none d-inline-flex align-items-center gap-2 mb-3">
                <span className="fs-3">⚡</span>
                <span className="fs-4 fw-bold text-white tracking-wide">
                  Learn<span className="text-info">ify</span>
                </span>
              </Link>
              <p className="text-secondary small leading-relaxed mb-4" style={{ maxWidth: '360px' }}>
                Next-generation technical education platform. Build production microservices, React 19 apps, and AI agents inside live cloud browser containers.
              </p>

              {/* Social Channels */}
              <div className="d-flex align-items-center gap-2 mb-4">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center text-white p-0"
                    style={{ width: '38px', height: '38px' }}
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>

              {/* Quick Contact Info */}
              <div className="small text-secondary mb-4 mb-lg-0">
                <div className="mb-1">📍 {footerContactInfo.address}</div>
                <div className="mb-1">✉️ <a href={`mailto:${footerContactInfo.email}`} className="text-info text-decoration-none">{footerContactInfo.email}</a></div>
                <div>📞 {footerContactInfo.phone}</div>
              </div>
            </Col>

            {/* Nav Columns 1 to 4 */}
            {footerNavSections.map((section) => (
              <Col key={section.id} lg={2} sm={6} xs={6} className="mb-3 mb-sm-0">
                <h6 className="fw-bold text-white mb-3 text-uppercase small" style={{ letterSpacing: '1px' }}>
                  {section.title}
                </h6>
                <ul className="list-unstyled d-flex flex-column gap-2 small mb-0">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.path}
                        className="text-secondary text-decoration-none hover-text-info transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}

          </Row>
        </Container>
      </div>

      {/* 3. BOTTOM COPYRIGHT & TRUST BAR */}
      <div className="py-4 border-top border-secondary border-opacity-10 bg-dark bg-opacity-40">
        <Container fluid="xxl">
          <Row className="align-items-center gy-3">
            
            <Col md={6} className="text-center text-md-start">
              <span className="small text-secondary">
                &copy; {new Date().getFullYear()} Learnify Inc. All rights reserved. Crafted for builders and senior engineers worldwide.
              </span>
            </Col>

            <Col md={6} className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <span className="small text-secondary me-2">Secure Payments:</span>
              <div className="d-flex gap-2">
                {footerPaymentIcons.map((pay) => (
                  <span
                    key={pay.id}
                    className="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 px-2 py-1 small"
                    title={pay.name}
                  >
                    {pay.icon} {pay.name}
                  </span>
                ))}
              </div>
            </Col>

          </Row>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;