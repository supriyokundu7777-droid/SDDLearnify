import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useApp } from '../../context/AppContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile, showToast, logout } = useApp();

  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    title: user.title || '',
    bio: user.bio || '',
    country: user.country || 'India',
    targetWeeklyHours: user.targetWeeklyHours || 12,
    role: user.role || 'Pro Student'
  });

  const [skills, setSkills] = useState(user.skills || ['React 19', 'Next.js 15', 'TypeScript', 'Docker']);
  const [newSkill, setNewSkill] = useState('');

  const [notifications, setNotifications] = useState({
    cohortReminders: true,
    certNotifications: true,
    weeklyDigest: true,
    promotions: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills((prev) => [...prev, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((s) => s !== skillToRemove));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const initials = formData.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    updateUserProfile({
      ...formData,
      skills,
      initials: initials || 'SK'
    });
  };

  return (
    <div className="profile-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* BREADCRUMB */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
          <Link to="/dashboard" className="text-secondary text-decoration-none hover-text-white">Dashboard</Link>
          <span>/</span>
          <span className="text-info">Profile & Account Settings</span>
        </div>

        <h1 className="display-6 fw-bold text-white mb-4">Student Profile & Preferences</h1>

        <Row className="gy-4">
          
          {/* LEFT: AVATAR & QUICK STATS */}
          <Col lg={4}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-4 text-center mb-4">
              <div
                className="bg-info text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-lg"
                style={{ width: '88px', height: '88px', fontSize: '2rem' }}
              >
                {user.initials || 'SK'}
              </div>
              <h4 className="fw-bold text-white mb-1">{formData.name}</h4>
              <p className="text-secondary small mb-2">{formData.title}</p>
              <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1 rounded-pill mb-3">
                {formData.role}
              </Badge>

              <div className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25 text-start small mb-3">
                <div className="d-flex justify-content-between mb-1 text-secondary">
                  <span>Student ID:</span>
                  <span className="text-light font-mono">LF-STU-88219</span>
                </div>
                <div className="d-flex justify-content-between mb-1 text-secondary">
                  <span>Member Since:</span>
                  <span className="text-light">January 2026</span>
                </div>
                <div className="d-flex justify-content-between text-secondary">
                  <span>Current Streak:</span>
                  <span className="text-warning fw-bold">🔥 {user.streak || 7} Days</span>
                </div>
              </div>

              <Button
                variant="outline-info"
                size="sm"
                className="w-100 rounded-pill fw-semibold mb-2"
                onClick={() => showToast('Avatar Upload', 'Photo upload simulated. Initials generated.', 'info')}
              >
                📷 Change Avatar Photo
              </Button>

              <Button
                variant="outline-danger"
                size="sm"
                className="w-100 rounded-pill fw-semibold"
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
              >
                🚪 Sign Out
              </Button>
            </Card>

            {/* VERIFIED SKILLS BADGES */}
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-4">
              <h5 className="fw-bold text-white fs-6 mb-3">My Skills & Proficiencies</h5>
              
              <div className="d-flex flex-wrap gap-2 mb-3">
                {skills.map((skill, idx) => (
                  <Badge key={idx} bg="dark" className="border border-secondary border-opacity-50 text-light px-3 py-2 rounded-pill font-mono small d-inline-flex align-items-center gap-2">
                    <span>{skill}</span>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-danger fw-bold"
                    >
                      &times;
                    </span>
                  </Badge>
                ))}
              </div>

              <Form onSubmit={handleAddSkill}>
                <InputGroup size="sm">
                  <Form.Control
                    type="text"
                    placeholder="Add new skill (e.g. Kubernetes)..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="bg-black text-white border-secondary border-opacity-50 shadow-none"
                  />
                  <Button variant="info" type="submit" className="fw-bold text-dark">
                    + Add
                  </Button>
                </InputGroup>
              </Form>
            </Card>
          </Col>

          {/* RIGHT: EDIT PROFILE FORM */}
          <Col lg={8}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-4 mb-4">
              <h5 className="fw-bold text-white mb-3">General Information</h5>

              <Form onSubmit={handleSaveProfile}>
                <Row className="gy-3 mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-dark text-white border-secondary border-opacity-50 shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-dark text-white border-secondary border-opacity-50 shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Professional Headline</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g. Senior Frontend Engineer"
                        className="bg-dark text-white border-secondary border-opacity-50 shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Country / Region</Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="bg-dark text-white border-secondary border-opacity-50 shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Biography</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="bg-dark text-white border-secondary border-opacity-50 shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">
                        Target Weekly Study Hours: <strong className="text-info">{formData.targetWeeklyHours}h</strong>
                      </Form.Label>
                      <Form.Range
                        min="2"
                        max="40"
                        step="2"
                        name="targetWeeklyHours"
                        value={formData.targetWeeklyHours}
                        onChange={handleInputChange}
                        className="form-range"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="fw-bold text-white mt-4 mb-3 pt-3 border-top border-secondary border-opacity-25">
                  Notification Settings
                </h5>

                <div className="d-flex flex-column gap-2 mb-4">
                  <Form.Check
                    type="switch"
                    id="cohort-reminders"
                    label="Upcoming Live Cohort & Office Hour Alerts"
                    checked={notifications.cohortReminders}
                    onChange={(e) => setNotifications((p) => ({ ...p, cohortReminders: e.target.checked }))}
                    className="small text-secondary"
                  />
                  <Form.Check
                    type="switch"
                    id="cert-notifs"
                    label="Course Completion & Official Certificate Generation Alerts"
                    checked={notifications.certNotifications}
                    onChange={(e) => setNotifications((p) => ({ ...p, certNotifications: e.target.checked }))}
                    className="small text-secondary"
                  />
                  <Form.Check
                    type="switch"
                    id="weekly-digest"
                    label="Weekly Progress Digest & Productivity Analytics"
                    checked={notifications.weeklyDigest}
                    onChange={(e) => setNotifications((p) => ({ ...p, weeklyDigest: e.target.checked }))}
                    className="small text-secondary"
                  />
                </div>

                <Button variant="info" type="submit" size="lg" className="rounded-pill px-5 fw-bold text-dark shadow-sm">
                  Save Changes
                </Button>
              </Form>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Profile;
