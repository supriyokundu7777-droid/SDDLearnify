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
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

import {
  validPromoCodes,
  recommendedAddOns,
  cartTrustSignals
} from '../../user/data/Cart';
import { useApp } from '../../context/AppContext';

const Cart = () => {
  const { cart: cartItems, updateCartQuantity: handleUpdateQuantity, removeFromCart: handleRemoveItem, addToCart, clearCart } = useApp();
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0.15);
  const [couponStatus, setCouponStatus] = useState({ msg: 'Default promo code LEARN2026 active (15% OFF)', type: 'success' });

  // Add an add-on item directly to cart
  const handleAddAddOn = (addon) => {
    addToCart({
      id: addon.id,
      title: addon.title,
      category: 'Add-On Special',
      type: 'Course Addon',
      price: addon.price,
      originalPrice: addon.originalPrice,
      image: addon.image,
      instructor: 'Learnify',
      badge: 'Cart Offer'
    });
  };

  // Apply Coupon Logic
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const cleanCode = couponCode.trim().toUpperCase();
    if (validPromoCodes[cleanCode]) {
      const discountRate = validPromoCodes[cleanCode];
      setAppliedDiscount(discountRate);
      setCouponStatus({
        msg: `🎉 Code '${cleanCode}' applied! ${(discountRate * 100).toFixed(0)}% off your order.`,
        type: 'success'
      });
    } else {
      setAppliedDiscount(0);
      setCouponStatus({
        msg: 'Invalid coupon code. Try LEARN2026 or STUDENT30.',
        type: 'danger'
      });
    }
  };

  // Financial calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const estimatedTax = (subtotal - discountAmount) * 0.05; // 5% standard tax
  const grandTotal = subtotal - discountAmount + estimatedTax;

  return (
    <div className="cart-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-4">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <Link to="/shop" className="text-secondary text-decoration-none hover-text-white">Shop</Link>
          <span>/</span>
          <span className="text-info fw-medium">Shopping Cart</span>
        </div>

        <div className="mb-4">
          <h1 className="h2 fw-bold text-white mb-1">Your Shopping Cart</h1>
          <p className="text-secondary small mb-0">
            Review your selected courses, books, and development kits before checkout.
          </p>
        </div>

        {cartItems.length > 0 ? (
          <Row className="g-4">
            
            {/* === LEFT COLUMN: ITEMS TABLE & PROMO === */}
            <Col lg={8}>
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 overflow-hidden mb-4 shadow">
                <Table hover responsive variant="dark" className="align-middle mb-0">
                  <thead className="bg-black bg-opacity-40 border-bottom border-secondary border-opacity-25 text-secondary small text-uppercase">
                    <tr>
                      <th className="py-3 ps-4" style={{ minWidth: '260px' }}>Item Details</th>
                      <th className="py-3 text-center" style={{ minWidth: '100px' }}>Price</th>
                      <th className="py-3 text-center" style={{ minWidth: '120px' }}>Quantity</th>
                      <th className="py-3 text-center" style={{ minWidth: '100px' }}>Total</th>
                      <th className="py-3 text-end pe-4" style={{ width: '60px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-secondary border-opacity-10">
                        {/* Title & Thumbnail */}
                        <td className="ps-4 py-3">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="rounded-3 object-fit-cover shadow-sm"
                              style={{ width: '65px', height: '65px' }}
                            />
                            <div>
                              <Badge bg="secondary" className="bg-opacity-25 text-info border border-secondary border-opacity-50 small mb-1">
                                {item.badge}
                              </Badge>
                              <h6 className="fw-semibold text-white mb-0 fs-6 lh-sm">
                                {item.title}
                              </h6>
                              <small className="text-secondary">Instructor / Dept: {item.instructor}</small>
                            </div>
                          </div>
                        </td>

                        {/* Unit Price */}
                        <td className="text-center py-3">
                          <span className="fw-medium text-white">₹{item.price.toLocaleString('en-IN')}</span>
                          <small className="text-secondary d-block text-decoration-line-through">
                            ₹{item.originalPrice.toLocaleString('en-IN')}
                          </small>
                        </td>

                        {/* Quantity Counter */}
                        <td className="text-center py-3">
                          <div className="d-inline-flex align-items-center rounded-pill bg-black bg-opacity-40 border border-secondary border-opacity-50 p-1">
                            <Button
                              variant="transparent"
                              size="sm"
                              className="text-white border-0 px-2 py-0 fw-bold"
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                            >
                              -
                            </Button>
                            <span className="px-2 small fw-bold text-info" style={{ minWidth: '24px' }}>
                              {item.quantity}
                            </span>
                            <Button
                              variant="transparent"
                              size="sm"
                              className="text-white border-0 px-2 py-0 fw-bold"
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                            >
                              +
                            </Button>
                          </div>
                        </td>

                        {/* Line Total */}
                        <td className="text-center py-3 fw-bold text-info">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </td>

                        {/* Remove Action */}
                        <td className="text-end pe-4 py-3">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="rounded-circle px-2 py-1 border-0"
                            onClick={() => handleRemoveItem(item.id)}
                            title="Remove Item"
                          >
                            🗑️
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>

              {/* Promo Code & Action Strip */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 mb-4">
                <Form onSubmit={handleApplyCoupon} className="d-flex gap-2 flex-grow-1" style={{ maxWidth: '420px' }}>
                  <InputGroup size="sm" className="bg-dark border border-secondary border-opacity-50 rounded-pill overflow-hidden">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">🏷️</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Coupon Code: LEARN2026"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="bg-transparent text-white border-0 shadow-none ps-2 py-2 small"
                    />
                    <Button variant="info" type="submit" className="rounded-pill px-4 fw-bold text-dark">
                      Apply
                    </Button>
                  </InputGroup>
                </Form>

                <div className="d-flex gap-2">
                  <Button as={Link} to="/shop" variant="outline-light" size="sm" className="rounded-pill px-3 py-2 fw-medium">
                    Continue Shopping
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="rounded-pill px-3 py-2 fw-medium"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>

              {couponStatus.msg && (
                <Alert variant={couponStatus.type} className="rounded-3 py-2 px-3 small mb-4 border-0">
                  {couponStatus.msg}
                </Alert>
              )}

              {/* Recommended Frequently Bought Together */}
              <div className="pt-2">
                <h5 className="fw-bold text-white mb-3">Recommended Add-Ons for Your Order</h5>
                <Row className="g-3">
                  {recommendedAddOns.map((item) => (
                    <Col md={6} key={item.id}>
                      <div className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                        <div className="d-flex align-items-center gap-3 overflow-hidden">
                          <img src={item.image} alt={item.title} className="rounded-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                          <div className="overflow-hidden">
                            <h6 className="fw-semibold text-white small mb-0 text-truncate">{item.title}</h6>
                            <span className="text-info fw-bold small">₹{item.price.toLocaleString('en-IN')}</span>
                            <span className="text-secondary small text-decoration-line-through ms-2">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline-info"
                          size="sm"
                          className="rounded-pill px-3 ms-2 fw-bold text-nowrap"
                          onClick={() => handleAddAddOn(item)}
                        >
                          + Add
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

            </Col>

            {/* === RIGHT COLUMN: ORDER SUMMARY SIDEBAR === */}
            <Col lg={4}>
              <div className="sticky-lg-top" style={{ top: '90px' }}>
                <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 p-4 shadow-lg">
                  <h5 className="fw-bold text-white mb-3">Order Summary</h5>
                  
                  <div className="d-flex flex-column gap-2 small text-secondary pb-3 border-bottom border-secondary border-opacity-25">
                    <div className="d-flex justify-content-between">
                      <span>Items Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)}):</span>
                      <span className="text-white fw-medium">₹{Math.round(subtotal).toLocaleString('en-IN')}</span>
                    </div>

                    {appliedDiscount > 0 && (
                      <div className="d-flex justify-content-between text-success">
                        <span>Coupon Savings ({(appliedDiscount * 100).toFixed(0)}%):</span>
                        <span className="fw-semibold">-₹{Math.round(discountAmount).toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="d-flex justify-content-between">
                      <span>Estimated Taxes (5%):</span>
                      <span className="text-white fw-medium">₹{Math.round(estimatedTax).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="d-flex justify-content-between align-items-baseline pt-3 mb-4">
                    <span className="fs-5 fw-bold text-white">Grand Total:</span>
                    <span className="display-6 fw-bold text-info">₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    as={Link}
                    to="/pricing-plan"
                    variant="info"
                    size="lg"
                    className="w-100 rounded-pill fw-bold text-dark shadow-sm py-3 mb-3"
                  >
                    Proceed to Secure Checkout &rarr;
                  </Button>

                  <div className="text-center small text-secondary mb-4" style={{ fontSize: '0.78rem' }}>
                    Instant access link and invoice sent directly to your registered account email.
                  </div>

                  {/* Trust Signals */}
                  <div className="d-flex flex-column gap-2 pt-3 border-top border-secondary border-opacity-25">
                    {cartTrustSignals.map((signal, idx) => (
                      <div key={idx} className="d-flex align-items-center gap-2 small text-secondary">
                        <span>{signal.icon}</span>
                        <div>
                          <strong className="text-light d-block" style={{ fontSize: '0.8rem' }}>{signal.title}</strong>
                          <span style={{ fontSize: '0.75rem' }}>{signal.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </Card>
              </div>
            </Col>

          </Row>
        ) : (
          /* Empty Cart State */
          <div className="text-center py-5">
            <div className="fs-1 mb-3">🛒</div>
            <h3 className="fw-bold text-white mb-2">Your Shopping Cart is Empty</h3>
            <p className="text-secondary small mb-4 mx-auto" style={{ maxWidth: '420px' }}>
              Looks like you haven't added any courses, books, or development gear yet. Explore our catalog to start learning.
            </p>
            <Button as={Link} to="/shop" variant="info" className="rounded-pill px-4 py-2 fw-bold text-dark shadow-sm">
              Explore Store & Catalog
            </Button>
          </div>
        )}

      </Container>
    </div>
  );
};

export default Cart;