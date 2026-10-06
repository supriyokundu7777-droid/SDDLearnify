import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import {
  checkoutOrderItems,
  checkoutCountries,
  checkoutPaymentMethods,
  checkoutTrustBadges
} from '../../user/data/Checkout';
import { useApp } from '../../context/AppContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart, enrollCourse, showToast, user, appliedPromo } = useApp();

  // Active items from cart or fallback to initial template
  const activeOrderItems = cart && cart.length > 0 ? cart : checkoutOrderItems;

  // Form State
  const [billingInfo, setBillingInfo] = useState({
    firstName: user?.name ? user.name.split(' ')[0] : 'Supriyo',
    lastName: user?.name ? user.name.split(' ').slice(1).join(' ') : 'Kundu',
    email: user?.email || 'kundusupriyo@gmail.com',
    phone: '+1 (555) 349-2104',
    country: checkoutCountries[0],
    address: '42 Silicon Boulevard, Suite 300',
    city: 'San Francisco',
    postalCode: '94107',
    companyName: '',
    taxId: '',
    orderNotes: '',
    createAccount: true
  });

  // Payment Selection State
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '884',
    nameOnCard: user?.name || 'Supriyo Kundu'
  });

  // Financial & Order Reference States
  const discountRate = 0.15; // default active 15% discount
  const [orderReferenceId, setOrderReferenceId] = useState('LF-ORD-894102');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formError, setFormError] = useState('');

  // Handle Input Changes
  const handleBillingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Financial Calculations
  const subtotal = activeOrderItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const discountAmount = subtotal * discountRate;
  const estimatedTax = (subtotal - discountAmount) * 0.05;
  const grandTotal = subtotal - discountAmount + estimatedTax;

  // Checkout Submit
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setFormError('');

    if (!billingInfo.firstName || !billingInfo.lastName || !billingInfo.email || !billingInfo.address) {
      setFormError('Please fill in all mandatory billing fields.');
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setIsProcessing(true);

    // Simulate Payment Gateway API Request
    setTimeout(() => {
      setIsProcessing(false);
      setOrderReferenceId(`LF-ORD-${Math.floor(100000 + Math.random() * 900000)}`);
      setShowSuccessModal(true);
      // Auto-enroll in any purchased courses
      activeOrderItems.forEach((item) => {
        enrollCourse({
          id: item.id,
          title: item.title,
          category: item.category || 'Engineering',
          image: item.image,
          instructor: item.instructor || 'Lead Technical Mentor'
        });
      });
      clearCart();
      showToast('Order Confirmed!', 'All curriculums have been activated in your Dashboard.', 'success');
    }, 1500);
  };

  return (
    <div className="checkout-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-4">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <Link to="/shop" className="text-secondary text-decoration-none hover-text-white">Shop</Link>
          <span>/</span>
          <Link to="/cart" className="text-secondary text-decoration-none hover-text-white">Cart</Link>
          <span>/</span>
          <span className="text-info fw-medium">Checkout</span>
        </div>

        <div className="mb-4">
          <h1 className="h2 fw-bold text-white mb-1">Finalize Your Order</h1>
          <p className="text-secondary small mb-0">
            Enter your billing address and choose your preferred secure payment method.
          </p>
        </div>

        {formError && (
          <Alert variant="danger" className="py-2 px-3 small rounded-3 border-0 mb-4">
            ⚠️ {formError}
          </Alert>
        )}

        {/* 2. MAIN CHECKOUT FORM */}
        <Form onSubmit={handlePlaceOrder}>
          <Row className="g-4">
            
            {/* === LEFT COLUMN: BILLING & PAYMENT === */}
            <Col lg={7}>
              
              {/* Billing Information Card */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-4 text-white shadow-sm">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <span>📍</span> Billing Details
                </h5>

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">First Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="e.g. Supriyo"
                        value={billingInfo.firstName}
                        onChange={handleBillingChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Last Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="e.g. Kundu"
                        value={billingInfo.lastName}
                        onChange={handleBillingChange}
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
                        value={billingInfo.email}
                        onChange={handleBillingChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={billingInfo.phone}
                        onChange={handleBillingChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Country / Region *</Form.Label>
                      <Form.Select
                        name="country"
                        value={billingInfo.country}
                        onChange={handleBillingChange}
                        className="bg-dark text-white border-secondary border-opacity-50 rounded-3 shadow-none small"
                      >
                        {checkoutCountries.map((c, idx) => (
                          <option key={idx} value={c}>{c}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Street Address *</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        placeholder="Apartment, suite, unit, or street address"
                        value={billingInfo.address}
                        onChange={handleBillingChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Town / City *</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        placeholder="e.g. San Francisco"
                        value={billingInfo.city}
                        onChange={handleBillingChange}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Postal / ZIP Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="postalCode"
                        placeholder="e.g. 94103"
                        value={billingInfo.postalCode}
                        onChange={handleBillingChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Company Name (Optional)</Form.Label>
                      <Form.Control
                        type="text"
                        name="companyName"
                        placeholder="For corporate VAT invoice"
                        value={billingInfo.companyName}
                        onChange={handleBillingChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">VAT / Tax ID (Optional)</Form.Label>
                      <Form.Control
                        type="text"
                        name="taxId"
                        placeholder="e.g. US-123456789"
                        value={billingInfo.taxId}
                        onChange={handleBillingChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-semibold">Order Notes / Instructions</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="orderNotes"
                        placeholder="Notes about your order or hardware delivery instructions..."
                        value={billingInfo.orderNotes}
                        onChange={handleBillingChange}
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Check
                      type="checkbox"
                      id="createAccountCheck"
                      name="createAccount"
                      label="Create a Learnify student account using these details"
                      checked={billingInfo.createAccount}
                      onChange={handleBillingChange}
                      className="small text-secondary"
                    />
                  </Col>
                </Row>
              </Card>

              {/* Payment Methods Card */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm">
                <h5 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
                  <span>💳</span> Select Payment Gateway
                </h5>

                <div className="d-flex flex-column gap-3 mb-4">
                  {checkoutPaymentMethods.map((pm) => (
                    <div
                      key={pm.id}
                      onClick={() => setSelectedPayment(pm.id)}
                      className={`p-3 rounded-4 border cursor-pointer transition-all d-flex align-items-center gap-3 ${
                        selectedPayment === pm.id
                          ? 'border-info bg-black bg-opacity-40 shadow'
                          : 'border-secondary border-opacity-25 bg-secondary bg-opacity-10'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <Form.Check
                        type="radio"
                        name="paymentMethodRadio"
                        checked={selectedPayment === pm.id}
                        onChange={() => setSelectedPayment(pm.id)}
                        className="fs-5"
                      />
                      <div className="fs-3">{pm.icon}</div>
                      <div className="flex-grow-1">
                        <h6 className="fw-bold text-white mb-0">{pm.title}</h6>
                        <small className="text-secondary">{pm.subtitle}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Credit Card Inline Form */}
                {selectedPayment === 'card' && (
                  <div className="p-3 rounded-4 bg-black bg-opacity-30 border border-secondary border-opacity-25">
                    <Row className="g-3">
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small text-secondary fw-semibold">Card Number</Form.Label>
                          <InputGroup size="sm" className="bg-dark border border-secondary border-opacity-50 rounded-3 overflow-hidden">
                            <InputGroup.Text className="bg-transparent border-0 text-secondary">💳</InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="cardNumber"
                              placeholder="4242 •••• •••• 4242"
                              value={cardDetails.cardNumber}
                              onChange={handleCardChange}
                              className="bg-transparent text-white border-0 shadow-none ps-1 small"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="small text-secondary fw-semibold">Expiration Date</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            name="cardExpiry"
                            placeholder="MM / YY"
                            value={cardDetails.cardExpiry}
                            onChange={handleCardChange}
                            className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="small text-secondary fw-semibold">CVC / Security Code</Form.Label>
                          <Form.Control
                            size="sm"
                            type="password"
                            maxLength={4}
                            name="cardCvc"
                            placeholder="CVC"
                            value={cardDetails.cardCvc}
                            onChange={handleCardChange}
                            className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small text-secondary fw-semibold">Cardholder Name</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            name="nameOnCard"
                            placeholder="Name as it appears on your card"
                            value={cardDetails.nameOnCard}
                            onChange={handleCardChange}
                            className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}

                {selectedPayment === 'paypal' && (
                  <div className="p-3 rounded-4 bg-black bg-opacity-30 border border-secondary border-opacity-25 text-center">
                    <p className="small text-secondary mb-0">
                      After clicking "Place Order", you will be redirected to PayPal's secure portal to complete your transaction.
                    </p>
                  </div>
                )}

                {selectedPayment === 'wallet' && (
                  <div className="p-3 rounded-4 bg-black bg-opacity-30 border border-secondary border-opacity-25 text-center">
                    <p className="small text-secondary mb-0">
                      Biometric checkout enabled. Confirm your payment using Face ID, Touch ID, or Google Pay on your device.
                    </p>
                  </div>
                )}

              </Card>

            </Col>

            {/* === RIGHT COLUMN: ORDER SUMMARY & SUBMIT === */}
            <Col lg={5}>
              <div className="sticky-lg-top" style={{ top: '90px' }}>
                <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 p-4 shadow-lg mb-4">
                  <h5 className="fw-bold text-white mb-3">Order Summary</h5>

                  {/* Items List */}
                  <div className="d-flex flex-column gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {checkoutOrderItems.map((item) => (
                      <div key={item.id} className="d-flex align-items-center gap-3">
                        <img src={item.image} alt={item.title} className="rounded-2 object-fit-cover" style={{ width: '50px', height: '50px' }} />
                        <div className="flex-grow-1 overflow-hidden">
                          <h6 className="fw-semibold text-white small mb-0 text-truncate">{item.title}</h6>
                          <small className="text-secondary d-block">{item.type} (x{item.quantity})</small>
                          <Badge bg="secondary" className="bg-opacity-25 text-info border border-secondary border-opacity-50" style={{ fontSize: '0.65rem' }}>
                            {item.badge}
                          </Badge>
                        </div>
                        <span className="fw-bold text-white small">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>

                  {/* Financial Breakdown */}
                  <div className="d-flex flex-column gap-2 small text-secondary pb-3 border-bottom border-secondary border-opacity-25">
                    <div className="d-flex justify-content-between">
                      <span>Items Subtotal:</span>
                      <span className="text-white fw-medium">₹{Math.round(subtotal).toLocaleString('en-IN')}</span>
                    </div>

                    {discountRate > 0 && (
                      <div className="d-flex justify-content-between text-success">
                        <span>Discount Savings ({(discountRate * 100).toFixed(0)}%):</span>
                        <span className="fw-semibold">-₹{Math.round(discountAmount).toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="d-flex justify-content-between">
                      <span>Estimated Tax (5%):</span>
                      <span className="text-white fw-medium">₹{Math.round(estimatedTax).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {appliedPromo && (
                    <small className="text-success d-block my-2">✓ Promo code &ldquo;{appliedPromo.code}&rdquo; applied ({appliedPromo.discountPercent}% OFF)</small>
                  )}

                  {/* Total */}
                  <div className="d-flex justify-content-between align-items-baseline pt-3 mb-4">
                    <span className="fs-5 fw-bold text-white">Total Amount:</span>
                    <span className="display-6 fw-bold text-info">₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="info"
                    type="submit"
                    size="lg"
                    disabled={isProcessing}
                    className="w-100 rounded-pill fw-bold text-dark shadow-sm py-3 mb-3"
                  >
                    {isProcessing ? 'Processing Transaction...' : `Pay ₹${Math.round(grandTotal).toLocaleString('en-IN')} & Place Order`}
                  </Button>

                  <div className="text-center small text-secondary mb-4" style={{ fontSize: '0.78rem' }}>
                    By placing your order, you agree to our <Link to="/terms" className="text-secondary text-decoration-underline">Terms of Service</Link>.
                  </div>

                  {/* Trust Signals */}
                  <div className="d-flex flex-column gap-2 pt-3 border-top border-secondary border-opacity-25">
                    {checkoutTrustBadges.map((badge, idx) => (
                      <div key={idx} className="d-flex align-items-center gap-2 small text-secondary">
                        <span>{badge.icon}</span>
                        <div>
                          <strong className="text-light d-block" style={{ fontSize: '0.8rem' }}>{badge.title}</strong>
                          <span style={{ fontSize: '0.75rem' }}>{badge.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </Card>
              </div>
            </Col>

          </Row>
        </Form>

        {/* 3. ORDER CONFIRMATION MODAL */}
        <Modal show={showSuccessModal} onHide={() => navigate('/home-one')} centered contentClassName="bg-dark text-white border-secondary">
          <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
            <Modal.Title className="fs-5">🎉 Order Confirmed!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4 text-center">
            <div className="fs-1 mb-3">✅</div>
            <h4 className="fw-bold text-white mb-2">Thank You For Your Purchase!</h4>
            <p className="text-secondary small mb-3">
              We have processed your payment of <strong className="text-info">₹{Math.round(grandTotal).toLocaleString('en-IN')}</strong>.
              Your course access credentials, GitHub repo invitations, and tax invoice have been dispatched to <strong>{billingInfo.email}</strong>.
            </p>
            <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 small text-secondary mb-4">
              <strong>Order Reference ID:</strong> {orderReferenceId}
            </div>
            <Button as={Link} to="/dashboard" variant="info" className="rounded-pill px-4 fw-bold text-dark w-100">
              Return to Student Dashboard
            </Button>
          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
};

export default Checkout;