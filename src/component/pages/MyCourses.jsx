import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useApp } from '../../context/AppContext';

const MyCourses = () => {
  const { enrolledCourses } = useApp();
  const [filterTab, setFilterTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const completedCount = enrolledCourses.filter((c) => c.progress === 100).length;
  const inProgressCount = enrolledCourses.filter((c) => c.progress < 100).length;

  const filtered = enrolledCourses.filter((c) => {
    const matchFilter =
      filterTab === 'all'
        ? true
        : filterTab === 'completed'
        ? c.progress === 100
        : filterTab === 'in-progress'
        ? c.progress < 100
        : filterTab === 'certificates'
        ? c.certificateUnlocked
        : true;

    const matchSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="my-courses-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* PAGE HEADER */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
            <Link to="/dashboard" className="text-secondary text-decoration-none hover-text-white">Dashboard</Link>
            <span>/</span>
            <span className="text-info">My Enrolled Programs</span>
          </div>
          <h1 className="display-6 fw-bold text-white mb-2">My Courses & Certifications</h1>
          <p className="text-secondary lead fs-6 mb-0">
            Track your progress, resume classroom lectures, and download accredited industry certificates.
          </p>
        </div>

        {/* CONTROLS & FILTER BAR */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
          <div className="d-flex flex-wrap gap-2">
            <Button
              variant={filterTab === 'all' ? 'info' : 'outline-secondary'}
              size="sm"
              className="rounded-pill px-3 fw-bold"
              onClick={() => setFilterTab('all')}
            >
              All ({enrolledCourses.length})
            </Button>
            <Button
              variant={filterTab === 'in-progress' ? 'info' : 'outline-secondary'}
              size="sm"
              className="rounded-pill px-3 fw-bold"
              onClick={() => setFilterTab('in-progress')}
            >
              In Progress ({inProgressCount})
            </Button>
            <Button
              variant={filterTab === 'completed' ? 'info' : 'outline-secondary'}
              size="sm"
              className="rounded-pill px-3 fw-bold"
              onClick={() => setFilterTab('completed')}
            >
              Completed ({completedCount})
            </Button>
            <Button
              variant={filterTab === 'certificates' ? 'warning' : 'outline-secondary'}
              size="sm"
              className="rounded-pill px-3 fw-bold"
              onClick={() => setFilterTab('certificates')}
            >
              🏆 Certificates Ready ({completedCount})
            </Button>
          </div>

          <div style={{ maxWidth: '300px', width: '100%' }}>
            <InputGroup size="sm">
              <Form.Control
                type="search"
                placeholder="Search enrolled courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-black text-white border-secondary border-opacity-50 rounded-pill shadow-none ps-3"
              />
            </InputGroup>
          </div>
        </div>

        {/* COURSES LIST / GRID */}
        {filtered.length > 0 ? (
          <Row className="g-4">
            {filtered.map((course) => (
              <Col md={6} lg={4} key={course.id}>
                <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 overflow-hidden h-100 card-hover">
                  <div className="position-relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-100"
                      style={{ height: '180px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <Badge
                      bg={course.progress === 100 ? 'success' : 'info'}
                      className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill"
                    >
                      {course.progress === 100 ? '✓ Completed' : `${course.progress}% Completed`}
                    </Badge>
                  </div>

                  <Card.Body className="p-4 d-flex flex-column justify-content-between">
                    <div>
                      <span className="text-secondary small d-block mb-1">{course.category}</span>
                      <h5 className="fw-bold text-white fs-6 mb-2">{course.title}</h5>
                      <p className="text-secondary small mb-3">
                        Lead Instructor: <strong className="text-light">{course.instructor}</strong>
                      </p>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between small text-secondary mb-1">
                        <span>Progress</span>
                        <span className="text-info fw-bold">{course.progress}%</span>
                      </div>
                      <ProgressBar
                        now={course.progress}
                        variant={course.progress === 100 ? 'success' : 'info'}
                        style={{ height: '6px' }}
                        className="bg-dark mb-3"
                      />

                      <div className="d-flex flex-column gap-2">
                        <Button
                          as={Link}
                          to={`/classroom?courseId=${course.id}`}
                          variant="info"
                          className="rounded-pill fw-bold text-dark w-100 shadow-sm"
                        >
                          {course.progress === 100 ? 'Review Lectures' : 'Continue in Classroom &rarr;'}
                        </Button>

                        {course.certificateUnlocked && (
                          <Button
                            as={Link}
                            to={`/certificate/${course.id}`}
                            variant="outline-warning"
                            className="rounded-pill fw-bold w-100"
                          >
                            🏆 View Official Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="p-5 text-center rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 my-5">
            <div className="fs-1 mb-3">🔍</div>
            <h4 className="fw-bold text-white mb-2">No Courses Found</h4>
            <p className="text-secondary small mb-4">
              We couldn't find any courses matching your filter query.
            </p>
            <Button as={Link} to="/course-one" variant="info" className="rounded-pill px-4 fw-bold text-dark">
              Explore Available Curriculums
            </Button>
          </div>
        )}

      </Container>
    </div>
  );
};

export default MyCourses;
