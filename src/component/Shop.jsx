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
import Modal from 'react-bootstrap/Modal';

import { shopCategories, shopSortOptions, shopProductsData, shopGuarantees } from "../user/data/Shop";
import { useApp } from "../context/AppContext";

const Shop = () => {
  const { addToCart } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  // Add To Cart Handler
  const handleAddToCart = (product) => {
    addToCart(product);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setShowCartModal(true);
  };

  // Cart Qty Modifiers
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Filtering & Sorting Logic
  const filteredProducts = shopProductsData
    .filter((prod) => {
      const matchCategory = selectedCategory === 'All Items' || prod.category === selectedCategory;
      const matchSearch =
        prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return b.reviews - a.reviews;
      return a.id - b.id;
    });

  return (
    <div className="shop-page bg-dark text-white min-vh-100">
      
      {/* 1. HERO BREADCRUMB & HEADER */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-2 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              {/* Breadcrumb */}
              <div className="d-flex justify-content-center align-items-center gap-2 small text-secondary mb-3">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <span className="text-info fw-medium">Store</span>
                <span>/</span>
                <span className="text-light">Developer Shop</span>
              </div>

              <Badge bg="info" className="text-dark fw-bold mb-3 px-3 py-2 rounded-pill">
                Official Developer Store & Gear
              </Badge>
              <h1 className="display-5 fw-bold mb-3 text-white">
                Gear Up With <span className="text-info">Handbooks, Kits & Swag</span>
              </h1>
              <p className="lead text-secondary fs-6 mb-4 mx-auto" style={{ maxWidth: '640px' }}>
                Curated technical books, IoT hardware boards, productivity desk accessories, and official engineering apparel.
              </p>

              {/* Instant Search Bar */}
              <div className="mx-auto" style={{ maxWidth: '520px' }}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-50 border border-secondary border-opacity-50 shadow">
                  <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">🔍</InputGroup.Text>
                  <Form.Control
                    type="search"
                    placeholder="Search books, kits, hoodies, desk mats..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white border-0 shadow-none fs-6 ps-2"
                  />
                  <Button variant="info" className="rounded-pill px-4 fw-bold text-dark">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. FILTER TOOLBAR & CATEGORY PILLS */}
      <section className="py-3 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <Row className="g-3 align-items-center justify-content-between">
            {/* Category Pills */}
            <Col lg={9}>
              <div className="d-flex flex-wrap gap-2">
                {shopCategories.map((cat, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant={selectedCategory === cat ? 'info' : 'outline-secondary'}
                    className="rounded-pill px-3 fw-medium"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </Col>

            {/* Sort & Cart Button */}
            <Col lg={3} className="d-flex align-items-center justify-content-lg-end gap-2">
              <Form.Select
                size="sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
                style={{ maxWidth: '170px' }}
              >
                {shopSortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Form.Select>

              <Button
                variant="outline-info"
                size="sm"
                onClick={() => setShowCartModal(true)}
                className="rounded-pill px-3 fw-bold d-flex align-items-center gap-2 text-nowrap"
              >
                <span>🛒 Cart</span>
                <Badge bg="info" className="text-dark rounded-circle">
                  {cart.reduce((total, i) => total + i.quantity, 0)}
                </Badge>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. PRODUCTS GRID */}
      <section className="py-5">
        <Container fluid="xxl">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-secondary small">
              Showing <strong>{filteredProducts.length}</strong> Products
            </span>
            {(selectedCategory !== 'All Items' || searchQuery !== '') && (
              <button
                onClick={() => { setSelectedCategory('All Items'); setSearchQuery(''); }}
                className="btn btn-sm btn-link text-info text-decoration-none p-0"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <Row className="g-4">
              {filteredProducts.map((prod) => (
                <Col key={prod.id} xs={12} sm={6} lg={3}>
                  <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm d-flex flex-column">
                    
                    {/* Thumbnail & Badges */}
                    <div className="position-relative overflow-hidden">
                      <Card.Img
                        variant="top"
                        src={prod.image}
                        style={{ height: '210px', objectFit: 'cover' }}
                      />
                      <Badge bg="danger" className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-1 small">
                        {prod.badge}
                      </Badge>
                      <Badge bg="dark" className="position-absolute bottom-0 start-0 m-2 bg-opacity-75 text-light border border-secondary border-opacity-50 small">
                        {prod.format}
                      </Badge>
                    </div>

                    <Card.Body className="d-flex flex-column p-3">
                      <span className="text-info small fw-bold text-uppercase mb-1" style={{ fontSize: '0.75rem' }}>
                        {prod.category}
                      </span>
                      
                      <Card.Title className="fw-bold fs-6 mb-2 lh-base">
                        {prod.title}
                      </Card.Title>

                      <p className="text-secondary small mb-3 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                        {prod.description}
                      </p>

                      {/* Ratings Strip */}
                      <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
                        <span className="text-warning fw-bold">★ {prod.rating}</span>
                        <span>({prod.reviews} reviews)</span>
                      </div>

                      {/* Price & Action */}
                      <div className="mt-auto pt-2 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fw-bold fs-5 text-white">₹{prod.price.toLocaleString('en-IN')}</span>
                          <span className="text-secondary text-decoration-line-through ms-2 small">
                            ₹{prod.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <Button
                          variant="info"
                          size="sm"
                          onClick={() => handleAddToCart(prod)}
                          className="rounded-pill px-3 fw-bold text-dark shadow-sm"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>

                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <h4 className="fw-bold text-white mb-2">No Items Found</h4>
              <p className="text-secondary mb-4">Try choosing another category or clearing your search keywords.</p>
              <Button
                variant="outline-info"
                size="sm"
                className="rounded-pill px-4"
                onClick={() => { setSelectedCategory('All Items'); setSearchQuery(''); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. SHOP GUARANTEES SECTION */}
      <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #111317 0%, #171a1f 100%)' }}>
        <Container fluid="xxl" className="py-3">
          <Row className="g-4">
            {shopGuarantees.map((item) => (
              <Col key={item.id} xs={12} sm={6} lg={3}>
                <div className="p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 h-100 text-center">
                  <div className="fs-1 mb-2">{item.icon}</div>
                  <h6 className="fw-bold text-white mb-2">{item.title}</h6>
                  <p className="text-secondary small mb-0">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. SHOPPING CART MODAL */}
      <Modal show={showCartModal} onHide={() => setShowCartModal(false)} centered contentClassName="bg-dark text-white border-secondary">
        <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
          <Modal.Title className="fs-6">Your Shopping Cart ({cart.reduce((t, i) => t + i.quantity, 0)})</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          {cart.length > 0 ? (
            <div>
              <div className="d-flex flex-column gap-3 mb-4" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                {cart.map((item) => (
                  <div key={item.id} className="d-flex align-items-center gap-3 p-2 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                    <img src={item.image} alt={item.title} className="rounded-2" style={{ width: '55px', height: '55px', objectFit: 'cover' }} />
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="fw-semibold text-white small mb-0 text-truncate">{item.title}</h6>
                      <small className="text-info">₹{item.price.toLocaleString('en-IN')} each</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Button size="sm" variant="outline-secondary" className="px-2 py-0 text-light" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                      <span className="small fw-bold">{item.quantity}</span>
                      <Button size="sm" variant="outline-secondary" className="px-2 py-0 text-light" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total & Checkout */}
              <div className="pt-3 border-top border-secondary border-opacity-25">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-secondary">Subtotal</span>
                  <span className="fw-bold fs-5 text-white">₹{Math.round(cartTotalPrice).toLocaleString('en-IN')}</span>
                </div>
                <Button as={Link} to="/pricing-plan" variant="info" className="w-100 rounded-pill fw-bold text-dark shadow-sm">
                  Proceed to Secure Checkout
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <span className="fs-1 d-block mb-2">🛒</span>
              <p className="text-secondary mb-0">Your cart is currently empty.</p>
            </div>
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default Shop;