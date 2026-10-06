import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import { coursesData, courseCategories, skillLevels, sortOptions } from '../user/data/CourseOne';
import { useApp } from '../context/AppContext';

const Course = () => {
  const [searchParams] = useSearchParams();
  const searchUrlParam = searchParams.get('search') || '';
  const categoryUrlParam = searchParams.get('category') || 'All';

  const { addToCart, toggleWishlist, isInWishlist } = useApp();

  const [selectedCategory, setSelectedCategory] = useState(categoryUrlParam);
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');
  const [searchKeyword, setSearchKeyword] = useState(searchUrlParam);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [prevParams, setPrevParams] = useState({ search: searchUrlParam, cat: categoryUrlParam });

  if (prevParams.search !== searchUrlParam || prevParams.cat !== categoryUrlParam) {
    setPrevParams({ search: searchUrlParam, cat: categoryUrlParam });
    if (searchUrlParam) setSearchKeyword(searchUrlParam);
    if (categoryUrlParam && categoryUrlParam !== 'All') setSelectedCategory(categoryUrlParam);
  }

  // Filtering & Sorting
  const filteredCourses = coursesData
    .filter((c) => {
      const matchCat = selectedCategory === 'All' || c.category === selectedCategory;
      const matchLevel = selectedLevel === 'All Levels' || c.level === selectedLevel;
      const matchSearch =
        c.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        c.instructor.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        c.category.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCat && matchLevel && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'priceLow') return (a.price || 0) - (b.price || 0);
      if (sortBy === 'priceHigh') return (b.price || 0) - (a.price || 0);
      return (b.id || 0) - (a.id || 0);
    });

  // Pagination calculation
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="course-hub-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. HEADER & BREADCRUMB */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
            <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
            <span>/</span>
            <span className="text-info">Courses Explorer</span>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <h1 className="display-6 fw-bold text-white mb-1">Explore All Curriculums</h1>
              <p className="text-secondary lead fs-6 mb-0">
                Discover {filteredCourses.length} technical masterclasses designed for production mastery.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="d-flex align-items-center gap-2 bg-secondary bg-opacity-10 p-1 rounded-pill border border-secondary border-opacity-25">
              <Button
                variant={viewMode === 'grid' ? 'info' : 'link'}
                size="sm"
                className={`rounded-pill px-3 ${viewMode === 'grid' ? 'fw-bold text-dark' : 'text-secondary text-decoration-none'}`}
                onClick={() => setViewMode('grid')}
              >
                ▦ Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'info' : 'link'}
                size="sm"
                className={`rounded-pill px-3 ${viewMode === 'list' ? 'fw-bold text-dark' : 'text-secondary text-decoration-none'}`}
                onClick={() => setViewMode('list')}
              >
                ☰ List
              </Button>
            </div>
          </div>
        </div>

        {/* 2. FILTER & SEARCH CONTROL BAR */}
        <div className="p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 mb-4">
          <Row className="gy-3 align-items-center">
            
            {/* Search Input */}
            <Col lg={4} md={6}>
              <InputGroup size="sm">
                <Form.Control
                  type="search"
                  placeholder="Search courses by keyword, instructor..."
                  value={searchKeyword}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-black text-white border-secondary border-opacity-50 rounded-pill ps-3 shadow-none"
                />
              </InputGroup>
            </Col>

            {/* Category Dropdown */}
            <Col lg={3} sm={6}>
              <Form.Select
                size="sm"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {courseCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Col>

            {/* Level Dropdown */}
            <Col lg={2} sm={6}>
              <Form.Select
                size="sm"
                value={selectedLevel}
                onChange={(e) => {
                  setSelectedLevel(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-dark text-white border-secondary border-opacity-50 rounded-pill shadow-none"
              >
                {skillLevels.map((lvl, idx) => (
                  <option key={idx} value={lvl}>{lvl}</option>
                ))}
              </Form.Select>
            </Col>

            {/* Sort Dropdown */}
            <Col lg={3} md={6}>
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
        </div>

        {/* 3. COURSES RESULTS */}
        {displayedCourses.length > 0 ? (
          <div>
            {viewMode === 'grid' ? (
              <Row className="g-4 mb-5">
                {displayedCourses.map((course) => {
                  const inWish = isInWishlist(course.id);

                  return (
                    <Col md={6} lg={4} key={course.id}>
                      <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 overflow-hidden h-100 card-hover d-flex flex-column justify-content-between">
                        <div>
                          <div className="position-relative">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-100"
                              style={{ height: '190px', objectFit: 'cover' }}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                              }}
                            />
                            <Badge bg="info" className="position-absolute top-0 start-0 m-3 px-3 py-1 text-dark fw-bold rounded-pill">
                              {course.badge || 'Popular'}
                            </Badge>
                            <button
                              type="button"
                              className="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 m-3 p-2 shadow"
                              onClick={() => toggleWishlist(course)}
                              title={inWish ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            >
                              <span style={{ color: inWish ? '#ef4444' : '#fff' }}>
                                {inWish ? '❤️' : '🤍'}
                              </span>
                            </button>
                          </div>

                          <Card.Body className="p-4">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="text-info small fw-medium">{course.category}</span>
                              <span className="badge bg-dark border border-secondary border-opacity-50 text-secondary small">
                                {course.level}
                              </span>
                            </div>

                            <h3 className="h6 fw-bold text-white mb-2" style={{ minHeight: '44px' }}>
                              <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                                {course.title}
                              </Link>
                            </h3>

                            <p className="text-secondary small mb-3">By {course.instructor}</p>

                            <div className="d-flex align-items-center justify-content-between small text-secondary mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                              <span className="text-warning fw-bold">★ {course.rating} ({course.reviews})</span>
                              <span>⏱️ {course.duration}</span>
                              <span>📖 {course.lectures}</span>
                            </div>

                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="fs-5 fw-bold text-white">₹{course.price.toLocaleString('en-IN')}</span>
                                {course.originalPrice && (
                                  <span className="text-secondary text-decoration-line-through small ms-2">
                                    ₹{course.originalPrice.toLocaleString('en-IN')}
                                  </span>
                                )}
                              </div>
                              <span className="text-success small fw-semibold">
                                Best Value
                              </span>
                            </div>
                          </Card.Body>
                        </div>

                        <div className="p-4 pt-0">
                          <div className="d-flex gap-2">
                            <Button
                              variant="info"
                              className="rounded-pill fw-bold text-dark flex-grow-1 shadow-sm"
                              onClick={() => addToCart(course)}
                            >
                              🛒 Add to Cart
                            </Button>
                            <Button
                              as={Link}
                              to={`/classroom?courseId=${course.id}`}
                              variant="outline-light"
                              className="rounded-pill fw-semibold px-3"
                              title="Instant Preview"
                            >
                              Preview
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              /* LIST VIEW */
              <div className="d-flex flex-column gap-3 mb-5">
                {displayedCourses.map((course) => {
                  const inWish = isInWishlist(course.id);

                  return (
                    <Card key={course.id} className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 card-hover">
                      <Row className="align-items-center gy-3">
                        <Col md={3}>
                          <img
                            src={course.image}
                            alt={course.title}
                            className="img-fluid rounded-3 w-100"
                            style={{ height: '140px', objectFit: 'cover' }}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                        </Col>

                        <Col md={6}>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 small">
                              {course.category}
                            </Badge>
                            <span className="badge bg-dark border border-secondary border-opacity-50 text-secondary small">
                              {course.level}
                            </span>
                          </div>
                          <h4 className="fw-bold text-white fs-6 mb-1">
                            <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                              {course.title}
                            </Link>
                          </h4>
                          <p className="text-secondary small mb-2">Mentor: {course.instructor}</p>
                          <div className="d-flex align-items-center gap-3 small text-secondary">
                            <span className="text-warning">★ {course.rating} ({course.reviews})</span>
                            <span>⏱️ {course.duration}</span>
                            <span>📖 {course.lectures}</span>
                          </div>
                        </Col>

                        <Col md={3} className="text-md-end">
                          <div className="mb-2">
                            <span className="fs-5 fw-bold text-white">₹{course.price.toLocaleString('en-IN')}</span>
                            {course.originalPrice && (
                              <span className="text-secondary text-decoration-line-through small ms-2">
                                ₹{course.originalPrice.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                          <div className="d-flex flex-column gap-2">
                            <Button
                              variant="info"
                              size="sm"
                              className="rounded-pill fw-bold text-dark w-100"
                              onClick={() => addToCart(course)}
                            >
                              🛒 Add to Cart
                            </Button>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="rounded-pill w-100 text-light"
                              onClick={() => toggleWishlist(course)}
                            >
                              {inWish ? '❤️ In Wishlist' : '🤍 Save to Wishlist'}
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* 4. PAGINATION */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center">
                <Pagination className="pagination-dark gap-1">
                  <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  />
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = i + 1;
                    return (
                      <Pagination.Item
                        key={pageNumber}
                        active={pageNumber === currentPage}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        {pageNumber}
                      </Pagination.Item>
                    );
                  })}
                  <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  />
                </Pagination>
              </div>
            )}
          </div>
        ) : (
          <div className="p-5 text-center rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 my-5">
            <div className="fs-1 mb-3">🔍</div>
            <h4 className="fw-bold text-white mb-2">No Matching Curriculums Found</h4>
            <p className="text-secondary small mb-4">
              Try adjusting your search keywords or resetting your category filters.
            </p>
            <Button
              variant="info"
              className="rounded-pill px-4 fw-bold text-dark"
              onClick={() => {
                setSearchKeyword('');
                setSelectedCategory('All');
                setSelectedLevel('All Levels');
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}

      </Container>
    </div>
  );
};

export default Course;