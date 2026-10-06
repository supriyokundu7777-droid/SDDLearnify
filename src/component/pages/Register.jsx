import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useApp } from '../../context/AppContext';
import { apiRegister } from '../../services/api';

import {
  socialRegisterProviders,
  learningTracks,
  registerHighlights,
  registerTrustBadges
} from '../../user/data/Register';

const Register = () => {
  const navigate = useNavigate();
  const { register, isAuthenticated, user, logout } = useApp();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    learningTrack: learningTracks[0],
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password strength meter calculation
  const calculatePasswordStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score += 25;
    if (/[A-Z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass)) score += 25;
    if (/[^A-Za-z0-9]/.test(pass)) score += 25;
    return score;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getStrengthVariant = () => {
    if (passwordStrength <= 25) return 'danger';
    if (passwordStrength <= 50) return 'warning';
    if (passwordStrength <= 75) return 'info';
    return 'success';
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.fullName || !formData.email || !formData.password) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify.');
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMessage('You must agree to the Terms of Service & Privacy Policy.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiRegister({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        learningTrack: formData.learningTrack
      });

      setIsLoading(false);
      register({
        ...response.user,
        token: response.token
      });

      setSuccessMessage('🎉 Account created and stored in MongoDB successfully! Redirecting...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Failed to create account. Please try again.');
    }
  };

  const handleSocialRegister = (providerName) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      register({
        fullName: `${providerName} Scholar`,
        email: `${providerName.toLowerCase()}.scholar@learnify.io`,
        learningTrack: formData.learningTrack
      });
      setSuccessMessage(`Account created via ${providerName}! Redirecting...`);
      setTimeout(() => {
        navigate('/dashboard');
      }, 700);
    }, 500);
  };

  return (
    <div className="register-page bg-dark text-white min-vh-100 d-flex align-items-center py-5">
      <Container fluid="xxl">
        <Row className="justify-content-center align-items-center g-4">
          
          {/* === LEFT COLUMN: BRAND PROMISE & HIGHLIGHTS === */}
          <Col lg={5} className="d-none d-lg-block pe-lg-5">
            <div className="mb-4">
              <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill mb-3">
                Begin Your Journey
              </Badge>
              <h1 className="display-5 fw-bold lh-sm text-white mb-3">
                Join Over <span className="text-info">140,000+</span> Engineers & Creators
              </h1>
              <p className="text-secondary fs-6 lead">
                Create your student profile to access interactive browser labs, real GitHub repositories, and live mentor office hours.
              </p>
            </div>

            {/* Platform Highlights */}
            <div className="d-flex flex-column gap-3 mb-4">
              {registerHighlights.map((item) => (
                <div key={item.id} className="d-flex align-items-start gap-3 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                  <div className="fs-3">{item.icon}</div>
                  <div>
                    <h6 className="fw-bold mb-1 text-white">{item.title}</h6>
                    <small className="text-secondary">{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="d-flex flex-wrap gap-2 text-secondary small">
              {registerTrustBadges.map((badge, idx) => (
                <span key={idx} className="badge bg-black bg-opacity-40 border border-secondary border-opacity-25 text-light fw-normal py-1 px-2 rounded-pill">
                  🔒 {badge}
                </span>
              ))}
            </div>
          </Col>

          {/* === RIGHT COLUMN: REGISTRATION FORM CARD === */}
          <Col xs={12} sm={10} md={9} lg={6}>
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-sm-5 text-white shadow-lg">
              
              <div className="text-center mb-3">
                <h3 className="fw-bold text-white mb-1">Create Student Account</h3>
                <p className="text-secondary small mb-0">
                  Already have an account?{' '}
                  <Link to="/login" className="text-info text-decoration-none fw-semibold">
                    Sign In Here
                  </Link>
                </p>
              </div>

              {/* Active Session Notice */}
              {isAuthenticated && (
                <div className="p-3 mb-3 rounded-4 bg-info bg-opacity-10 border border-info border-opacity-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
                  <div>
                    <div className="small text-info fw-bold">Active Account Detected</div>
                    <div className="fw-semibold text-white small">{user?.name} <span className="text-secondary">({user?.email})</span></div>
                  </div>
                  <div className="d-flex gap-2">
                    <Button as={Link} to="/dashboard" variant="info" size="sm" className="rounded-pill px-3 py-1 fw-bold text-dark small">
                      Dashboard
                    </Button>
                    <Button variant="outline-danger" size="sm" className="rounded-pill px-3 py-1 small" onClick={() => logout()}>
                      Sign Out
                    </Button>
                  </div>
                </div>
              )}

              {/* Feedback Alerts */}
              {errorMessage && (
                <Alert variant="danger" className="py-2 px-3 small rounded-3 border-0">
                  {errorMessage}
                </Alert>
              )}
              {successMessage && (
                <Alert variant="success" className="py-2 px-3 small rounded-3 border-0">
                  {successMessage}
                </Alert>
              )}

              {/* Social Quick Sign-Up */}
              <Row className="g-2 mb-3">
                {socialRegisterProviders.map((provider) => (
                  <Col key={provider.id} xs={6}>
                    <Button
                      variant={provider.variant}
                      className="w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 py-2 btn-sm fw-medium border-secondary border-opacity-50"
                      onClick={() => handleSocialRegister(provider.name)}
                    >
                      <span>{provider.icon}</span>
                      <span>Sign up with {provider.name}</span>
                    </Button>
                  </Col>
                ))}
              </Row>

              <div className="d-flex align-items-center gap-3 my-3">
                <hr className="flex-grow-1 border-secondary border-opacity-25 my-0" />
                <span className="text-secondary small text-uppercase" style={{ fontSize: '0.75rem' }}>or register with email</span>
                <hr className="flex-grow-1 border-secondary border-opacity-25 my-0" />
              </div>

              {/* Account Form */}
              <Form onSubmit={handleRegisterSubmit}>
                
                {/* Full Name */}
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-semibold">Full Legal Name</Form.Label>
                  <InputGroup size="sm" className="rounded-3 overflow-hidden bg-dark border border-secondary border-opacity-50">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">👤</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="e.g. Alex Henderson"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent text-white border-0 shadow-none ps-2 py-2 small"
                    />
                  </InputGroup>
                </Form.Group>

                {/* Email Address */}
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-semibold">Email Address</Form.Label>
                  <InputGroup size="sm" className="rounded-3 overflow-hidden bg-dark border border-secondary border-opacity-50">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">✉️</InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent text-white border-0 shadow-none ps-2 py-2 small"
                    />
                  </InputGroup>
                </Form.Group>

                {/* Preferred Track Selector */}
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-semibold">Primary Learning Track</Form.Label>
                  <Form.Select
                    size="sm"
                    name="learningTrack"
                    value={formData.learningTrack}
                    onChange={handleInputChange}
                    className="bg-dark text-white border-secondary border-opacity-50 rounded-3 shadow-none py-2 small"
                  >
                    {learningTracks.map((track, idx) => (
                      <option key={idx} value={track}>{track}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-2">
                  <Form.Label className="small text-secondary fw-semibold">Create Password</Form.Label>
                  <InputGroup size="sm" className="rounded-3 overflow-hidden bg-dark border border-secondary border-opacity-50">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">🔒</InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="At least 8 characters"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent text-white border-0 shadow-none ps-2 py-2 small"
                    />
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-secondary border-0 pe-3 shadow-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '🙈'}
                    </Button>
                  </InputGroup>
                </Form.Group>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <small className="text-secondary" style={{ fontSize: '0.75rem' }}>Password Strength:</small>
                      <small className={`text-${getStrengthVariant()} fw-bold`} style={{ fontSize: '0.75rem' }}>
                        {passwordStrength <= 25 && 'Weak'}
                        {passwordStrength > 25 && passwordStrength <= 50 && 'Fair'}
                        {passwordStrength > 50 && passwordStrength <= 75 && 'Good'}
                        {passwordStrength > 75 && 'Strong'}
                      </small>
                    </div>
                    <ProgressBar variant={getStrengthVariant()} now={passwordStrength} style={{ height: '5px' }} />
                  </div>
                )}

                {/* Confirm Password */}
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-semibold">Confirm Password</Form.Label>
                  <InputGroup size="sm" className="rounded-3 overflow-hidden bg-dark border border-secondary border-opacity-50">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">🛡️</InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Repeat your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent text-white border-0 shadow-none ps-2 py-2 small"
                    />
                  </InputGroup>
                </Form.Group>

                {/* Terms Agreement Checkbox */}
                <div className="mb-4">
                  <Form.Check
                    type="checkbox"
                    id="termsCheckbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    label={
                      <span className="small text-secondary">
                        I agree to the{' '}
                        <Link to="/terms" className="text-info text-decoration-none">Terms of Service</Link>{' '}
                        and acknowledge the{' '}
                        <Link to="/privacy" className="text-info text-decoration-none">Privacy Policy</Link>.
                      </span>
                    }
                  />
                </div>

                {/* Submit Action */}
                <Button
                  variant="info"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-100 rounded-pill fw-bold text-dark shadow-sm py-2"
                >
                  {isLoading ? 'Creating Account...' : 'Create Free Student Account'}
                </Button>
              </Form>

              <p className="text-secondary small text-center mt-4 mb-0" style={{ fontSize: '0.75rem' }}>
                Protected by reCAPTCHA Enterprise. No payment information needed for starter access.
              </p>

            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Register;