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
  courseCategories, 
  skillLevels, 
  sortOptions, 
  coursesData 
} from '../../user/data/CourseOne';

const CourseOne = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter & Search Logic
  const filteredCourses = coursesData
    .filter((course) => {
      const matchCat = selectedCategory === 'All' || course.category === selectedCategory;
      const matchLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchSearch = course.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCat && matchLevel && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      return b.id - a.id; // Default most popular/recent
    });

  return (
    <div className="course-one-page bg-dark text-white min-vh-100">
      {/* 1. PAGE HEADER / BREADCRUMB */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-3">
          <Row className="align-items-center justify-content-between gy-3">
            <Col md={8}>
              <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <span className="text-info fw-medium">Courses</span>
                <span>/</span>
                <span className="text-light">Course Grid View</span>
              </div>
              <h1 className="display-5 fw-bold mb-2">Explore All Online Courses</h1>
              <p className="text-secondary lead fs-6 mb-0">
                Sharpen your tech skills with industry-curated curriculums and project reviews.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-50 px-3 py-2 text-light rounded-pill">
                Showing {filteredCourses.length} of {coursesData.length} Courses
              </span>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="py-4 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <Row className="g-3 align-items-center">
            {/* Search Input */}
            <Col lg={4} md={6}>
              <InputGroup size="sm" className="rounded-pill bg-dark border border-secondary border-opacity-50 overflow-hidden">
                <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">
                  🔍
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search course title or instructor..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="bg-transparent text-white border-0 shadow-none ps-1"
                />
              </InputGroup>
            </Col>

            {/* Category Filter */}
            <Col lg={3} sm={6}>
              <Form.Select 
                size="sm" 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {courseCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Col>

            {/* Level Filter */}
            <Col lg={3} sm={6}>
              <Form.Select 
                size="sm" 
                value={selectedLevel} 
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {skillLevels.map((lvl, idx) => (
                  <option key={idx} value={lvl}>{lvl}</option>
                ))}
              </Form.Select>
            </Col>

            {/* Sort Dropdown */}
            <Col lg={2} md={6}>
              <Form.Select 
                size="sm" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {sortOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value}>{opt.label}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. COURSES 3-COLUMN GRID */}
      <section className="py-5">
        <Container fluid="xxl" className="py-2">
          {filteredCourses.length > 0 ? (
            <Row className="g-4">
              {filteredCourses.map((course) => (
                <Col key={course.id} xs={12} md={6} lg={4}>
                  <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm">
                    {/* Thumbnail & Badges */}
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={course.image} 
                        alt={course.title}
                        style={{ height: '210px', objectFit: 'cover' }} 
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

                    {/* Card Content */}
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

                      {/* Pricing & CTA */}
                      <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                        <div>
                          <span className="fw-bold fs-4 text-white">₹{course.price.toLocaleString('en-IN')}</span>
                          <span className="text-secondary text-decoration-line-through ms-2 small">
                            ₹{course.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <Button 
                          as={Link} 
                          to="/cart" 
                          variant="info" 
                          size="sm" 
                          className="rounded-pill px-3 fw-bold"
                        >
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
              <h4 className="fw-bold text-white mb-2">No Courses Found</h4>
              <p className="text-secondary mb-4">Try clearing your filters or changing your search criteria.</p>
              <Button 
                variant="outline-info" 
                size="sm" 
                className="rounded-pill px-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedLevel('All Levels');
                  setSearchKeyword('');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}

          {/* 4. PAGINATION */}
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
        </Container>
      </section>
    </div>
  );
};

export default CourseOne;