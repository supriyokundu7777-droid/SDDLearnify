import React from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const siteMapSections = [
  {
    title: '🎓 Student Learning Hub',
    badge: 'Interactive',
    links: [
      { name: 'Live Classroom & Sandbox', path: '/classroom', desc: 'Video lectures, browser code sandbox, interactive quizzes, and syllabus.' },
      { name: 'Student Dashboard', path: '/dashboard', desc: 'Streaks, analytics, enrolled courses, and live cohort sessions.' },
      { name: 'My Enrolled Courses', path: '/my-courses', desc: 'Course progress tracker and certificate downloads.' },
      { name: 'Verifiable Certificate', path: '/certificate/1', desc: 'Official accredited completion credential.' },
      { name: 'Profile & Settings', path: '/profile', desc: 'Custom skills, study goals, and notifications.' }
    ]
  },
  {
    title: '📚 Curriculums & Explorers',
    badge: '500+ Tracks',
    links: [
      { name: 'Course Catalog Hub', path: '/course', desc: 'Complete course search with category filters and sorting.' },
      { name: 'Course Grid View', path: '/course-one', desc: 'Grid layout with difficulty and price filters.' },
      { name: 'Course List View', path: '/course-two', desc: 'Compact list view with comprehensive syllabi overview.' },
      { name: 'Course Filter View', path: '/course-three', desc: 'Advanced faceted filtering by framework and duration.' },
      { name: 'Course Details Preview', path: '/course-details', desc: 'In-depth syllabus, instructor profile, and reviews.' },
      { name: 'Career Roadmaps', path: '/discover-more', desc: 'Milestone progressions for Full-Stack, AI, and DevOps.' },
      { name: 'Smart Track Matcher', path: '/explore-course', desc: 'Interactive assessment to find the right curriculum.' }
    ]
  },
  {
    title: '🛒 Shop & Commerce',
    badge: 'E-Commerce',
    links: [
      { name: 'Learning Store & Books', path: '/shop', desc: 'Physical hardware kits, textbooks, and merchandise.' },
      { name: 'Product Details', path: '/single-shop', desc: 'Item specs, reviews, and inventory status.' },
      { name: 'My Wishlist', path: '/wishlist', desc: 'Saved courses and batch cart transfers.' },
      { name: 'Shopping Cart', path: '/cart', desc: 'Item review, promo code application, and subtotal calculation.' },
      { name: 'Secure Checkout', path: '/checkout', desc: 'Multi-payment checkout with billing & tax support.' }
    ]
  },
  {
    title: '👥 Mentors, Community & Support',
    badge: 'Network',
    links: [
      { name: 'Certified Instructors', path: '/instructor', desc: 'Directory of engineering leads and researchers.' },
      { name: 'Instructor Profile', path: '/instructor-details', desc: 'Mentor bio, published courses, and student reviews.' },
      { name: 'Tech Events & Hackathons', path: '/events', desc: 'Upcoming live webinars, hackathons, and cohort meetups.' },
      { name: 'Pricing Plans & Teams', path: '/pricing-plan', desc: 'Individual Pro, Team, and Enterprise license tiers.' },
      { name: 'Technical Blog', path: '/blog', desc: 'Engineering architecture case studies and release notes.' },
      { name: 'FAQ & Help Center', path: '/faq', desc: 'Answers to billing, certificates, and technical sandbox questions.' },
      { name: 'Contact Support', path: '/contact', desc: 'Direct ticketing, office locations, and live chat.' }
    ]
  }
];

const Pages = () => {
  return (
    <div className="pages-directory-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* HEADER */}
        <div className="text-center mb-5">
          <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-30 px-3 py-2 rounded-pill fw-semibold mb-3">
            🌐 Complete Platform Directory
          </Badge>
          <h1 className="display-5 fw-bold text-white mb-3">
            Explore All <span className="text-gradient">Learnify Portals</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '640px' }}>
            Instant navigation to every classroom tool, curriculum view, community resource, and account portal.
          </p>
        </div>

        {/* DIRECTORY SECTIONS */}
        <Row className="gy-4">
          {siteMapSections.map((section, idx) => (
            <Col lg={6} key={idx}>
              <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h5 fw-bold text-white mb-0">{section.title}</h3>
                  <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 small">
                    {section.badge}
                  </Badge>
                </div>

                <div className="d-flex flex-column gap-2">
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.path}
                      className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25 text-decoration-none transition-all card-hover d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong className="text-white d-block small mb-1">{link.name}</strong>
                        <span className="text-secondary small d-block" style={{ fontSize: '0.78rem' }}>
                          {link.desc}
                        </span>
                      </div>
                      <span className="text-info fw-bold ms-3">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default Pages;