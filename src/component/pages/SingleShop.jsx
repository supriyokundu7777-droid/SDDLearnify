import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

import {
  singleProductData,
  productSpecifications,
  productReviews,
  relatedProducts
} from '../../user/data/SingleShop';

const SingleShop = () => {
  const [selectedImage, setSelectedImage] = useState(singleProductData.images[0]);
  const [selectedFormat, setSelectedFormat] = useState(singleProductData.formatsAvailable[0]);
  const [quantity, setQuantity] = useState(1);
  const [showAddedAlert, setShowAddedAlert] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    setShowAddedAlert(true);
    setTimeout(() => setShowAddedAlert(false), 3500);
  };

  return (
    <div className="single-shop-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-4">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <Link to="/shop" className="text-secondary text-decoration-none hover-text-white">Store</Link>
          <span>/</span>
          <span className="text-info fw-medium">{singleProductData.category}</span>
          <span>/</span>
          <span className="text-light text-truncate" style={{ maxWidth: '280px' }}>{singleProductData.title}</span>
        </div>

        {/* Added to Cart Feedback Alert */}
        {showAddedAlert && (
          <Alert variant="success" className="d-flex justify-content-between align-items-center py-3 px-4 rounded-4 mb-4 border-0 shadow">
            <div>
              <strong className="d-block">✓ Added {quantity} item(s) to your cart!</strong>
              <small>Format: {selectedFormat} — Total: ₹{Math.round(singleProductData.price * quantity).toLocaleString('en-IN')}</small>
            </div>
            <Button as={Link} to="/shop" variant="dark" size="sm" className="rounded-pill px-3 fw-bold">
              View Cart
            </Button>
          </Alert>
        )}

        {/* 2. PRODUCT HERO SECTION (GALLERY + DETAILS) */}
        <Row className="g-5 mb-5 align-items-start">
          
          {/* Product Image Gallery Column */}
          <Col lg={6}>
            <div className="position-relative rounded-4 overflow-hidden border border-secondary border-opacity-25 mb-3 bg-black bg-opacity-30 shadow-lg">
              <img
                src={selectedImage}
                alt={singleProductData.title}
                className="w-100 object-fit-cover"
                style={{ height: '420px' }}
              />
              <Badge bg="danger" className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill small">
                {singleProductData.badge}
              </Badge>
              <Badge bg="success" className="position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-pill small">
                {singleProductData.discount}
              </Badge>
            </div>

            {/* Thumbnail Selector */}
            <div className="d-flex gap-3">
              {singleProductData.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-3 overflow-hidden border-2 cursor-pointer ${selectedImage === img ? 'border border-info' : 'border border-secondary border-opacity-25 opacity-75'}`}
                  style={{ width: '90px', height: '70px', cursor: 'pointer' }}
                >
                  <img src={img} alt="thumbnail" className="w-100 h-100 object-fit-cover" />
                </div>
              ))}
            </div>
          </Col>

          {/* Product Purchasing Summary Column */}
          <Col lg={6}>
            <span className="text-info small fw-bold text-uppercase mb-2 d-block">
              {singleProductData.category}
            </span>

            <h1 className="h2 fw-bold text-white mb-2 lh-sm">
              {singleProductData.title}
            </h1>

            {/* Ratings & Meta Strip */}
            <div className="d-flex flex-wrap align-items-center gap-3 small text-secondary mb-3">
              <span className="text-warning fw-bold">★ {singleProductData.rating}</span>
              <span className="text-info">({singleProductData.reviewsCount} customer reviews)</span>
              <span>•</span>
              <span className="text-success fw-semibold">✓ In Stock ({singleProductData.downloadSize})</span>
              <span>•</span>
              <span>SKU: {singleProductData.sku}</span>
            </div>

            <p className="text-secondary small leading-relaxed mb-4">
              {singleProductData.subtitle}
            </p>

            {/* Price Block */}
            <div className="d-flex align-items-baseline gap-2 mb-4 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
              <span className="display-6 fw-bold text-white">₹{singleProductData.price.toLocaleString('en-IN')}</span>
              <span className="text-secondary text-decoration-line-through fs-5">₹{singleProductData.originalPrice.toLocaleString('en-IN')}</span>
              <Badge bg="danger" className="ms-auto rounded-pill px-3 py-1">Save ₹{(singleProductData.originalPrice - singleProductData.price).toLocaleString('en-IN')}</Badge>
            </div>

            {/* Format Selection Option */}
            <div className="mb-4">
              <label className="small text-secondary fw-semibold d-block mb-2">Select Digital / Print Edition:</label>
              <div className="d-flex flex-wrap gap-2">
                {singleProductData.formatsAvailable.map((fmt, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant={selectedFormat === fmt ? 'info' : 'outline-secondary'}
                    className={`rounded-pill px-3 py-2 fw-medium ${selectedFormat === fmt ? 'text-dark' : 'text-light'}`}
                    onClick={() => setSelectedFormat(fmt)}
                  >
                    {fmt}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <div className="d-flex align-items-center rounded-pill bg-black bg-opacity-50 border border-secondary border-opacity-50 p-1">
                <Button
                  size="sm"
                  variant="transparent"
                  className="text-white border-0 px-3 fw-bold"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-2 fw-bold text-info" style={{ minWidth: '30px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <Button
                  size="sm"
                  variant="transparent"
                  className="text-white border-0 px-3 fw-bold"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>

              <Button
                variant="info"
                size="lg"
                onClick={handleAddToCart}
                className="rounded-pill px-4 fw-bold text-dark shadow-sm flex-grow-1"
              >
                Add To Cart • ₹{Math.round(singleProductData.price * quantity).toLocaleString('en-IN')}
              </Button>

              <Button
                as={Link}
                to="/pricing-plan"
                variant="outline-light"
                size="lg"
                className="rounded-pill px-4 fw-semibold"
              >
                Buy Now
              </Button>
            </div>

            {/* Quick Guarantees Strip */}
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary border-top border-secondary border-opacity-25 pt-3 mb-0">
              <li className="d-flex align-items-center gap-2">
                <span className="text-info">✓</span> Instant cryptographic download link delivered upon payment
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="text-info">✓</span> 30-Day unconditional money-back satisfaction guarantee
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="text-info">✓</span> Direct access to author discussion forum and GitHub code repos
              </li>
            </ul>

          </Col>
        </Row>

        {/* 3. TABS: DESCRIPTION, SPECIFICATIONS & REVIEWS */}
        <section className="mb-5 p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="border-bottom border-secondary border-opacity-25 mb-4 custom-tabs"
          >
            <Tab eventKey="description" title="Description & Highlights">
              <div className="pt-2">
                <h5 className="fw-bold text-white mb-3">About The Handbook</h5>
                <p className="text-secondary small leading-relaxed mb-4">
                  {singleProductData.description}
                </p>

                <h6 className="fw-bold text-white mb-3">Key Takeaways & Included Assets:</h6>
                <Row className="g-2">
                  {singleProductData.features.map((feat, idx) => (
                    <Col md={6} key={idx} className="d-flex align-items-start gap-2 small text-light">
                      <span className="text-info fw-bold">✓</span>
                      <span>{feat}</span>
                    </Col>
                  ))}
                </Row>
              </div>
            </Tab>

            <Tab eventKey="specifications" title="Product Specifications">
              <div className="pt-2">
                <Table hover variant="dark" responsive className="mb-0 border border-secondary border-opacity-25 rounded-3 overflow-hidden">
                  <tbody>
                    {productSpecifications.map((spec, idx) => (
                      <tr key={idx} className="border-secondary border-opacity-10">
                        <td className="ps-3 fw-semibold text-secondary small" style={{ width: '35%' }}>{spec.label}</td>
                        <td className="text-light small">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Tab>

            <Tab eventKey="reviews" title={`Customer Feedback (${productReviews.length})`}>
              <div className="pt-2 d-flex flex-column gap-3">
                {productReviews.map((rev) => (
                  <Card key={rev.id} className="bg-dark border border-secondary border-opacity-25 rounded-4 p-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <div>
                        <strong className="text-white small d-block">{rev.name}</strong>
                        <small className="text-info">{rev.role}</small>
                      </div>
                      <span className="text-secondary small">{rev.date}</span>
                    </div>
                    <div className="text-warning small mb-2">★★★★★</div>
                    <p className="text-secondary small mb-0">{rev.comment}</p>
                  </Card>
                ))}
              </div>
            </Tab>
          </Tabs>
        </section>

        {/* 4. RELATED PRODUCTS SECTION */}
        <section className="pt-4 border-top border-secondary border-opacity-25">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <Badge bg="secondary" className="mb-2">Frequently Bought Together</Badge>
              <h4 className="fw-bold text-white mb-0">Recommended Developer Gear</h4>
            </div>
            <Link to="/shop" className="text-info text-decoration-none small fw-semibold">
              Explore Store &rarr;
            </Link>
          </div>

          <Row className="g-4">
            {relatedProducts.map((prod) => (
              <Col key={prod.id} xs={12} sm={6} lg={3}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm d-flex flex-column">
                  <Card.Img 
                    variant="top" 
                    src={prod.image} 
                    alt={prod.title}
                    style={{ height: '180px', objectFit: 'cover' }} 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <Card.Body className="d-flex flex-column p-3">
                    <span className="text-info small fw-bold text-uppercase mb-1" style={{ fontSize: '0.75rem' }}>
                      {prod.category}
                    </span>
                    <Card.Title className="fw-bold fs-6 mb-2 lh-base">
                      <Link to="/single-shop" className="text-white text-decoration-none hover-text-info">
                        {prod.title}
                      </Link>
                    </Card.Title>
                    <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
                      <span className="text-warning fw-bold">★ {prod.rating}</span>
                    </div>
                    <div className="mt-auto pt-2 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5 text-white">₹{prod.price.toLocaleString('en-IN')}</span>
                        <span className="text-secondary text-decoration-line-through ms-2 small">₹{prod.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <Button as={Link} to="/single-shop" variant="outline-info" size="sm" className="rounded-pill px-3">
                        View
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

      </Container>
    </div>
  );
};

export default SingleShop;