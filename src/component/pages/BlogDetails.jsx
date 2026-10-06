import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {
  articleData,
  articleComments,
  relatedArticles,
  trendingSidebarArticles
} from '../../user/data/BlogDetails';

const BlogDetails = () => {
  const [commentsList, setCommentsList] = useState(articleComments);
  const [newComment, setNewComment] = useState({ name: '', email: '', message: '' });
  const [submittedAlert, setSubmittedAlert] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.message) return;

    const newEntry = {
      id: commentsList.length + 1,
      author: newComment.name,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      date: 'Just now',
      comment: newComment.message
    };

    setCommentsList([newEntry, ...commentsList]);
    setNewComment({ name: '', email: '', message: '' });
    setSubmittedAlert(true);
    setTimeout(() => setSubmittedAlert(false), 3500);
  };

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="blog-details-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. BREADCRUMB */}
        <div className="d-flex align-items-center gap-2 small text-secondary mb-4">
          <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
          <span>/</span>
          <Link to="/blog" className="text-secondary text-decoration-none hover-text-white">Blog</Link>
          <span>/</span>
          <span className="text-info fw-medium">{articleData.category}</span>
          <span>/</span>
          <span className="text-light text-truncate" style={{ maxWidth: '300px' }}>{articleData.title}</span>
        </div>

        {/* 2. ARTICLE HEADER */}
        <Row className="justify-content-center mb-4 text-center text-md-start">
          <Col lg={10}>
            <Badge bg="info" className="text-dark fw-bold px-3 py-2 rounded-pill mb-3">
              {articleData.category}
            </Badge>
            <h1 className="display-5 fw-bold text-white mb-3 lh-sm">
              {articleData.title}
            </h1>
            <p className="lead text-secondary fs-6 mb-4">
              {articleData.subtitle}
            </p>

            {/* Author Meta Strip */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pb-4 border-bottom border-secondary border-opacity-25">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={articleData.author.avatar}
                  alt={articleData.author.name}
                  className="rounded-circle border border-info border-2"
                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className="fw-bold text-white mb-0 small">{articleData.author.name}</h6>
                  <small className="text-secondary">{articleData.author.role}</small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 small text-secondary">
                <span>📅 {articleData.publishDate}</span>
                <span>•</span>
                <span>⏱️ {articleData.readTime}</span>
                <span>•</span>
                <span>👁️ {articleData.viewsCount} views</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* 3. MAIN CONTENT WITH SIDEBAR */}
        <Row className="g-5 justify-content-center">
          
          {/* === LEFT COLUMN: ARTICLE BODY === */}
          <Col lg={7}>
            {/* Banner Image */}
            <div className="rounded-4 overflow-hidden border border-secondary border-opacity-25 mb-4 shadow">
              <img
                src={articleData.bannerImage}
                alt={articleData.title}
                className="w-100 object-fit-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>

            {/* Share & Bookmarks Bar */}
            <div className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 mb-4 small">
              <span className="text-secondary fw-semibold">Share this deep dive:</span>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-light" className="rounded-pill px-3" onClick={handleShareClick}>
                  {copiedLink ? '✓ Copied Link' : '🔗 Copy Link'}
                </Button>
                <Button size="sm" variant="outline-info" className="rounded-pill px-3">
                  𝕏 Share
                </Button>
                <Button size="sm" variant="outline-primary" className="rounded-pill px-3">
                  in LinkedIn
                </Button>
              </div>
            </div>

            {/* Render Article Blocks */}
            <article className="article-body text-secondary leading-relaxed mb-5">
              {articleData.contentBlocks.map((block, idx) => {
                if (block.type === 'heading') {
                  return (
                    <h3 key={idx} className="fw-bold text-white mt-5 mb-3">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === 'code') {
                  return (
                    <Card key={idx} className="bg-black bg-opacity-70 border border-secondary border-opacity-50 rounded-4 overflow-hidden my-4 shadow">
                      <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-secondary bg-opacity-10 border-bottom border-secondary border-opacity-25 small font-monospace text-secondary">
                        <span>TypeScript / Server Action</span>
                        <span className="text-info">next@15.0</span>
                      </div>
                      <pre className="p-3 text-info small font-monospace mb-0 overflow-x-auto" style={{ lineHeight: '1.6' }}>
                        <code>{block.code}</code>
                      </pre>
                    </Card>
                  );
                }
                return (
                  <p key={idx} className="fs-6 mb-3 text-light" style={{ lineHeight: '1.8' }}>
                    {block.text}
                  </p>
                );
              })}
            </article>

            {/* Tag Pills */}
            <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-25 mb-5">
              <span className="small text-secondary me-2 align-self-center">Tags:</span>
              {articleData.tags.map((t, idx) => (
                <Badge key={idx} bg="secondary" className="bg-opacity-25 text-info border border-secondary border-opacity-50 px-3 py-2 rounded-pill small fw-normal">
                  #{t}
                </Badge>
              ))}
            </div>

            {/* Author Profile Card */}
            <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-5 shadow-sm">
              <div className="d-flex flex-column flex-sm-row gap-3 align-items-center text-center text-sm-start">
                <img
                  src={articleData.author.avatar}
                  alt={articleData.author.name}
                  className="rounded-circle border border-info border-2 shadow"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div>
                  <small className="text-info fw-bold text-uppercase d-block mb-1">About The Author</small>
                  <h5 className="fw-bold text-white mb-1">{articleData.author.name}</h5>
                  <p className="text-secondary small mb-0">{articleData.author.bio}</p>
                </div>
              </div>
            </Card>

            {/* Comments & Discussion */}
            <div className="mb-5">
              <h4 className="fw-bold text-white mb-4">
                Discussion & Feedback ({commentsList.length})
              </h4>

              {submittedAlert && (
                <Alert variant="success" className="py-2 px-3 small rounded-3 border-0 mb-4">
                  ✓ Your comment has been posted to the discussion thread!
                </Alert>
              )}

              {/* Add Comment Form */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-4">
                <h6 className="fw-bold text-white mb-3">Leave a Reply</h6>
                <Form onSubmit={handleCommentSubmit}>
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Your Name *"
                        value={newComment.name}
                        onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="email"
                        placeholder="Your Email *"
                        value={newComment.email}
                        onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                        required
                        className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small"
                      />
                    </Col>
                  </Row>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Share your thoughts, questions, or architectural critiques..."
                    value={newComment.message}
                    onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                    required
                    className="bg-dark border-secondary border-opacity-50 text-white rounded-3 shadow-none small mb-3"
                  />
                  <Button variant="info" type="submit" size="sm" className="rounded-pill px-4 fw-bold text-dark shadow-sm">
                    Post Comment
                  </Button>
                </Form>
              </Card>

              {/* Existing Comments List */}
              <div className="d-flex flex-column gap-3">
                {commentsList.map((c) => (
                  <Card key={c.id} className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <img src={c.avatar} alt={c.author} className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
                        <strong className="text-white small">{c.author}</strong>
                      </div>
                      <small className="text-secondary">{c.date}</small>
                    </div>
                    <p className="text-light small mb-0 ps-4">{c.comment}</p>
                  </Card>
                ))}
              </div>
            </div>

          </Col>

          {/* === RIGHT COLUMN: SIDEBAR === */}
          <Col lg={3}>
            <div className="sticky-lg-top" style={{ top: '90px' }}>
              
              {/* Table of Contents Pill */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm mb-4">
                <h6 className="fw-bold text-white mb-3">Quick Navigation</h6>
                <ul className="list-unstyled d-flex flex-column gap-2 small mb-0">
                  <li><a href="#section-1" className="text-secondary text-decoration-none hover-text-info">1. Server Actions in React 19</a></li>
                  <li><a href="#section-2" className="text-secondary text-decoration-none hover-text-info">2. Partial Prerendering (PPR)</a></li>
                  <li><a href="#section-3" className="text-secondary text-decoration-none hover-text-info">3. Code Examples & Cache Tags</a></li>
                  <li><a href="#section-4" className="text-secondary text-decoration-none hover-text-info">4. Reader Discussion & Q&A</a></li>
                </ul>
              </Card>

              {/* Trending Posts Widget */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 text-white shadow-sm mb-4">
                <h6 className="fw-bold text-white mb-3">Trending Reads</h6>
                <div className="d-flex flex-column gap-3">
                  {trendingSidebarArticles.map((t) => (
                    <div key={t.id} className="pb-2 border-bottom border-secondary border-opacity-25">
                      <Link to="/blog-details" className="text-light small fw-medium text-decoration-none hover-text-info d-block lh-sm mb-1">
                        {t.title}
                      </Link>
                      <small className="text-secondary">{t.date}</small>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter Banner */}
              <Card className="bg-info bg-opacity-10 border border-info border-opacity-25 rounded-4 p-4 text-center">
                <h6 className="fw-bold text-white mb-2">Weekly Engineering Memo</h6>
                <p className="text-secondary small mb-3">Get our hand-curated architecture teardowns directly to your inbox.</p>
                <Button as={Link} to="/register" variant="info" size="sm" className="rounded-pill fw-bold text-dark w-100 shadow-sm">
                  Subscribe Free
                </Button>
              </Card>

            </div>
          </Col>

        </Row>

        {/* 4. RELATED ARTICLES STRIP */}
        <section className="pt-5 mt-5 border-top border-secondary border-opacity-25">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <Badge bg="secondary" className="mb-2">Recommended Reading</Badge>
              <h4 className="fw-bold text-white mb-0">More From Our Engineering Journal</h4>
            </div>
            <Link to="/blog" className="text-info text-decoration-none small fw-semibold">
              Browse All Articles &rarr;
            </Link>
          </div>

          <Row className="g-4">
            {relatedArticles.map((rel) => (
              <Col key={rel.id} xs={12} md={4}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm d-flex flex-column">
                  <Card.Img 
                    variant="top" 
                    src={rel.image} 
                    alt={rel.title}
                    style={{ height: '170px', objectFit: 'cover' }} 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <Card.Body className="d-flex flex-column p-3">
                    <span className="text-info small fw-bold text-uppercase mb-1">{rel.category}</span>
                    <Card.Title className="fw-bold fs-6 mb-2 lh-sm">
                      <Link to="/blog-details" className="text-white text-decoration-none hover-text-info">
                        {rel.title}
                      </Link>
                    </Card.Title>
                    <div className="mt-auto pt-2 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center text-secondary small">
                      <span>{rel.date}</span>
                      <span>⏱️ {rel.readTime}</span>
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

export default BlogDetails;