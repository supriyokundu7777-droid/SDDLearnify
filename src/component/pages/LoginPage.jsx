import React, { useState, useEffect } from 'react';
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
import { useApp } from '../../context/AppContext';
import { apiLogin } from '../../services/api';

import {
  socialLoginProviders,
  loginHighlights,
  trustBadges
} from '../../user/data/LoginPage';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, logout, user, isAuthenticated } = useApp();

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const remembered = localStorage.getItem('learnify_remembered_email');
    if (remembered) {
      setFormData((prev) => ({ ...prev, email: remembered, rememberMe: true }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Basic Validation
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in both your email and password.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiLogin({
        email: formData.email,
        password: formData.password
      });

      setIsLoading(false);
      login({
        ...response.user,
        token: response.token
      });

      if (formData.rememberMe) {
        localStorage.setItem('learnify_remembered_email', formData.email);
      } else {
        localStorage.removeItem('learnify_remembered_email');
      }

      setSuccessMessage('🎉 Login authenticated with MongoDB! Redirecting...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 700);
    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Invalid email or password.');
    }
  };

  const handleSocialLogin = (providerName, defaultName, defaultEmail) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login({
        email: defaultEmail,
        name: defaultName,
        role: 'Pro Student'
      });
      setSuccessMessage(`Signed in via ${providerName}! Redirecting...`);
      setTimeout(() => {
        navigate('/dashboard');
      }, 700);
    }, 500);
  };

  const handleDemoLogin = (email, name, role) => {
    setFormData({
      email,
      password: 'Password@2026',
      rememberMe: true
    });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login({ email, name, role });
      setSuccessMessage(`Logged in as ${name} (${role})! Redirecting...`);
      setTimeout(() => {
        navigate('/dashboard');
      }, 700);
    }, 400);
  };

  return (
    <div className="login-page bg-dark text-white min-vh-100 d-flex align-items-center py-5">
      <Container fluid="xxl">
        <Row className="justify-content-center align-items-center g-4">
          
          {/* === LEFT COLUMN: BRAND HIGHLIGHTS & TRUST SIGNALS === */}
          <Col lg={5} className="d-none d-lg-block pe-lg-5">
            <div className="mb-4">
              <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill mb-3">
                Welcome Back to Learnify
              </Badge>
              <h1 className="display-5 fw-bold lh-sm text-white mb-3">
                Continue Building Your <span className="text-info">Tech Career</span>
              </h1>
              <p className="text-secondary fs-6 lead">
                Access your code sandboxes, capstone projects, and weekly live mentor office hours with one click.
              </p>
            </div>

            {/* Highlights List */}
            <div className="d-flex flex-column gap-3 mb-4">
              {loginHighlights.map((item) => (
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
              {trustBadges.map((badge, idx) => (
                <span key={idx} className="badge bg-black bg-opacity-40 border border-secondary border-opacity-25 text-light fw-normal py-1 px-2 rounded-pill">
                  🔒 {badge}
                </span>
              ))}
            </div>
          </Col>

          {/* === RIGHT COLUMN: LOGIN FORM CARD === */}
          <Col xs={12} sm={10} md={8} lg={5}>
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-sm-5 text-white shadow-lg">
              
              <div className="text-center mb-3">
                <h3 className="fw-bold text-white mb-1">Sign In</h3>
                <p className="text-secondary small mb-0">
                  Don't have an account yet?{' '}
                  <Link to="/register" className="text-info text-decoration-none fw-semibold">
                    Create an Account
                  </Link>
                </p>
              </div>

              {/* Active Session Notice */}
              {isAuthenticated && (
                <div className="p-3 mb-3 rounded-4 bg-info bg-opacity-10 border border-info border-opacity-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
                  <div>
                    <div className="small text-info fw-bold">Active Session Detected</div>
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

              {/* 1-Click Demo Accounts */}
              <div className="bg-dark bg-opacity-50 border border-secondary border-opacity-25 rounded-3 p-2 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <small className="text-secondary fw-semibold">Quick 1-Click Demo Accounts:</small>
                  <span className="badge bg-secondary bg-opacity-25 text-info" style={{ fontSize: '0.65rem' }}>Auto-Fill & Login</span>
                </div>
                <div className="d-flex gap-2">
                  <Button 
                    variant="outline-info" 
                    size="sm" 
                    className="flex-fill rounded-pill py-1 small" 
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => handleDemoLogin('kundusupriyo@gmail.com', 'Supriyo Kundu', 'Pro Student')}
                  >
                    👤 Student Demo
                  </Button>
                  <Button 
                    variant="outline-warning" 
                    size="sm" 
                    className="flex-fill rounded-pill py-1 small" 
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => handleDemoLogin('alex.morrison@learnify.io', 'Alex Morrison', 'Staff Instructor')}
                  >
                    🎓 Mentor Demo
                  </Button>
                </div>
              </div>

              {/* Social Login Options */}
              <Row className="g-2 mb-3">
                {socialLoginProviders.map((provider) => (
                  <Col key={provider.id} xs={6}>
                    <Button
                      variant={provider.variant}
                      className="w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 py-2 btn-sm fw-medium border-secondary border-opacity-50"
                      onClick={() => handleSocialLogin(
                        provider.name,
                        `${provider.name} Learner`,
                        `${provider.name.toLowerCase()}.learner@learnify.io`
                      )}
                    >
                      <span>{provider.icon}</span>
                      <span>{provider.name}</span>
                    </Button>
                  </Col>
                ))}
              </Row>

              <div className="d-flex align-items-center gap-3 my-3">
                <hr className="flex-grow-1 border-secondary border-opacity-25 my-0" />
                <span className="text-secondary small text-uppercase" style={{ fontSize: '0.75rem' }}>or sign in with email</span>
                <hr className="flex-grow-1 border-secondary border-opacity-25 my-0" />
              </div>

              {/* Authentication Form */}
              <Form onSubmit={handleLoginSubmit}>
                {/* Email Address */}
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-semibold">Email Address</Form.Label>
                  <InputGroup size="sm" className="rounded-3 overflow-hidden bg-dark border border-secondary border-opacity-50">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">
                      ✉️
                    </InputGroup.Text>
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

                {/* Password Field with Show/Hide Toggle */}
                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <Form.Label className="small text-secondary fw-semibold mb-0">Password</Form.Label>
                    <Link to="/forgot-password" className="text-info text-decoration-none small" style={{ fontSize: '0.8rem' }}>
                      Forgot Password?
                    </Link>
                  </div>
                  <InputGroup size="sm" className="rounded-3 overflow-hidden bg-dark border border-secondary border-opacity-50">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">
                      🔒
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Enter your password"
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

                {/* Remember Me Checkbox */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check
                    type="checkbox"
                    id="rememberMeCheckbox"
                    name="rememberMe"
                    label="Remember me for 30 days"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="small text-secondary"
                  />
                </div>

                {/* Submit CTA */}
                <Button
                  variant="info"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-100 rounded-pill fw-bold text-dark shadow-sm py-2"
                >
                  {isLoading ? 'Signing In...' : 'Sign In to Account'}
                </Button>
              </Form>

              {/* Bottom Policy Notice */}
              <p className="text-secondary small text-center mt-4 mb-0" style={{ fontSize: '0.75rem' }}>
                By signing in, you agree to our{' '}
                <Link to="/terms" className="text-secondary text-decoration-underline">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-secondary text-decoration-underline">Privacy Policy</Link>.
              </p>

            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;