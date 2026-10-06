import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {
  courseDetailData,
  learningOutcomes,
  courseRequirements,
  curriculumModules,
  primaryInstructor,
  studentReviewsBreakdown
} from '../../user/data/CourseDetails';
import { useApp } from '../../context/AppContext';

const CourseDetails = () => {
  const navigate = useNavigate();
  const { user, addToCart, toggleWishlist, isInWishlist, enrolledCourses, addXP, showToast } = useApp();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Reviews state with newly submitted reviews
  const [reviewsList, setReviewsList] = useState(studentReviewsBreakdown.featuredReviews);
  const [ratingFilter, setRatingFilter] = useState('all');

  // Review Form State
  const [newRating, setNewRating] = useState(5);
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');

  const isEnrolled = enrolledCourses.some((c) => c.title === courseDetailData.title || c.id === 1);
  const inWishlist = isInWishlist(1);

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      title: courseDetailData.title,
      category: courseDetailData.category,
      price: courseDetailData.price,
      originalPrice: courseDetailData.originalPrice,
      image: courseDetailData.previewVideoThumbnail,
      instructor: primaryInstructor.name
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReviewComment.trim()) return;

    const newRev = {
      id: Date.now(),
      studentName: user.name || 'Anonymous Student',
      date: 'Just now',
      rating: newRating,
      comment: newReviewTitle.trim() ? `${newReviewTitle.trim()} — ${newReviewComment.trim()}` : newReviewComment.trim()
    };

    setReviewsList((prev) => [newRev, ...prev]);
    addXP(25, 'Submitted verified student review');
    showToast('Review Published!', 'Thank you for your valuable feedback on this curriculum.', 'success');
    setShowReviewModal(false);
    setNewReviewTitle('');
    setNewReviewComment('');
  };

  const filteredReviews = reviewsList.filter((r) => {
    if (ratingFilter === '5') return (r.rating || 5) === 5;
    if (ratingFilter === '4') return (r.rating || 5) === 4;
    return true;
  });

  return (
    <div className="course-details-page bg-dark text-white min-vh-100">
      
      {/* 1. TOP HERO BREADCRUMB & HEADER */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-2">
          <Row className="gy-4">
            <Col lg={8}>
              {/* Breadcrumb */}
              <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
                <Link to="/" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <Link to="/course" className="text-secondary text-decoration-none hover-text-white">Courses</Link>
                <span>/</span>
                <span className="text-info fw-medium">{courseDetailData.category}</span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="display-5 fw-bold mb-3 lh-sm text-white">
                {courseDetailData.title}
              </h1>
              <p className="lead text-secondary mb-4 fs-6">
                {courseDetailData.subtitle}
              </p>

              {/* Course Meta Highlights */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <Badge bg="warning" className="text-dark fw-bold px-3 py-2 rounded-pill">
                  ★ {courseDetailData.rating}
                </Badge>
                <span className="text-info small fw-semibold">
                  ({reviewsList.length + 320} reviews)
                </span>
                <span className="text-secondary opacity-50">•</span>
                <span className="text-light small">{courseDetailData.enrolledStudents} engineers enrolled</span>
                <span className="text-secondary opacity-50">•</span>
                <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-50 text-light px-3 py-1 rounded-pill small">
                  Level: {courseDetailData.level}
                </span>
              </div>

              {/* Author & Localization */}
              <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small">
                <span>Created by <strong className="text-light">{primaryInstructor.name}</strong></span>
                <span>•</span>
                <span>🌐 {courseDetailData.language}</span>
                <span>•</span>
                <span>📝 Subtitles: {courseDetailData.subtitles}</span>
                <span>•</span>
                <span>📅 Last Updated: {courseDetailData.lastUpdated}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. MAIN COURSE BODY */}
      <section className="py-5">
        <Container fluid="xxl">
          <Row className="gy-5">
            
            {/* === LEFT COLUMN: CONTENT, SYLLABUS, REVIEWS === */}
            <Col lg={8}>
              
              {/* What you'll learn */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-5">
                <h4 className="fw-bold mb-4 text-white">What You&apos;ll Build & Master</h4>
                <Row className="g-3">
                  {learningOutcomes.map((item, idx) => (
                    <Col md={6} key={idx}>
                      <div className="d-flex align-items-start gap-2">
                        <span className="text-success fw-bold">✓</span>
                        <span className="small text-light">{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card>

              {/* Course Content / Syllabus Accordion */}
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h4 className="fw-bold text-white mb-1">Course Curriculum</h4>
                    <span className="text-secondary small">
                      {curriculumModules.length} Modules • 10 Intensive Lessons • 42 Total Hours
                    </span>
                  </div>
                  <Link to="/classroom?courseId=1" className="text-info text-decoration-none small fw-semibold">
                    Preview Live Classroom &rarr;
                  </Link>
                </div>

                <Accordion defaultActiveKey="0" className="custom-accordion">
                  {curriculumModules.map((module, mIdx) => (
                    <Accordion.Item eventKey={String(mIdx)} key={mIdx} className="bg-dark border border-secondary border-opacity-25 rounded-3 mb-2 overflow-hidden">
                      <Accordion.Header className="bg-dark text-white">
                        <div className="d-flex justify-content-between align-items-center w-100 pe-3">
                          <span className="fw-bold text-light small">{module.title}</span>
                          <span className="text-secondary small font-mono">{module.duration}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="bg-black bg-opacity-40 text-secondary p-0">
                        <ul className="list-group list-group-flush">
                          {module.lessons.map((lesson, lIdx) => (
                            <li key={lIdx} className="list-group-item bg-transparent text-secondary border-secondary border-opacity-25 d-flex justify-content-between align-items-center small py-3">
                              <div className="d-flex align-items-center gap-2">
                                <span className="text-info">▶</span>
                                <span className="text-light">{lesson.title}</span>
                              </div>
                              <div className="d-flex align-items-center gap-3">
                                {lesson.preview && (
                                  <span 
                                    className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 cursor-pointer"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowVideoModal(true)}
                                  >
                                    Preview
                                  </span>
                                )}
                                <span className="font-mono text-secondary small">{lesson.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>

              {/* Requirements */}
              <div className="mb-5 p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                <h4 className="fw-bold mb-3 text-white">Prerequisites</h4>
                <ul className="mb-0 text-secondary small d-flex flex-column gap-2 ps-3">
                  {courseRequirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Primary Instructor Bio */}
              <div className="mb-5 p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                <h4 className="fw-bold mb-4 text-white">Your Lead Instructor</h4>
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                  <img 
                    src={primaryInstructor.avatar} 
                    alt={primaryInstructor.name} 
                    className="rounded-circle border border-info border-2 shadow" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5 className="fw-bold mb-1 text-white">{primaryInstructor.name}</h5>
                    <p className="text-info small fw-medium mb-3">{primaryInstructor.title}</p>
                    
                    <div className="d-flex flex-wrap gap-3 small text-secondary mb-3">
                      <span>★ {primaryInstructor.rating}</span>
                      <span>•</span>
                      <span>👨‍🎓 {primaryInstructor.studentsCount}</span>
                      <span>•</span>
                      <span>📚 {primaryInstructor.coursesCount}</span>
                    </div>

                    <p className="text-secondary small mb-0">{primaryInstructor.bio}</p>
                  </div>
                </div>
              </div>

              {/* Student Ratings & Reviews */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                  <h4 className="fw-bold mb-0 text-white">Student Feedback & Reviews</h4>
                  <Button
                    variant="outline-info"
                    size="sm"
                    className="rounded-pill px-3 fw-bold"
                    onClick={() => setShowReviewModal(true)}
                  >
                    ✍️ Write a Review
                  </Button>
                </div>

                <Row className="g-4 align-items-center mb-4">
                  <Col md={4} className="text-center border-end border-secondary border-opacity-25">
                    <h1 className="display-4 fw-bold text-warning mb-1">{studentReviewsBreakdown.averageRating}</h1>
                    <div className="text-warning mb-1">★★★★★</div>
                    <span className="small text-secondary">Course Rating ({reviewsList.length + 320} ratings)</span>
                  </Col>
                  <Col md={8}>
                    {studentReviewsBreakdown.starsDistribution.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-center gap-3 mb-2 small text-secondary">
                        <span className="text-nowrap">{item.stars} Stars</span>
                        <ProgressBar variant="warning" now={item.percentage} className="flex-grow-1" style={{ height: '8px' }} />
                        <span>{item.percentage}%</span>
                      </div>
                    ))}
                  </Col>
                </Row>

                {/* Rating Filter Pills */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="text-secondary small">Filter:</span>
                  <Button
                    size="sm"
                    variant={ratingFilter === 'all' ? 'info' : 'outline-secondary'}
                    className="rounded-pill py-0 px-3 small"
                    onClick={() => setRatingFilter('all')}
                  >
                    All ({reviewsList.length})
                  </Button>
                  <Button
                    size="sm"
                    variant={ratingFilter === '5' ? 'info' : 'outline-secondary'}
                    className="rounded-pill py-0 px-3 small"
                    onClick={() => setRatingFilter('5')}
                  >
                    5 Stars Only
                  </Button>
                  <Button
                    size="sm"
                    variant={ratingFilter === '4' ? 'info' : 'outline-secondary'}
                    className="rounded-pill py-0 px-3 small"
                    onClick={() => setRatingFilter('4')}
                  >
                    4 Stars Only
                  </Button>
                </div>

                {/* Review Items */}
                <div className="d-flex flex-column gap-3">
                  {filteredReviews.map((rev) => (
                    <Card key={rev.id} className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-bold text-white small">{rev.studentName}</span>
                        <span className="text-secondary small">{rev.date}</span>
                      </div>
                      <div className="text-warning small mb-2">
                        {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                      </div>
                      <p className="text-light small mb-0">{rev.comment}</p>
                    </Card>
                  ))}
                </div>
              </div>

            </Col>

            {/* === RIGHT COLUMN: STICKY ENROLLMENT CARD === */}
            <Col lg={4}>
              <div className="sticky-lg-top" style={{ top: '90px' }}>
                <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 overflow-hidden shadow-lg">
                  
                  {/* Video Preview Overlay */}
                  <div className="position-relative" style={{ cursor: 'pointer' }} onClick={() => setShowVideoModal(true)}>
                    <Card.Img variant="top" src={courseDetailData.previewVideoThumbnail} style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="position-absolute top-50 start-50 translate-middle bg-info text-dark rounded-circle p-3 d-flex align-items-center justify-content-center shadow">
                      <span className="fs-4">▶</span>
                    </div>
                    <span className="position-absolute bottom-0 start-0 m-3 badge bg-black bg-opacity-75 text-light px-2 py-1">
                      Preview this course
                    </span>
                  </div>

                  <Card.Body className="p-4">
                    {/* Price Block */}
                    <div className="d-flex align-items-baseline gap-2 mb-3">
                      <span className="display-6 fw-bold text-white">₹{courseDetailData.price.toLocaleString('en-IN')}</span>
                      <span className="text-secondary text-decoration-line-through fs-5">₹{courseDetailData.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="badge bg-danger ms-auto">{courseDetailData.discount}</span>
                    </div>

                    {/* CTAs */}
                    <div className="d-grid gap-2 mb-4">
                      {isEnrolled && (
                        <Button as={Link} to="/classroom?courseId=1" variant="success" size="lg" className="rounded-pill fw-bold text-white shadow-sm mb-1">
                          ▶ Open in Live Classroom
                        </Button>
                      )}
                      <Button variant="info" size="lg" className="rounded-pill fw-bold text-dark shadow-sm" onClick={handleAddToCart}>
                        🛒 Add To Cart
                      </Button>
                      <Button variant="outline-light" size="lg" className="rounded-pill fw-bold" onClick={handleBuyNow}>
                        ⚡ Buy Now
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill text-light mt-1"
                        onClick={() => toggleWishlist({
                          id: 1,
                          title: courseDetailData.title,
                          category: courseDetailData.category,
                          price: courseDetailData.price,
                          originalPrice: courseDetailData.originalPrice,
                          image: courseDetailData.previewVideoThumbnail,
                          instructor: primaryInstructor.name
                        })}
                      >
                        {inWishlist ? '❤️ In Your Wishlist' : '🤍 Save to Wishlist'}
                      </Button>
                    </div>

                    <div className="text-center small text-secondary mb-4">
                      30-Day Money-Back Satisfaction Guarantee
                    </div>

                    {/* Highlights Checklist */}
                    <h6 className="fw-bold text-white mb-3">This course includes:</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
                      <li className="d-flex align-items-center gap-2">
                        <span>📹</span> <span>{courseDetailData.duration} on-demand video</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>📥</span> <span>{courseDetailData.downloadableResources}</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>📱</span> <span>Access on mobile, tablet and desktop</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>♾️</span> <span>Full lifetime access to course updates</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span>📜</span> <span>Verified certificate of completion</span>
                      </li>
                    </ul>

                    {/* Share & Voucher */}
                    <div className="pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center small">
                      <button className="btn btn-link text-secondary text-decoration-none p-0" onClick={() => {
                        navigator.clipboard?.writeText?.(window.location.href);
                        showToast('Link Copied', 'Course URL copied to clipboard.', 'info');
                      }}>Share Course</button>
                      <button className="btn btn-link text-info text-decoration-none p-0" onClick={() => {
                        navigate('/cart');
                      }}>Apply Coupon</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* 3. FREE PREVIEW VIDEO MODAL */}
      <Modal show={showVideoModal} onHide={() => setShowVideoModal(false)} size="lg" centered contentClassName="bg-dark text-white border-secondary">
        <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
          <Modal.Title className="fs-6">Course Preview: {courseDetailData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe 
              src={courseDetailData.previewVideoUrl} 
              title="Course Preview" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      {/* 4. WRITE A REVIEW MODAL */}
      <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)} centered contentClassName="bg-dark text-white border-secondary">
        <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
          <Modal.Title className="fs-6">Write a Verified Course Review</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form onSubmit={handleSubmitReview}>
            <div className="mb-3 text-center">
              <label className="form-label small text-secondary d-block mb-1">Your Rating</label>
              <div className="d-flex justify-content-center gap-2 fs-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="cursor-pointer"
                    style={{ cursor: 'pointer', color: star <= newRating ? '#f59e0b' : '#475569' }}
                    onClick={() => setNewRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label small text-secondary">Review Headline</label>
              <Form.Control
                type="text"
                placeholder="e.g. Exceptional depth on React 19 architecture!"
                value={newReviewTitle}
                onChange={(e) => setNewReviewTitle(e.target.value)}
                className="bg-black text-white border-secondary border-opacity-50 rounded-3 shadow-none"
              />
            </div>

            <div className="mb-3">
              <label className="form-label small text-secondary">Detailed Feedback</label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe your learning experience, project labs, and instructor pacing..."
                value={newReviewComment}
                onChange={(e) => setNewReviewComment(e.target.value)}
                className="bg-black text-white border-secondary border-opacity-50 rounded-3 shadow-none"
                required
              />
            </div>

            <Button type="submit" variant="info" className="w-100 rounded-pill fw-bold text-dark">
              Publish Review (+25 XP)
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default CourseDetails;