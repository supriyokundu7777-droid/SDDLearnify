import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

import {
  enrollCourseData,
  cohortBatches,
  enrollmentTracks,
  enrollmentPerks,
  enrollmentGuarantees
} from '../../user/data/EnrollNow';
import { apiEnroll } from '../../services/api';

const EnrollNow = () => {
  const navigate = useNavigate();

  // State Management
  const [selectedBatch, setSelectedBatch] = useState(cohortBatches[0].id);
  const [selectedTrack, setSelectedTrack] = useState(enrollmentTracks[0]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'Intermediate (1-3 years)',
    githubProfile: '',
    appliedScholarship: false,
    scholarshipReason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [admissionsRef, setAdmissionsRef] = useState('ENR-782419');
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEnrollSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.fullName || !formData.email || !formData.phone) {
      setFormError('Please complete all mandatory contact details.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiEnroll({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        batchId: selectedBatch,
        track: selectedTrack?.title || selectedTrack,
        experienceLevel: formData.experienceLevel,
        githubProfile: formData.githubProfile,
        appliedScholarship: formData.appliedScholarship,
        scholarshipReason: formData.scholarshipReason
      });

      setIsSubmitting(false);
      setAdmissionsRef(response.admissionsRef || `ENR-${Math.floor(100000 + Math.random() * 900000)}`);
      setShowSuccessModal(true);
    } catch (err) {
      setIsSubmitting(false);
      setFormError(err.message || 'Failed to submit enrollment application. Please try again.');
    }
  };

  return (
    <div className="enroll-now-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-4">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <Link to="/course-one" className="text-secondary text-decoration-none hover-text-white">Courses</Link>
          <span>/</span>
          <span className="text-info fw-medium">Admissions</span>
          <span>/</span>
          <span className="text-light">Cohort Enrollment</span>
        </div>

        {/* 2. HEADER BANNER */}
        <div className="mb-5 text-center text-md-start">
          <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill mb-2">
            Accelerated Career Immersion
          </Badge>
          <h1 className="display-5 fw-bold text-white mb-2">
            Secure Your Seat in the <span className="text-info">Upcoming Cohort</span>
          </h1>
          <p className="lead text-secondary fs-6 mb-0" style={{ maxWidth: '680px' }}>
            Transform into a production-ready staff engineer through hands-on capstone repositories, live debugging sessions, and mentor code reviews.
          </p>
        </div>

        {formError && (
          <Alert variant="danger" className="py-2 px-3 small rounded-3 border-0 mb-4">
            ⚠️ {formError}
          </Alert>
        )}

        {/* 3. MAIN FORM & SUMMARY LAYOUT */}
        <Form onSubmit={handleEnrollSubmit}>
          <Row className="g-4">
            
            {/* === LEFT COLUMN: APPLICATION & PREFERENCES === */}
            <Col lg={7}>
              
              {/* Batch Selection Card */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm mb-4">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <span>📅</span> 1. Select Your Live Batch
                </h5>

                <div className="d-flex flex-column gap-3">
                  {cohortBatches.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBatch(b.id)}
                      className={`p-3 rounded-4 border cursor-pointer transition-all d-flex align-items-start gap-3 ${
                        selectedBatch === b.id
                          ? 'border-info bg-black bg-opacity-40 shadow'
                          : 'border-secondary border-opacity-25 bg-secondary bg-opacity-10'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <Form.Check
                        type="radio"
                        name="batchSelection"
                        checked={selectedBatch === b.id}
                        onChange={() => setSelectedBatch(b.id)}
                        className="mt-1 fs-5"
                      />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="fw-bold text-white mb-0">{b.title}</h6>
                          {b.isPopular && (
                            <Badge bg="danger" className="rounded-pill px-2 py-1 small">
                              Filling Fast
                            </Badge>
                          )}
                        </div>
                        <p className="text-secondary small mb-1">{b.timing}</p>
                        <div className="d-flex gap-3 small text-secondary">
                          <span className="text-info fw-semibold">Starts: {b.startDate}</span>
                          <span>•</span>
                          <span className="text-warning">Seats: {b.seatsLeft} remaining</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Student Details Card */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm mb-4">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <span>👤</span> 2. Student & Applicant Information
                </h5>

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Full Legal Name *</Form.Label>
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
                      <Form.Label className="small text-secondary fw-semibold">Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Phone / WhatsApp Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Current Technical Experience</Form.Label>
                      <Form.Select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="bg-dark text-white border-secondary border-opacity-50 rounded-3 shadow-none small"
                      >
                        <option>Beginner (0-1 year)</option>
                        <option>Intermediate (1-3 years)</option>
                        <option>Senior / Experienced (3+ years)</option>
                        <option>Non-Technical Career Switcher</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">GitHub Profile or Portfolio (Optional)</Form.Label>
                      <Form.Control
                        type="url"
                        name="githubProfile"
                        placeholder="https://github.com/your-username"
                        value={formData.githubProfile}
                        onChange={handleInputChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Primary Track Focus</Form.Label>
                      <Form.Select
                        value={selectedTrack}
                        onChange={(e) => setSelectedTrack(e.target.value)}
                        className="bg-dark text-white border-secondary border-opacity-50 rounded-3 shadow-none small"
                      >
                        {enrollmentTracks.map((tr, idx) => (
                          <option key={idx} value={tr}>{tr}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Scholarship Checkbox */}
                  <Col xs={12} className="pt-2">
                    <Form.Check
                      type="checkbox"
                      id="scholarshipCheck"
                      name="appliedScholarship"
                      label="Apply for Diversity & Student Merit Scholarship (Up to 30% reduction)"
                      checked={formData.appliedScholarship}
                      onChange={handleInputChange}
                      className="small text-info fw-semibold"
                    />
                  </Col>

                  {formData.appliedScholarship && (
                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="scholarshipReason"
                        placeholder="Briefly explain your academic background or career goals for the scholarship committee..."
                        value={formData.scholarshipReason}
                        onChange={handleInputChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Col>
                  )}
                </Row>
              </Card>

            </Col>

            {/* === RIGHT COLUMN: COHORT SUMMARY & SUBMIT === */}
            <Col lg={5}>
              <div className="sticky-lg-top" style={{ top: '90px' }}>
                <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 p-4 shadow-lg mb-4">
                  
                  {/* Course Card Preview */}
                  <div className="d-flex align-items-center gap-3 pb-3 border-bottom border-secondary border-opacity-25 mb-3">
                    <img
                      src={enrollCourseData.image}
                      alt={enrollCourseData.title}
                      className="rounded-3 object-fit-cover shadow-sm"
                      style={{ width: '70px', height: '70px' }}
                    />
                    <div>
                      <Badge bg="danger" className="mb-1 rounded-pill small">
                        {enrollCourseData.discountTag}
                      </Badge>
                      <h6 className="fw-bold text-white mb-0 fs-6 lh-sm">
                        {enrollCourseData.title}
                      </h6>
                      <small className="text-secondary">Lead Mentor: {enrollCourseData.instructor.name}</small>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="d-flex align-items-baseline gap-2 mb-3">
                    <span className="display-6 fw-bold text-info">₹{enrollCourseData.price.toLocaleString('en-IN')}</span>
                    <span className="text-secondary text-decoration-line-through fs-5">₹{enrollCourseData.originalPrice.toLocaleString('en-IN')}</span>
                    <Badge bg="success" className="ms-auto rounded-pill px-2 py-1">Save ₹{(enrollCourseData.originalPrice - enrollCourseData.price).toLocaleString('en-IN')}</Badge>
                  </div>

                  {/* Perks Checklist */}
                  <h6 className="fw-bold text-white small mb-2">What is included with your seat:</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-4">
                    {enrollmentPerks.map((perk, idx) => (
                      <li key={idx} className="d-flex align-items-start gap-2">
                        <span className="text-info fw-bold">✓</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Button
                    variant="info"
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-100 rounded-pill fw-bold text-dark shadow-sm py-3 mb-3"
                  >
                    {isSubmitting ? 'Registering Admission...' : `Enroll For ₹${enrollCourseData.price.toLocaleString('en-IN')} →`}
                  </Button>

                  <div className="text-center small text-secondary mb-4" style={{ fontSize: '0.78rem' }}>
                    Instant confirmation and Discord onboarding link sent to your registered email.
                  </div>

                  {/* Guarantees */}
                  <div className="d-flex flex-column gap-2 pt-3 border-top border-secondary border-opacity-25">
                    {enrollmentGuarantees.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-center gap-2 small text-secondary">
                        <span>{item.icon}</span>
                        <div>
                          <strong className="text-light d-block" style={{ fontSize: '0.8rem' }}>{item.title}</strong>
                          <span style={{ fontSize: '0.75rem' }}>{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </Card>
              </div>
            </Col>

          </Row>
        </Form>

        {/* 4. SUCCESS ONBOARDING MODAL */}
        <Modal show={showSuccessModal} onHide={() => navigate('/dashboard')} centered contentClassName="bg-dark text-white border-secondary">
          <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
            <Modal.Title className="fs-5">🎉 Enrollment Confirmed!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4 text-center">
            <div className="fs-1 mb-3">🚀</div>
            <h4 className="fw-bold text-white mb-2">Welcome to Learnify Cohort!</h4>
            <p className="text-secondary small mb-3">
              We have reserved your seat in the <strong>{cohortBatches.find(b => b.id === selectedBatch)?.title}</strong>. 
              Your welcome packet, orientation schedule, and Discord invite have been dispatched to <strong>{formData.email}</strong>.
            </p>
            <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 small text-secondary mb-4">
              <strong>Admissions Reference:</strong> {admissionsRef}
            </div>
            <Button as={Link} to="/dashboard" variant="info" className="rounded-pill px-4 fw-bold text-dark w-100">
              Go To Student Dashboard
            </Button>
          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
};

export default EnrollNow;