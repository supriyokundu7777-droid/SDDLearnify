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
import Pagination from 'react-bootstrap/Pagination';

import {
  sidebarCategories,
  sidebarRatings,
  sidebarLevels,
  sidebarPrices,
  courseThreeItems
} from '../../user/data/CourseThree';

const CourseThree = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedRating, setSelectedRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [isGridView, setIsGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Multi-criteria filter & sort logic
  const filteredCourses = courseThreeItems
    .filter((course) => {
      const matchCat = selectedCategory === 'All' || course.category === selectedCategory;
      const matchLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchRating = selectedRating === 0 || course.rating >= selectedRating;
      const matchSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      let matchPrice = true;
      if (selectedPrice === 'under2000') matchPrice = course.price < 2000;
      else if (selectedPrice === '2000to3500') matchPrice = course.price >= 2000 && course.price <= 3500;
      else if (selectedPrice === 'above3500') matchPrice = course.price > 3500;

      return matchCat && matchLevel && matchRating && matchSearch && matchPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      return b.id - a.id;
    });

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedLevel('All Levels');
    setSelectedPrice('all');
    setSelectedRating(0);
    setSearchQuery('');
    setSortBy('popular');
  };

  return (
    <div className="course-three-page bg-dark text-white min-vh-100">
      {/* 1. HERO BREADCRUMB */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-3">
          <Row className="align-items-center justify-content-between gy-3">
            <Col md={8}>
              <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <Link to="/course-one" className="text-secondary text-decoration-none hover-text-white">Courses</Link>
                <span>/</span>
                <span className="text-info fw-medium">Course Filter View</span>
              </div>
              <h1 className="display-5 fw-bold mb-2">Course Filter & Search Directory</h1>
              <p className="text-secondary lead fs-6 mb-0">
                Filter courses by exact topic, skill level, minimum user rating, and budget.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-50 px-3 py-2 text-light rounded-pill">
                {filteredCourses.length} Courses Found
              </span>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. MAIN LAYOUT: SIDEBAR + CONTENT GRID */}
      <section className="py-5">
        <Container fluid="xxl">
          <Row className="g-4">
            
            {/* === LEFT FILTER SIDEBAR === */}
            <Col lg={3}>
              <div className="p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 sticky-lg-top" style={{ top: '90px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0 text-white">Filter Courses</h5>
                  <button 
                    onClick={resetAllFilters} 
                    className="btn btn-sm btn-link text-info text-decoration-none p-0"
                  >
                    Reset
                  </button>
                </div>

                {/* Search Bar */}
                <div className="mb-4">
                  <Form.Label className="small text-secondary fw-semibold text-uppercase tracking-wider">Search</Form.Label>
                  <InputGroup size="sm" className="rounded-pill bg-dark border border-secondary border-opacity-50 overflow-hidden">
                    <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">🔍</InputGroup.Text>
                    <Form.Control
                      type="search"
                      placeholder="Keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-white border-0 shadow-none ps-1"
                    />
                  </InputGroup>
                </div>

                {/* Category Filter */}
                <div className="mb-4">
                  <Form.Label className="small text-secondary fw-semibold text-uppercase tracking-wider">Category</Form.Label>
                  <div className="d-flex flex-column gap-2">
                    <Form.Check
                      type="radio"
                      id="cat-all"
                      name="categoryFilter"
                      label="All Categories"
                      checked={selectedCategory === 'All'}
                      onChange={() => setSelectedCategory('All')}
                      className="small text-light"
                    />
                    {sidebarCategories.map((cat, idx) => (
                      <div key={idx} className="d-flex justify-content-between align-items-center">
                        <Form.Check
                          type="radio"
                          id={`cat-${idx}`}
                          name="categoryFilter"
                          label={cat.name}
                          checked={selectedCategory === cat.name}
                          onChange={() => setSelectedCategory(cat.name)}
                          className="small text-light"
                        />
                        <span className="text-secondary small">({cat.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-4">
                  <Form.Label className="small text-secondary fw-semibold text-uppercase tracking-wider">Customer Rating</Form.Label>
                  <div className="d-flex flex-column gap-2">
                    {sidebarRatings.map((item, idx) => (
                      <div key={idx} className="d-flex justify-content-between align-items-center">
                        <Form.Check
                          type="radio"
                          id={`rating-${idx}`}
                          name="ratingFilter"
                          label={
                            <span className="d-inline-flex align-items-center gap-1">
                              <span className="text-warning">★</span> {item.label}
                            </span>
                          }
                          checked={selectedRating === item.stars}
                          onChange={() => setSelectedRating(selectedRating === item.stars ? 0 : item.stars)}
                          className="small text-light"
                        />
                        <span className="text-secondary small">({item.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Level Filter */}
                <div className="mb-4">
                  <Form.Label className="small text-secondary fw-semibold text-uppercase tracking-wider">Skill Level</Form.Label>
                  <div className="d-flex flex-column gap-2">
                    {sidebarLevels.map((lvl, idx) => (
                      <div key={idx} className="d-flex justify-content-between align-items-center">
                        <Form.Check
                          type="radio"
                          id={`lvl-${idx}`}
                          name="levelFilter"
                          label={lvl.name}
                          checked={selectedLevel === lvl.name}
                          onChange={() => setSelectedLevel(lvl.name)}
                          className="small text-light"
                        />
                        <span className="text-secondary small">({lvl.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <Form.Label className="small text-secondary fw-semibold text-uppercase tracking-wider">Price Range</Form.Label>
                  <div className="d-flex flex-column gap-2">
                    {sidebarPrices.map((price, idx) => (
                      <Form.Check
                        key={idx}
                        type="radio"
                        id={`price-${idx}`}
                        name="priceFilter"
                        label={price.label}
                        checked={selectedPrice === price.value}
                        onChange={() => setSelectedPrice(price.value)}
                        className="small text-light"
                      />
                    ))}
                  </div>
                </div>

              </div>
            </Col>

            {/* === RIGHT RESULTS COLUMN === */}
            <Col lg={9}>
              {/* Top Control Bar (Sort + Layout Toggle) */}
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 p-3 rounded-4 bg-black bg-opacity-25 border border-secondary border-opacity-25 mb-4">
                <div className="small text-secondary">
                  Showing <strong>{filteredCourses.length}</strong> Results
                </div>

                <div className="d-flex align-items-center gap-3">
                  {/* Sort Selector */}
                  <div className="d-flex align-items-center gap-2">
                    <span className="small text-secondary text-nowrap">Sort By:</span>
                    <Form.Select 
                      size="sm" 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
                      style={{ width: '160px' }}
                    >
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="priceLow">Price: Low to High</option>
                      <option value="priceHigh">Price: High to Low</option>
                    </Form.Select>
                  </div>

                  {/* Grid / List Switcher */}
                  <div className="btn-group" role="group">
                    <Button 
                      variant={isGridView ? 'info' : 'dark'} 
                      size="sm" 
                      onClick={() => setIsGridView(true)}
                      className="px-2"
                      title="Grid View"
                    >
                      🔲
                    </Button>
                    <Button 
                      variant={!isGridView ? 'info' : 'dark'} 
                      size="sm" 
                      onClick={() => setIsGridView(false)}
                      className="px-2"
                      title="List View"
                    >
                      ☰
                    </Button>
                  </div>
                </div>
              </div>

              {/* Course Output Display */}
              {filteredCourses.length > 0 ? (
                <Row className="g-4">
                  {filteredCourses.map((course) => (
                    <Col key={course.id} xs={12} md={isGridView ? 6 : 12}>
                      <Card className={`h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm ${!isGridView ? 'd-md-flex flex-md-row' : ''}`}>
                        
                        {/* Image */}
                        <div className={`position-relative ${!isGridView ? 'col-md-5 col-lg-4' : ''}`}>
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-100 h-100 object-fit-cover" 
                            style={{ minHeight: '210px' }} 
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <Badge bg="danger" className="position-absolute top-0 end-0 m-3 rounded-pill px-2 py-1">
                            {course.badge}
                          </Badge>
                          <Badge bg="dark" className="position-absolute bottom-0 start-0 m-3 bg-opacity-75 rounded-pill px-2 py-1 text-light border border-secondary border-opacity-50">
                            {course.level}
                          </Badge>
                        </div>

                        {/* Content */}
                        <Card.Body className="d-flex flex-column p-4">
                          <div className="d-flex justify-content-between align-items-center small text-secondary mb-2">
                            <span className="text-info fw-bold text-uppercase">{course.category}</span>
                            <span>⏱️ {course.duration}</span>
                          </div>

                          <Card.Title className="fw-bold fs-5 mb-2 lh-base">
                            <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                              {course.title}
                            </Link>
                          </Card.Title>

                          <div className="small text-secondary mb-3">
                            By <span className="text-light fw-medium">{course.instructor}</span>
                          </div>

                          <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="text-warning fw-bold">★ {course.rating.toFixed(1)}</span>
                            <span className="text-secondary small">({course.reviews} reviews)</span>
                            <span className="text-secondary opacity-50">•</span>
                            <span className="text-secondary small">{course.lectures}</span>
                          </div>

                          {/* Footer & Price */}
                          <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                            <div>
                              <span className="fw-bold fs-4 text-white">₹{course.price.toLocaleString('en-IN')}</span>
                              <span className="text-secondary text-decoration-line-through ms-2 small">
                                ₹{course.originalPrice.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <Button as={Link} to="/cart" variant="info" size="sm" className="rounded-pill px-3 fw-bold">
                              Enroll Now
                            </Button>
                          </div>
                        </Card.Body>

                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="text-center py-5">
                  <h4 className="fw-bold text-white mb-2">No Courses Matched Your Criteria</h4>
                  <p className="text-secondary mb-4">Try clearing one or more filters from the sidebar.</p>
                  <Button variant="outline-info" size="sm" className="rounded-pill px-4" onClick={resetAllFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {filteredCourses.length > 0 && (
                <div className="d-flex justify-content-center mt-5">
                  <Pagination className="pagination-dark gap-1">
                    <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)} />
                    <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>1</Pagination.Item>
                    <Pagination.Item active={currentPage === 2} onClick={() => setCurrentPage(2)}>2</Pagination.Item>
                    <Pagination.Item active={currentPage === 3} onClick={() => setCurrentPage(3)}>3</Pagination.Item>
                    <Pagination.Next disabled={currentPage === 3} onClick={() => setCurrentPage((p) => p + 1)} />
                  </Pagination>
                </div>
              )}

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CourseThree;