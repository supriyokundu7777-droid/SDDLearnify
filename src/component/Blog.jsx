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
  blogCategories,
  featuredBlogPost,
  blogPostsData,
  trendingBlogPosts,
  blogTags
} from '../user/data/Blog';
import { apiNewsletter } from '../services/api';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredPosts = blogPostsData.filter((post) => {
    const matchCategory = selectedCategory === 'All Articles' || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      try {
        await apiNewsletter({ email: newsletterEmail.trim(), source: 'blog_sidebar' });
      } catch (err) {
        console.error('Blog newsletter error:', err);
      }
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <div className="blog-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB & HEADER */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <span className="text-info fw-medium">Community</span>
          <span>/</span>
          <span className="text-light">Engineering Blog</span>
        </div>

        <div className="mb-5 text-center text-md-start">
          <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill mb-2">
            Articles, Tutorials & Architecture
          </Badge>
          <h1 className="display-5 fw-bold text-white mb-2">
            Learnify <span className="text-info">Engineering Journal</span>
          </h1>
          <p className="lead text-secondary fs-6 mb-0" style={{ maxWidth: '680px' }}>
            Production case studies, architecture blueprints, framework tutorials, and developer career insights authored by senior practitioners.
          </p>
        </div>

        {/* 2. FEATURED HERO ARTICLE BANNER */}
        <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 overflow-hidden mb-5 shadow-lg">
          <Row className="g-0 align-items-center">
            <Col lg={7}>
              <div className="position-relative overflow-hidden" style={{ minHeight: '360px' }}>
                <img
                  src={featuredBlogPost.image}
                  alt={featuredBlogPost.title}
                  className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                />
                <Badge bg="danger" className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill small">
                  🔥 {featuredBlogPost.badge}
                </Badge>
              </div>
            </Col>
            <Col lg={5}>
              <Card.Body className="p-4 p-lg-5 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
                  <Badge bg="info" className="text-dark fw-bold">{featuredBlogPost.category}</Badge>
                  <span>•</span>
                  <span>⏱️ {featuredBlogPost.readTime}</span>
                  <span>•</span>
                  <span>💬 {featuredBlogPost.commentsCount} comments</span>
                </div>

                <h3 className="fw-bold text-white mb-3 lh-sm">
                  <Link to="/blog-details" className="text-white text-decoration-none hover-text-info">
                    {featuredBlogPost.title}
                  </Link>
                </h3>

                <p className="text-secondary small mb-4 leading-relaxed">
                  {featuredBlogPost.excerpt}
                </p>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={featuredBlogPost.author.avatar}
                      alt={featuredBlogPost.author.name}
                      className="rounded-circle border border-info border-2"
                      style={{ width: '42px', height: '42px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold text-white mb-0 small">{featuredBlogPost.author.name}</h6>
                      <small className="text-secondary">{featuredBlogPost.date}</small>
                    </div>
                  </div>
                  <Button as={Link} to="/blog-details" variant="outline-info" size="sm" className="rounded-pill px-3 fw-bold">
                    Read Article &rarr;
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        {/* 3. CATEGORY FILTER BAR */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-5 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="d-flex flex-wrap gap-2">
            {blogCategories.map((cat, idx) => (
              <Button
                key={idx}
                size="sm"
                variant={selectedCategory === cat ? 'info' : 'outline-secondary'}
                className={`rounded-pill px-3 py-2 fw-medium ${selectedCategory === cat ? 'text-dark' : 'text-light'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div style={{ maxWidth: '320px', width: '100%' }}>
            <InputGroup size="sm" className="bg-dark border border-secondary border-opacity-50 rounded-pill overflow-hidden">
              <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">🔍</InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white border-0 shadow-none ps-1 small"
              />
            </InputGroup>
          </div>
        </div>

        {/* 4. MAIN LAYOUT: POSTS GRID + SIDEBAR */}
        <Row className="g-4">
          
          {/* === LEFT COLUMN: ARTICLES GRID === */}
          <Col lg={8}>
            {filteredPosts.length > 0 ? (
              <Row className="g-4">
                {filteredPosts.map((post) => (
                  <Col key={post.id} md={6}>
                    <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm d-flex flex-column">
                      
                      {/* Image Thumbnail & Category */}
                      <div className="position-relative overflow-hidden">
                        <Card.Img
                          variant="top"
                          src={post.image}
                          alt={post.title}
                          style={{ height: '210px', objectFit: 'cover' }}
                        />
                        <Badge bg="dark" className="position-absolute top-0 start-0 m-3 bg-opacity-75 text-info border border-secondary border-opacity-50 small">
                          {post.category}
                        </Badge>
                        <span className="position-absolute bottom-0 end-0 m-2 badge bg-black bg-opacity-75 text-secondary small">
                          ⏱️ {post.readTime}
                        </span>
                      </div>

                      {/* Card Content */}
                      <Card.Body className="d-flex flex-column p-4">
                        <div className="small text-secondary mb-2">
                          <span>📅 {post.date}</span>
                          <span className="mx-2">•</span>
                          <span>💬 {post.commentsCount}</span>
                        </div>

                        <Card.Title className="fw-bold fs-6 mb-2 lh-sm">
                          <Link to="/blog-details" className="text-white text-decoration-none hover-text-info">
                            {post.title}
                          </Link>
                        </Card.Title>

                        <p className="text-secondary small mb-4 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                          {post.excerpt}
                        </p>

                        {/* Author Info */}
                        <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="rounded-circle border border-secondary"
                              style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                            />
                            <div>
                              <strong className="text-white small d-block" style={{ fontSize: '0.8rem' }}>{post.author.name}</strong>
                              <small className="text-secondary" style={{ fontSize: '0.7rem' }}>{post.author.role}</small>
                            </div>
                          </div>
                          <Link to="/blog-details" className="text-info text-decoration-none small fw-bold">
                            Read &rarr;
                          </Link>
                        </div>
                      </Card.Body>

                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-5">
                <h4 className="fw-bold text-white mb-2">No Matching Articles Found</h4>
                <p className="text-secondary mb-4">Try searching with a different term or clearing your category filter.</p>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="rounded-pill px-4"
                  onClick={() => { setSelectedCategory('All Articles'); setSearchQuery(''); }}
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-5">
              <Pagination className="custom-pagination">
                <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)} />
                <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>1</Pagination.Item>
                <Pagination.Item active={currentPage === 2} onClick={() => setCurrentPage(2)}>2</Pagination.Item>
                <Pagination.Item active={currentPage === 3} onClick={() => setCurrentPage(3)}>3</Pagination.Item>
                <Pagination.Next disabled={currentPage === 3} onClick={() => setCurrentPage((p) => p + 1)} />
              </Pagination>
            </div>

          </Col>

          {/* === RIGHT COLUMN: SIDEBAR WIDGETS === */}
          <Col lg={4}>
            
            {/* Newsletter Subscription Box */}
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm mb-4">
              <Badge bg="info" className="text-dark fw-bold mb-2 align-self-start">Weekly Digest</Badge>
              <h5 className="fw-bold text-white mb-2">Join 65,000+ Engineers</h5>
              <p className="text-secondary small mb-3">
                Get our curated weekend teardown of production architecture diagrams, AI papers, and code repositories.
              </p>

              {newsletterSubscribed ? (
                <div className="alert alert-success py-2 px-3 small rounded-3 mb-0">
                  🎉 Subscribed! Check your inbox for our latest edition.
                </div>
              ) : (
                <Form onSubmit={handleNewsletterSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small py-2"
                    />
                  </Form.Group>
                  <Button variant="info" type="submit" className="w-100 rounded-pill fw-bold text-dark shadow-sm">
                    Subscribe Free
                  </Button>
                </Form>
              )}
            </Card>

            {/* Trending / Popular Posts Widget */}
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm mb-4">
              <h5 className="fw-bold text-white mb-3">Trending This Week</h5>
              <div className="d-flex flex-column gap-3">
                {trendingBlogPosts.map((post) => (
                  <div key={post.id} className="d-flex align-items-center gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-3 object-fit-cover shadow-sm flex-shrink-0"
                      style={{ width: '65px', height: '65px' }}
                    />
                    <div>
                      <h6 className="fw-semibold text-white small mb-1 lh-sm">
                        <Link to="/blog-details" className="text-white text-decoration-none hover-text-info">
                          {post.title}
                        </Link>
                      </h6>
                      <small className="text-secondary d-block" style={{ fontSize: '0.75rem' }}>
                        📅 {post.date} • ⏱️ {post.readTime}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tag Cloud Widget */}
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm">
              <h5 className="fw-bold text-white mb-3">Explore by Tags</h5>
              <div className="d-flex flex-wrap gap-2">
                {blogTags.map((tag, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant={selectedTag === tag ? 'info' : 'outline-secondary'}
                    className={`rounded-pill px-3 py-1 small ${selectedTag === tag ? 'text-dark fw-bold' : 'text-light'}`}
                    onClick={() => {
                      setSelectedTag(selectedTag === tag ? '' : tag);
                      setSearchQuery(selectedTag === tag ? '' : tag);
                    }}
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Blog;