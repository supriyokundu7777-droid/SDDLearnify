import React from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useApp } from '../../context/AppContext';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart, showToast } = useApp();

  const handleMoveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item); // removes from wishlist
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => addToCart(item));
    showToast('All Added to Cart', `${wishlist.length} saved courses transferred to your cart!`, 'success');
  };

  const totalValue = wishlist.reduce((acc, item) => acc + (item.price || 2499), 0);
  const totalOriginal = wishlist.reduce((acc, item) => acc + (item.originalPrice || 5999), 0);
  const totalSavings = Math.max(0, totalOriginal - totalValue);

  return (
    <div className="wishlist-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* BREADCRUMB & HEADER */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
            <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
            <span>/</span>
            <span className="text-info">My Wishlist</span>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <h1 className="display-6 fw-bold text-white mb-1">Saved Courses & Wishlist</h1>
              <p className="text-secondary lead fs-6 mb-0">
                You have <strong className="text-info">{wishlist.length}</strong> items saved for later study.
              </p>
            </div>

            {wishlist.length > 0 && (
              <div className="d-flex align-items-center gap-3">
                <Button variant="info" className="rounded-pill px-4 fw-bold text-dark shadow-sm" onClick={handleMoveAllToCart}>
                  🛒 Move All ({wishlist.length}) to Cart
                </Button>
              </div>
            )}
          </div>
        </div>

        {wishlist.length > 0 ? (
          <Row className="gy-4">
            
            {/* WISHLIST ITEMS LIST */}
            <Col lg={8}>
              <div className="d-flex flex-column gap-3">
                {wishlist.map((item) => (
                  <Card key={item.id} className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 card-hover">
                    <Row className="align-items-center gy-3">
                      <Col sm={4} md={3}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded-3 w-100"
                          style={{ height: '110px', objectFit: 'cover' }}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                      </Col>

                      <Col sm={8} md={6}>
                        <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 mb-1 small">
                          {item.category}
                        </Badge>
                        <h5 className="fw-bold text-white fs-6 mb-1">{item.title}</h5>
                        <p className="text-secondary small mb-2">Instructor: {item.instructor || 'Lead Mentor'}</p>
                        <div className="d-flex align-items-center gap-2 small text-warning">
                          <span>★ {item.rating || 4.9}</span>
                          <span className="text-secondary">({item.reviews || '1.2k'} reviews)</span>
                        </div>
                      </Col>

                      <Col md={3} className="text-md-end">
                        <div className="mb-2">
                          <span className="fs-5 fw-bold text-white">₹{item.price.toLocaleString('en-IN')}</span>
                          {item.originalPrice && (
                            <span className="text-secondary text-decoration-line-through small ms-2">
                              ₹{item.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <Button
                            variant="info"
                            size="sm"
                            className="rounded-pill fw-bold text-dark w-100"
                            onClick={() => handleMoveToCart(item)}
                          >
                            Move to Cart
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="rounded-pill w-100"
                            onClick={() => toggleWishlist(item)}
                          >
                            Remove
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            </Col>

            {/* ORDER SUMMARY / SAVINGS PANEL */}
            <Col lg={4}>
              <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-4 sticky-top" style={{ top: '80px' }}>
                <h4 className="fw-bold text-white fs-5 mb-3">Wishlist Summary</h4>
                
                <div className="d-flex justify-content-between text-secondary mb-2 small">
                  <span>Total Saved Courses:</span>
                  <strong className="text-light">{wishlist.length} Items</strong>
                </div>

                <div className="d-flex justify-content-between text-secondary mb-2 small">
                  <span>Standard List Price:</span>
                  <span className="text-decoration-line-through">₹{Math.round(totalOriginal).toLocaleString('en-IN')}</span>
                </div>

                <div className="d-flex justify-content-between text-success mb-3 small">
                  <span>Promotional Savings:</span>
                  <strong>-₹{Math.round(totalSavings).toLocaleString('en-IN')}</strong>
                </div>

                <div className="d-flex justify-content-between text-white fs-5 fw-bold py-3 border-top border-secondary border-opacity-25 mb-4">
                  <span>Estimated Total:</span>
                  <span className="text-info">₹{Math.round(totalValue).toLocaleString('en-IN')}</span>
                </div>

                <Button
                  variant="info"
                  size="lg"
                  className="w-100 rounded-pill fw-bold text-dark mb-3 shadow-sm"
                  onClick={handleMoveAllToCart}
                >
                  Transfer All to Cart &rarr;
                </Button>

                <p className="text-secondary small text-center mb-0" style={{ fontSize: '0.75rem' }}>
                  🔒 30-Day Money-Back Guarantee included with all certifications.
                </p>
              </Card>
            </Col>

          </Row>
        ) : (
          <div className="p-5 text-center rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 my-5">
            <div className="fs-1 mb-3">❤️</div>
            <h3 className="fw-bold text-white mb-2">Your Wishlist is Empty</h3>
            <p className="text-secondary small mb-4" style={{ maxWidth: '420px', margin: '0 auto' }}>
              Explore over 500+ structured engineering and AI courses. Click the heart icon on any card to save it here!
            </p>
            <Button as={Link} to="/course-one" variant="info" className="rounded-pill px-4 fw-bold text-dark">
              Discover Trending Courses
            </Button>
          </div>
        )}

      </Container>
    </div>
  );
};

export default Wishlist;
