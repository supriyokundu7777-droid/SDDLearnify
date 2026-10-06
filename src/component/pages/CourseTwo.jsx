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
  listCategories, 
  listLevels, 
  listSortOptions, 
  courseListItems 
} from '../../user/data/CourseTwo';

const CourseTwo = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering and sorting logic
  const filteredCourses = courseListItems
    .filter((course) => {
      const matchCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchLevel && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      return b.id - a.id;
    });

  return (
    <div className="course-two-page bg-dark text-white min-vh-100">
      {/* 1. HERO BREADCRUMB HEADER */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-3">
          <Row className="align-items-center justify-content-between gy-3">
            <Col md={8}>
              <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <Link to="/course-one" className="text-secondary text-decoration-none hover-text-white">Courses</Link>
                <span>/</span>
                <span className="text-info fw-medium">Course List View</span>
              </div>
              <h1 className="display-5 fw-bold mb-2">Explore All Courses (Detailed View)</h1>
              <p className="text-secondary lead fs-6 mb-0">
                Compare curriculums, lesson breakdown, and syllabus topics in a horizontal layout.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <div className="d-inline-flex gap-2">
                <Link to="/course-one" className="btn btn-outline-secondary btn-sm rounded-pill text-light px-3">
                  🔲 Grid View
                </Link>
                <button className="btn btn-info btn-sm rounded-pill fw-bold px-3" disabled>
                  ☰ List View
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. FILTER & SEARCH CONTROL TOOLBAR */}
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
                  placeholder="Search courses, skills, or mentors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white border-0 shadow-none ps-1"
                />
              </InputGroup>
            </Col>

            {/* Category Dropdown */}
            <Col lg={3} sm={6}>
              <Form.Select 
                size="sm" 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {listCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Col>

            {/* Level Dropdown */}
            <Col lg={3} sm={6}>
              <Form.Select 
                size="sm" 
                value={selectedLevel} 
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {listLevels.map((lvl, idx) => (
                  <option key={idx} value={lvl}>{lvl}</option>
                ))}
              </Form.Select>
            </Col>

            {/* Sorting Dropdown */}
            <Col lg={2} md={6}>
              <Form.Select 
                size="sm" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {listSortOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value}>{opt.label}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. COURSES HORIZONTAL LIST */}
      <section className="py-5">
        <Container fluid="xxl">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-secondary small">
              Showing <strong>{filteredCourses.length}</strong> matching courses
            </span>
            {(selectedCategory !== 'All' || selectedLevel !== 'All Levels' || searchQuery !== '') && (
              <button 
                onClick={() => { setSelectedCategory('All'); setSelectedLevel('All Levels'); setSearchQuery(''); }}
                className="btn btn-sm btn-link text-info text-decoration-none p-0"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredCourses.length > 0 ? (
            <div className="d-flex flex-column gap-4">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm">
                  <Row className="g-0 align-items-stretch">
                    {/* Course Thumbnail Column */}
                    <Col lg={4} md={5} className="position-relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ minHeight: '230px' }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      <Badge bg="danger" className="position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1">
                        {course.badge}
                      </Badge>
                      <Badge bg="dark" className="position-absolute bottom-0 start-0 m-3 bg-opacity-75 rounded-pill px-2 py-1 text-light border border-secondary border-opacity-50">
                        {course.level}
                      </Badge>
                    </Col>

                    {/* Course Body Column */}
                    <Col lg={8} md={7} className="d-flex flex-column p-4">
                      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                        <span className="text-info fw-bold text-uppercase small">{course.category}</span>
                        <div className="d-flex align-items-center gap-2 small text-secondary">
                          <span>⏱️ {course.duration}</span>
                          <span>•</span>
                          <span>📚 {course.lectures}</span>
                        </div>
                      </div>

                      <h4 className="fw-bold mb-2">
                        <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                          {course.title}
                        </Link>
                      </h4>

                      <div className="small text-secondary mb-2">
                        Instructor: <span className="text-light fw-medium">{course.instructor}</span> ({course.instructorRole})
                      </div>

                      <p className="text-secondary small mb-3">
                        {course.description}
                      </p>

                      {/* Course Feature Checklist */}
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {course.features.map((feat, idx) => (
                          <span key={idx} className="badge bg-black bg-opacity-40 border border-secondary border-opacity-25 text-light fw-normal px-2 py-1 rounded-pill small">
                            ✓ {feat}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Info & Action Strip */}
                      <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-warning fw-bold fs-5">★ {course.rating.toFixed(1)}</span>
                          <span className="text-secondary small">({course.reviews} reviews)</span>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                          <div className="text-end">
                            <span className="fw-bold fs-4 text-white">₹{course.price.toLocaleString('en-IN')}</span>
                            <span className="text-secondary text-decoration-line-through ms-2 small">
                              ₹{course.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <Button 
                            as={Link} 
                            to="/cart" 
                            variant="info" 
                            className="rounded-pill px-4 fw-bold shadow-sm"
                          >
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <h4 className="fw-bold text-white mb-2">No matching courses found</h4>
              <p className="text-secondary mb-4">Try clearing your filters or changing your search terms.</p>
              <Button 
                variant="outline-info" 
                size="sm" 
                className="rounded-pill px-4"
                onClick={() => { setSelectedCategory('All'); setSelectedLevel('All Levels'); setSearchQuery(''); }}
              >
                Reset Filters
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

export default CourseTwo;