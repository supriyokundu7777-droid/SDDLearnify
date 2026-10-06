import { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useApp } from '../context/AppContext';

const searchableItems = [
  // Interactive Tools & Practice Arenas
  { title: 'Interactive Coding Lab & Test Runner', path: '/coding-lab', category: 'Practice', icon: '💻', keywords: 'code sandbox arena leetcode tests javascript algorithm' },
  { title: 'Skill Assessment & Certification Exam', path: '/assessment', category: 'Practice', icon: '🎯', keywords: 'exam assessment test quiz certificate score timed' },
  { title: 'Virtual Study Lounge & Pomodoro', path: '/study-lounge', category: 'Practice', icon: '🧘', keywords: 'pomodoro timer ambient rain sounds focus tasks lounge' },
  { title: 'Tech Interview Prep & Architecture', path: '/interview-prep', category: 'Practice', icon: '💼', keywords: 'interview prep faang questions system design react' },
  { title: 'Developer Cheat Sheets & Commands', path: '/cheat-sheets', category: 'Reference', icon: '⚡', keywords: 'cheat sheet git docker sql postgres linux commands' },
  { title: 'Live Classroom & Video Player', path: '/classroom', category: 'Tool', icon: '▶️', keywords: 'video learn player lesson code' },
  { title: 'Interactive Engineering Flashcards', path: '/flashcards', category: 'Tool', icon: '⚡', keywords: 'flashcard active recall spaced repetition interview questions' },
  { title: 'Student Progress Dashboard', path: '/dashboard', category: 'Tool', icon: '📊', keywords: 'dashboard streak stats enrolled points' },
  { title: 'Verifiable Certificate Portal', path: '/certificate', category: 'Tool', icon: '🏆', keywords: 'certificate credential verification pdf print' },
  { title: 'Career Roadmaps & Milestones', path: '/discover-more', category: 'Tool', icon: '🗺️', keywords: 'roadmaps curriculum tracks milestones' },
  { title: 'Smart Course Matcher Quiz', path: '/explore-course', category: 'Tool', icon: '🎯', keywords: 'matcher quiz recommend path' },

  // Courses
  { title: 'Full-Stack Web Development Bootcamp with React 19 & Node', path: '/course-details', category: 'Course', icon: '💻', keywords: 'react node javascript fullstack' },
  { title: 'Mastering AI Agents & LangChain in Python', path: '/classroom?courseId=2', category: 'Course', icon: '🤖', keywords: 'ai python agents langchain rag llm' },
  { title: 'Next.js 15, Server Actions & App Router In-Depth', path: '/classroom?courseId=3', category: 'Course', icon: '🚀', keywords: 'nextjs react app router server actions' },
  { title: 'Enterprise Kubernetes & Cloud-Native DevOps CI/CD', path: '/course?category=Cloud%20%26%20DevOps', category: 'Course', icon: '☁️', keywords: 'kubernetes docker devops helm aws' },
  { title: 'Modern UI/UX Design Systems & Figma Masterclass', path: '/course?category=UI/UX%20Design', category: 'Course', icon: '🎨', keywords: 'figma design ui ux prototype' },
  { title: 'Cybersecurity Threat Intelligence & Ethical Hacking', path: '/course?category=Cyber%20Security', category: 'Course', icon: '🛡️', keywords: 'cyber security hacking network threat' },

  // Account & Commerce
  { title: 'My Enrolled Courses', path: '/my-courses', category: 'Account', icon: '🎓', keywords: 'enrolled learning classroom my courses' },
  { title: 'My Wishlist', path: '/wishlist', category: 'Account', icon: '❤️', keywords: 'saved wishlist courses' },
  { title: 'Shopping Cart', path: '/cart', category: 'Shop', icon: '🛒', keywords: 'cart checkout buy order' },
  { title: 'Student Profile & Preferences', path: '/profile', category: 'Account', icon: '⚙️', keywords: 'settings profile account bio skills' },
  { title: 'Pricing & Pro Subscription Plans', path: '/pricing-plan', category: 'Pages', icon: '💳', keywords: 'pricing plan subscription pro unlimited' },
  { title: 'Frequently Asked Questions (FAQ)', path: '/faq', category: 'Pages', icon: '❓', keywords: 'help faq support questions' }
];

const CommandPalette = ({ show, onHide }) => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useApp();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = searchableItems.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  const handleSelect = (item) => {
    onHide();
    navigate(item.path);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName="border-0 rounded-4 overflow-hidden shadow-2xl"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="bg-dark text-white border border-secondary border-opacity-40">
        
        {/* Search Input Bar */}
        <div className="p-3 border-bottom border-secondary border-opacity-25 d-flex align-items-center gap-3">
          <span className="text-secondary fs-5">🔍</span>
          <Form.Control
            type="text"
            placeholder="Type a course, tool, topic, or command (e.g. Flashcards, AI, Classroom)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            autoFocus
            className="bg-transparent text-white border-0 fs-5 p-0 shadow-none"
          />
          <Badge bg="secondary" className="px-2 py-1 font-mono text-uppercase" style={{ fontSize: '0.65rem' }}>
            ESC to close
          </Badge>
        </div>

        {/* Quick Action Ribbon */}
        <div className="d-flex align-items-center justify-content-between px-3 py-2 bg-secondary bg-opacity-10 border-bottom border-secondary border-opacity-25 small text-secondary">
          <div className="d-flex gap-2">
            <span className="badge bg-dark border border-secondary border-opacity-50 text-light">↑↓ Navigate</span>
            <span className="badge bg-dark border border-secondary border-opacity-50 text-light">↵ Select</span>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-link text-info text-decoration-none p-0 fw-semibold d-flex align-items-center gap-1"
            onClick={() => {
              toggleTheme();
              onHide();
            }}
          >
            <span>{theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}</span>
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 overflow-y-auto" style={{ maxHeight: '420px' }}>
          {filteredItems.length === 0 ? (
            <div className="text-center py-4 text-secondary small">
              No results found for &ldquo;{query}&rdquo;. Try &lsquo;React&rsquo;, &lsquo;Python&rsquo;, or &lsquo;Classroom&rsquo;.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.title + index}
                  className={`p-3 rounded-3 d-flex align-items-center justify-content-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-info bg-opacity-20 border border-info border-opacity-50 text-white'
                      : 'hover-bg-secondary text-light'
                  }`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span className="fs-5">{item.icon}</span>
                    <div>
                      <div className="fw-semibold text-white">{item.title}</div>
                      <span className="text-secondary small font-mono">{item.path}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <Badge
                      bg={
                        item.category === 'Tool'
                          ? 'info'
                          : item.category === 'Course'
                          ? 'primary'
                          : 'secondary'
                      }
                      className="px-2 py-1 text-uppercase"
                      style={{ fontSize: '0.65rem' }}
                    >
                      {item.category}
                    </Badge>
                    {isSelected && <span className="text-info fw-bold">&rarr;</span>}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </Modal>
  );
};

export default CommandPalette;
