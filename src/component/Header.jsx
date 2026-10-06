import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../assets/LOGO.jpeg';
import { useApp } from '../context/AppContext';
import CommandPalette from './CommandPalette';

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, cartCount, wishlistCount, theme, toggleTheme, soundEnabled, setSoundEnabled } = useApp();
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  const handleSignOut = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    logout();
    navigate('/login');
  };
  const [notifications] = useState([
    { id: 1, title: 'Live coding session starting soon', time: '10m ago', unread: true },
    { id: 2, title: 'AI Agents Certificate issued!', time: '1h ago', unread: false },
    { id: 3, title: '50% Flash deal on Next.js 15 Pro', time: '3h ago', unread: false }
  ]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky-top header-root">
      {/* 1. Top Mini Bar / Notification Banner */}
      <div className="bg-black bg-opacity-75 text-secondary border-bottom border-secondary border-opacity-25 py-1 px-3 d-none d-lg-block">
        <Container fluid="xxl" className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.8rem' }}>
          <div className="d-flex align-items-center gap-2 text-nowrap">
            <span className="badge bg-danger-subtle text-danger px-2 py-0.5 rounded-pill fw-semibold" style={{ fontSize: '0.72rem' }}>
              Flash Deal
            </span>
            <span className="text-secondary">Get 20% off on all certification tracks with code <strong className="text-white">LEARN2026</strong></span>
          </div>

          <div className="d-flex align-items-center gap-3 text-nowrap">
            {isAuthenticated ? (
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 rounded-pill px-2 py-0.5" style={{ fontSize: '0.72rem' }}>
                  🔥 {user?.streak || 7}-Day Streak
                </span>
                <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 rounded-pill px-2 py-0.5" style={{ fontSize: '0.72rem' }}>
                  ⚡ {user?.points || 1450} XP
                </span>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2 text-secondary" style={{ fontSize: '0.75rem' }}>
                <span>👋 Welcome to Learnify!</span>
                <Link to="/login" className="text-info text-decoration-none fw-semibold">Sign In</Link>
                <span>•</span>
                <Link to="/register" className="text-warning text-decoration-none fw-semibold">Register Free</Link>
              </div>
            )}
            <span className="text-secondary opacity-50">|</span>
            <Link to="/coding-lab" className="text-info text-decoration-none fw-semibold">💻 Coding Lab</Link>
            <Link to="/study-lounge" className="text-warning text-decoration-none fw-semibold">🧘 Focus Lounge</Link>
            <Link to="/classroom" className="text-light text-decoration-none">▶ Classroom</Link>
            <Link to="/contact" className="text-secondary text-decoration-none">Support</Link>
          </div>
        </Container>
      </div>

      {/* 2. Main Navigation Bar */}
      <Navbar 
        expand="xl" 
        data-bs-theme={theme}
        className="py-2 shadow-sm border-bottom border-secondary border-opacity-25 main-navbar"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: theme === 'dark' ? 'rgba(10, 13, 20, 0.95)' : 'rgba(255, 255, 255, 0.96)'
        }}
      >
        <Container fluid="xxl" className="px-3 px-lg-4">
          
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 fw-bold me-2 me-lg-3 flex-shrink-0">
            <div className="brand-logo-box p-1 rounded-3 d-flex align-items-center justify-content-center">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block rounded-2"
                alt="Learnify Logo"
              />
            </div>
            <span className="tracking-tight text-white fs-5 fw-bold">
              SDD<span className="text-info">Learnify</span>
            </span>
          </Navbar.Brand>

          {/* Quick Search Spotlight Trigger (Desktop Pill) */}
          <div
            className="d-none d-md-flex align-items-center me-2 me-xl-3 flex-shrink-0 cursor-pointer"
            onClick={() => setShowCommandPalette(true)}
            title="Press Ctrl+K to search courses and tools"
          >
            <div className="nav-search-btn">
              <span className="d-flex align-items-center gap-2 overflow-hidden">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="text-info flex-shrink-0">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <span className="text-truncate">Search courses...</span>
              </span>
              <kbd className="nav-search-kbd">
                Ctrl+K
              </kbd>
            </div>
          </div>

          {/* Mobile Quick Action Buttons (Search, Theme, Cart) */}
          <div className="d-flex align-items-center gap-1 d-xl-none ms-auto me-2">
            <button
              type="button"
              className="nav-icon-btn shadow-none"
              style={{ width: 34, height: 34, minWidth: 34, minHeight: 34 }}
              onClick={() => setShowCommandPalette(true)}
              aria-label="Quick Search"
              title="Search"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>

            <button
              type="button"
              className="nav-icon-btn shadow-none"
              style={{ width: 34, height: 34, minWidth: 34, minHeight: 34 }}
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              <span style={{ fontSize: '0.85rem' }}>{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>

            <Link 
              to="/cart" 
              className="nav-icon-btn position-relative"
              style={{ width: 34, height: 34, minWidth: 34, minHeight: 34 }}
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && (
                <span className="nav-badge-count bg-info text-dark" style={{ width: 14, height: 14, fontSize: '0.55rem' }}>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none p-1" />

          {/* Collapsible Content */}
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto my-3 my-xl-0 align-items-xl-center gap-1">
              
              {/* Home Menu */}
              <NavDropdown title="Home" id="home-dropdown" className="fw-medium">
                <NavDropdown.Item as={NavLink} to="/">Flagship Showcase</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home-one">Home Style One</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home-two">Home Style Two</NavDropdown.Item>
              </NavDropdown>

              {/* Courses & Career Tracks */}
              <NavDropdown title="Courses" id="courses-dropdown" className="fw-medium">
                <div className="px-3 py-1 text-uppercase text-secondary fw-bold" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                  Career Tracks
                </div>
                <NavDropdown.Item as={NavLink} to="/course?category=Web%20Development">💻 Frontend & Full Stack</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course?category=UI/UX%20Design">🎨 UI/UX & Product Design</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course?category=Data%20Science%20%26%20AI">🤖 Data Science & AI</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course?category=Cloud%20%26%20DevOps">☁️ Cloud & DevOps</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course?category=Cyber%20Security">🛡️ Cyber Security</NavDropdown.Item>
                <NavDropdown.Divider />
                <div className="px-3 py-1 text-uppercase text-secondary fw-bold" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                  Catalog Views
                </div>
                <NavDropdown.Item as={NavLink} to="/course">📚 Full Course Catalog</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course-one">▦ Course Grid View</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course-two">☰ Course List View</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/course-three">⚡ Facet Filter View</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/discover-more" className="text-info fw-semibold">
                  🗺️ Tech Career Roadmaps &rarr;
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/explore-course" className="text-success fw-semibold">
                  🎯 Smart Course Matcher &rarr;
                </NavDropdown.Item>
              </NavDropdown>

              {/* Learning / Classroom Menu */}
              <NavDropdown title="Learning" id="classroom-dropdown" className="fw-medium">
                <NavDropdown.Item as={NavLink} to="/classroom" className="fw-semibold text-info">
                  ▶ Live Classroom Player
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/dashboard">
                  📊 Student Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/my-courses">
                  🎓 My Enrolled Courses
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/certificate/2">
                  🏆 Verifiable Certificate
                </NavDropdown.Item>
              </NavDropdown>

              {/* Practice & Labs Menu */}
              <NavDropdown title="Practice & Labs" id="practice-dropdown" className="fw-medium">
                <div className="px-3 py-1 text-uppercase text-info fw-bold" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                  Interactive Arenas
                </div>
                <NavDropdown.Item as={NavLink} to="/coding-lab" className="fw-semibold text-info">
                  💻 Coding Lab & Test Runner
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/assessment" className="fw-semibold text-success">
                  🎯 Skill Assessment Exam
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/study-lounge" className="fw-semibold text-warning">
                  🧘 Study Lounge & Pomodoro
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <div className="px-3 py-1 text-uppercase text-secondary fw-bold" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                  Preparation Tools
                </div>
                <NavDropdown.Item as={NavLink} to="/interview-prep">
                  💼 Tech Interview Prep Hub
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/cheat-sheets">
                  ⚡ Developer Cheat Sheets
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/flashcards">
                  🗂️ Engineering Flashcards
                </NavDropdown.Item>
              </NavDropdown>

              {/* Shop Menu */}
              <NavDropdown title="Shop" id="shop-dropdown" className="fw-medium">
                <NavDropdown.Item as={NavLink} to="/shop">Shop Grid</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/single-shop">Product Details</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/cart">
                  Shopping Cart ({cartCount})
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/checkout">Checkout</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/wishlist">
                  My Wishlist ({wishlistCount})
                </NavDropdown.Item>
              </NavDropdown>

              {/* Pages Menu */}
              <NavDropdown title="Pages" id="pages-dropdown" className="fw-medium">
                <NavDropdown.Item as={NavLink} to="/pages" className="fw-semibold text-info">
                  🌐 Platform Directory
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/about">About SDDLearnify</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/instructor">Instructors</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/instructor-details">Instructor Profile</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/events">Events & Hackathons</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/single-event">Event Details</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/pricing-plan">Pricing Plans</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/faq">FAQ & Help</NavDropdown.Item>
                {isAuthenticated ? (
                  <NavDropdown.Item onClick={handleSignOut} className="text-danger" role="button">
                    🚪 Sign Out ({user?.name ? user.name.split(' ')[0] : 'User'})
                  </NavDropdown.Item>
                ) : (
                  <>
                    <NavDropdown.Item as={NavLink} to="/login">Sign In</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/register">Create Account</NavDropdown.Item>
                  </>
                )}
              </NavDropdown>

              {/* Blog Menu */}
              <NavDropdown title="Blog" id="blog-dropdown" className="fw-medium">
                <NavDropdown.Item as={NavLink} to="/blog">Blog Standard</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog-details">Blog Single Post</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/contact" className="fw-medium px-2">
                Contact
              </Nav.Link>
            </Nav>

            {/* Right Action Icons & Profile */}
            <div className="d-flex align-items-center gap-2 pt-3 pt-xl-0 border-top border-xl-0 border-secondary border-opacity-25 flex-shrink-0">
              
              {/* Audio Sound Toggle */}
              <button
                type="button"
                className="nav-icon-btn shadow-none"
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  localStorage.setItem('learnify_sound', String(next));
                }}
                title={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
                aria-label="Toggle Sound Effects"
              >
                <span style={{ fontSize: '1rem' }}>{soundEnabled ? '🔊' : '🔇'}</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                className="nav-icon-btn shadow-none"
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
              >
                <span style={{ fontSize: '1rem' }}>{theme === 'dark' ? '☀️' : '🌙'}</span>
              </button>

              {/* Notification Center Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle 
                  as="button" 
                  className="nav-icon-btn shadow-none border-0"
                  aria-label="Notifications"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <span className="nav-badge-dot" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-dark shadow-lg border-secondary border-opacity-25 mt-2" style={{ minWidth: '280px' }}>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom border-secondary border-opacity-25">
                    <h6 className="mb-0 fw-semibold text-white fs-6">Notifications</h6>
                    <span className="badge bg-secondary" style={{ fontSize: '0.65rem' }}>3 New</span>
                  </div>
                  {notifications.map((item) => (
                    <Dropdown.Item key={item.id} className="px-3 py-2 border-bottom border-secondary border-opacity-10">
                      <div className="small text-white fw-medium">{item.title}</div>
                      <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{item.time}</div>
                    </Dropdown.Item>
                  ))}
                  <div className="text-center p-2">
                    <Link to="/dashboard" className="text-info text-decoration-none small fw-semibold">View dashboard</Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              {/* Wishlist Link */}
              <Link 
                to="/wishlist" 
                className="nav-icon-btn"
                title="Wishlist"
                aria-label="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistCount > 0 && (
                  <span className="nav-badge-count bg-danger text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Link */}
              <Link 
                to="/cart" 
                className="nav-icon-btn"
                title="Shopping Cart"
                aria-label="Shopping Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="nav-badge-count bg-info text-dark">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Account / Auth Actions */}
              {isAuthenticated ? (
                <>
                  <NavDropdown
                    align="end"
                    title={
                      <div className="nav-user-avatar">
                        {user?.initials || 'SK'}
                      </div>
                    }
                    id="user-account-dropdown"
                    className="no-caret"
                  >
                    <div className="px-3 py-2 border-bottom border-secondary border-opacity-25">
                      <p className="mb-0 fw-semibold text-white">{user?.name || 'Supriyo Kundu'}</p>
                      <small className="text-secondary d-block">{user?.email || 'student@learnify.io'}</small>
                      <span className="badge bg-info-subtle text-info mt-1" style={{ fontSize: '0.65rem' }}>{user?.role || 'Pro Student'}</span>
                    </div>
                    <NavDropdown.Item as={Link} to="/dashboard" className="py-2">
                      <span className="me-2">📊</span>Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/classroom" className="py-2 text-info fw-semibold">
                      <span className="me-2">▶</span>Live Classroom
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/flashcards" className="py-2 text-warning fw-semibold">
                      <span className="me-2">⚡</span>Engineering Flashcards
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/my-courses" className="py-2">
                      <span className="me-2">🎓</span>My Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/wishlist" className="py-2">
                      <span className="me-2">❤️</span>My Wishlist ({wishlistCount})
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile" className="py-2">
                      <span className="me-2">⚙️</span>Profile & Preferences
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSignOut} className="text-danger py-2" role="button">
                      <span className="me-2">🚪</span>Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Classroom CTA Button */}
                  <Button 
                    as={Link} 
                    to="/classroom" 
                    variant="info" 
                    className="rounded-pill px-3 py-1 fw-bold d-none d-lg-inline-flex align-items-center gap-1 shadow-sm border-0 flex-shrink-0 ms-1"
                    style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                  >
                    <span>Classroom</span>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </Button>
                </>
              ) : (
                <div className="d-flex align-items-center gap-2 ms-2">
                  <Button 
                    as={Link} 
                    to="/login" 
                    variant="outline-info" 
                    size="sm" 
                    className="rounded-pill px-3 py-1 fw-semibold shadow-none border-secondary border-opacity-50"
                    style={{ fontSize: '0.82rem', whiteSpace: 'nowrap' }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    as={Link} 
                    to="/register" 
                    variant="info" 
                    size="sm" 
                    className="rounded-pill px-3 py-1 fw-bold text-dark shadow-sm"
                    style={{ fontSize: '0.82rem', whiteSpace: 'nowrap' }}
                  >
                    Get Started
                  </Button>
                </div>
              )}

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Global Command Palette Modal */}
      <CommandPalette
        show={showCommandPalette}
        onHide={() => setShowCommandPalette(false)}
      />
    </header>
  );
};

export default Header;