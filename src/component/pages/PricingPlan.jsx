import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

import {
  pricingTiers,
  comparisonFeatures,
  enterpriseTier,
  pricingFaqs
} from '../../user/data/PricingPlan';

const PricingPlan = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pricing-plan-page bg-dark text-white min-vh-100">
      
      {/* 1. HERO HEADER & BILLING TOGGLE */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-2 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              {/* Breadcrumb */}
              <div className="d-flex justify-content-center align-items-center gap-2 small text-secondary mb-3">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <span className="text-info fw-medium">Pages</span>
                <span>/</span>
                <span className="text-light">Pricing Plans</span>
              </div>

              <Badge bg="info" className="text-dark fw-bold mb-3 px-3 py-2 rounded-pill">
                Simple & Transparent Memberships
              </Badge>
              <h1 className="display-5 fw-bold mb-3 text-white">
                Invest In Your Career With <span className="text-info">Unrestricted Access</span>
              </h1>
              <p className="lead text-secondary fs-6 mb-4 mx-auto" style={{ maxWidth: '620px' }}>
                Join over 140,000+ developers and designers learning with production projects, hands-on cloud labs, and direct mentor support.
              </p>

              {/* Monthly vs Annual Toggle */}
              <div className="d-inline-flex align-items-center gap-3 p-1 rounded-pill bg-black bg-opacity-40 border border-secondary border-opacity-50">
                <Button
                  size="sm"
                  variant={!isAnnual ? 'info' : 'transparent'}
                  className={`rounded-pill px-4 fw-bold ${!isAnnual ? 'text-dark' : 'text-secondary'}`}
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly Billing
                </Button>
                <Button
                  size="sm"
                  variant={isAnnual ? 'info' : 'transparent'}
                  className={`rounded-pill px-4 fw-bold ${isAnnual ? 'text-dark' : 'text-secondary'}`}
                  onClick={() => setIsAnnual(true)}
                >
                  Annual Billing
                  <Badge bg="danger" className="ms-2 rounded-pill small">Save 20%</Badge>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. THREE-COLUMN PRICING TIERS */}
      <section className="py-5">
        <Container fluid="xxl">
          <Row className="g-4 justify-content-center align-items-stretch">
            {pricingTiers.map((tier) => {
              const currentPrice = isAnnual ? tier.annualPrice : tier.monthlyPrice;
              return (
                <Col key={tier.id} xs={12} md={6} lg={4}>
                  <Card className={`h-100 bg-secondary bg-opacity-10 rounded-4 p-4 text-white position-relative d-flex flex-column border ${tier.popular ? 'border-info shadow-lg' : 'border-secondary border-opacity-25'}`}>
                    
                    {/* Top Popular Badge */}
                    {tier.popular && (
                      <div className="text-center mb-2">
                        <Badge bg="info" className="text-dark fw-bold px-3 py-1 rounded-pill">
                          ★ {tier.badge}
                        </Badge>
                      </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className="fw-bold mb-0 text-white">{tier.title}</h4>
                      {!tier.popular && (
                        <Badge bg="secondary" className="bg-opacity-25 border border-secondary border-opacity-50 text-light fw-normal">
                          {tier.badge}
                        </Badge>
                      )}
                    </div>

                    <p className="text-secondary small mb-4">{tier.description}</p>

                    {/* Price Block */}
                    <div className="d-flex align-items-baseline gap-1 mb-2">
                      <span className="display-5 fw-bold text-white">
                        ₹{Math.round(currentPrice).toLocaleString('en-IN')}
                      </span>
                      <span className="text-secondary small">
                        / {tier.billingPeriod}
                      </span>
                    </div>

                    <span className="text-secondary small mb-4 d-block" style={{ fontSize: '0.8rem' }}>
                      {currentPrice === 0 ? 'No credit card required' : isAnnual ? 'Billed annually (~20% savings applied)' : 'Billed month-to-month'}
                    </span>

                    {/* CTA Button */}
                    <Button 
                      as={Link} 
                      to="/register" 
                      variant={tier.ctaVariant} 
                      size="lg" 
                      className={`w-100 rounded-pill fw-bold mb-4 ${tier.popular ? 'text-dark shadow-sm' : ''}`}
                    >
                      {tier.ctaText}
                    </Button>

                    {/* Features Checklist */}
                    <h6 className="fw-semibold text-white small mb-3">Included in this plan:</h6>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0 small">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className={`d-flex align-items-center gap-2 ${feat.included ? 'text-light' : 'text-secondary opacity-50'}`}>
                          {feat.included ? (
                            <span className="text-info fw-bold">✓</span>
                          ) : (
                            <span className="text-secondary">✕</span>
                          )}
                          <span className={!feat.included ? 'text-decoration-line-through' : ''}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* 3. DETAILED FEATURE COMPARISON TABLE */}
      <section className="py-5 bg-black bg-opacity-25 border-top border-bottom border-secondary border-opacity-25">
        <Container fluid="xxl" className="py-lg-3">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Full Comparison</Badge>
            <h2 className="fw-bold">Compare Plan Features</h2>
            <p className="text-secondary small mx-auto" style={{ maxWidth: '540px' }}>
              Detailed breakdown of features, resources, and mentorship limits across each tier.
            </p>
          </div>

          <div className="table-responsive rounded-4 border border-secondary border-opacity-25 overflow-hidden shadow">
            <Table hover variant="dark" className="mb-0 align-middle">
              <thead className="bg-secondary bg-opacity-25 border-bottom border-secondary">
                <tr className="py-3">
                  <th className="py-3 ps-4 text-secondary text-uppercase small" style={{ width: '40%' }}>Feature Specification</th>
                  <th className="py-3 text-center text-secondary text-uppercase small" style={{ width: '20%' }}>Starter Free</th>
                  <th className="py-3 text-center text-info text-uppercase small" style={{ width: '20%' }}>Individual Pro</th>
                  <th className="py-3 text-center text-secondary text-uppercase small" style={{ width: '20%' }}>Accelerator</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="border-secondary border-opacity-10">
                    <td className="ps-4 fw-medium text-light py-3 small">{row.feature}</td>
                    <td className="text-center py-3 small text-secondary">
                      {typeof row.free === 'boolean' ? (row.free ? '✓' : '—') : row.free}
                    </td>
                    <td className="text-center py-3 small text-info fw-semibold">
                      {typeof row.pro === 'boolean' ? (row.pro ? '✓' : '—') : row.pro}
                    </td>
                    <td className="text-center py-3 small text-light">
                      {typeof row.accelerator === 'boolean' ? (row.accelerator ? '✓' : '—') : row.accelerator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* 4. ENTERPRISE / TEAM PLAN BANNER */}
      <section className="py-5">
        <Container fluid="xxl">
          <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-lg-5 text-white shadow-lg">
            <Row className="align-items-center gy-4">
              <Col lg={7}>
                <Badge bg="warning" className="text-dark fw-bold mb-2">{enterpriseTier.badge}</Badge>
                <h3 className="fw-bold mb-3 text-white">{enterpriseTier.title}</h3>
                <p className="text-secondary small mb-4 leading-relaxed">
                  {enterpriseTier.description}
                </p>
                <Row className="g-2 mb-4">
                  {enterpriseTier.features.map((item, idx) => (
                    <Col sm={6} key={idx} className="d-flex align-items-center gap-2 small text-light">
                      <span className="text-info fw-bold">✓</span>
                      <span>{item}</span>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={5} className="text-lg-end">
                <Button as={Link} to="/contact" variant="info" size="lg" className="rounded-pill px-5 fw-bold text-dark shadow-sm">
                  {enterpriseTier.ctaText}
                </Button>
                <small className="d-block text-secondary mt-2">
                  Volume discounts available for 10+ seats
                </small>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      {/* 5. PRICING FAQS */}
      <section className="py-5 bg-black bg-opacity-25 border-top border-secondary border-opacity-25">
        <Container fluid="xxl" className="py-lg-3">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Help Center</Badge>
            <h2 className="fw-bold">Frequently Asked Questions</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion defaultActiveKey="0" className="accordion-dark custom-accordion">
                {pricingFaqs.map((faq, idx) => (
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
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default PricingPlan;