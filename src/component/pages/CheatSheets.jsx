import { useState, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import { useApp } from '../../context/AppContext';
import { playClickSound } from '../../utils/soundEffects';

const CHEAT_DATA = [
  // React 19
  {
    id: 1,
    category: 'React 19',
    title: 'useActionState (Async Form State)',
    desc: 'Manages async server actions with pending status and returned state.',
    snippet: `const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
  const result = await updateUser(formData);
  return result;
}, null);`
  },
  {
    id: 2,
    category: 'React 19',
    title: 'useOptimistic (Zero-Latency UI)',
    desc: 'Applies optimistic speculative updates before server mutations finish.',
    snippet: `const [optimisticMessages, setOptimistic] = useOptimistic(
  messages,
  (state, newMsg) => [...state, { ...newMsg, pending: true }]
);`
  },
  {
    id: 3,
    category: 'React 19',
    title: 'use (Promise & Context Unwrapper)',
    desc: 'Unwraps promises or contexts conditionally inside render or loops.',
    snippet: `import { use } from 'react';

function UserProfile({ userPromise }) {
  const user = use(userPromise); // Suspends until promise resolves!
  return <h2>{user.name}</h2>;
}`
  },

  // Git
  {
    id: 4,
    category: 'Git & GitHub',
    title: 'Interactive Rebase (Clean Git History)',
    desc: 'Squash, edit, or reword the last N commits cleanly before pushing.',
    snippet: `git rebase -i HEAD~4
# In editor: replace 'pick' with 'squash' (or 's') on commits you wish to merge.`
  },
  {
    id: 5,
    category: 'Git & GitHub',
    title: 'Undo Last Commit Keeping Changes Staged',
    desc: 'Soft reset moves HEAD back one commit while preserving working changes.',
    snippet: `git reset --soft HEAD~1`
  },
  {
    id: 6,
    category: 'Git & GitHub',
    title: 'Git Reflog (Rescue Lost Commits)',
    desc: 'View record of where Git references were pointed even after hard reset.',
    snippet: `git reflog
git checkout <commit-hash-from-reflog>`
  },

  // Docker
  {
    id: 7,
    category: 'Docker & Containers',
    title: 'Prune All Unused Containers, Networks & Images',
    desc: 'Cleans up dangling Docker resources to free GBs of disk space.',
    snippet: `docker system prune -a --volumes -f`
  },
  {
    id: 8,
    category: 'Docker & Containers',
    title: 'Execute Interactive Shell inside Running Container',
    desc: 'Open a bash terminal inside an active Docker container.',
    snippet: `docker exec -it <container_id_or_name> /bin/sh`
  },
  {
    id: 9,
    category: 'Docker & Containers',
    title: 'Run PostgreSQL Container with Volume & Port',
    desc: 'Spins up local Postgres with persistent data storage.',
    snippet: `docker run --name pg-local \\
  -e POSTGRES_PASSWORD=secret \\
  -e POSTGRES_DB=learnify \\
  -p 5432:5432 \\
  -v pgdata:/var/lib/postgresql/data \\
  -d postgres:16-alpine`
  },

  // SQL & Postgres
  {
    id: 10,
    category: 'SQL & Postgres',
    title: 'Window Function: ROW_NUMBER() and DENSE_RANK()',
    desc: 'Compute ranking partitioned by group without collapsing rows.',
    snippet: `SELECT 
  id, student_name, course_id, score,
  DENSE_RANK() OVER (PARTITION BY course_id ORDER BY score DESC) as rank
FROM exam_submissions;`
  },
  {
    id: 11,
    category: 'SQL & Postgres',
    title: 'Common Table Expressions (CTE) with Recursive Walk',
    desc: 'Query hierarchical category trees or graph relations.',
    snippet: `WITH RECURSIVE CategoryTree AS (
  SELECT id, name, parent_id, 1 as depth
  FROM categories WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, ct.depth + 1
  FROM categories c
  JOIN CategoryTree ct ON c.parent_id = ct.id
)
SELECT * FROM CategoryTree;`
  },

  // Linux & Shell
  {
    id: 12,
    category: 'Linux & Shell',
    title: 'Find Process by Port & Kill Gracefully',
    desc: 'Identify what is listening on a locked port (e.g. 3000, 5432) and stop it.',
    snippet: `# macOS / Linux:
lsof -i :3000
kill -9 <PID>

# Windows PowerShell:
netstat -ano | findstr :3000
Stop-Process -Id <PID> -Force`
  }
];

const CATEGORIES = ['All', 'React 19', 'Git & GitHub', 'Docker & Containers', 'SQL & Postgres', 'Linux & Shell'];

const CheatSheets = () => {
  const { showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, snippet) => {
    playClickSound();
    navigator.clipboard.writeText(snippet);
    setCopiedId(id);
    showToast('Copied to Clipboard!', 'Snippet copied to your clipboard.', 'success');
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const filtered = useMemo(() => {
    return CHEAT_DATA.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const text = (item.title + ' ' + item.desc + ' ' + item.snippet).toLowerCase();
      const matchSearch = !searchQuery.trim() || text.includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="cheatsheets-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        {/* Header */}
        <div className="text-center mb-5" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1.5 rounded-pill mb-3">
            ⚡ Quick Engineering Reference
          </Badge>
          <h1 className="display-6 fw-bold text-white mb-3">
            Developer Cheat Sheets & Command Hub
          </h1>
          <p className="text-secondary leading-relaxed">
            Essential production commands, React 19 hooks, Docker container flags, and high-performance SQL queries. 1-click copy for immediate terminal paste.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div className="d-flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm rounded-pill px-3 py-1.5 transition-all ${
                  selectedCategory === cat
                    ? 'btn-info text-dark fw-bold shadow'
                    : 'btn-outline-secondary text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Form.Control
            type="text"
            placeholder="Search commands (e.g. rebase, prune, CTE)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-black text-light border-secondary border-opacity-30 rounded-pill px-3 py-1.5 shadow-none w-100"
            style={{ maxWidth: '320px' }}
          />
        </div>

        {/* Grid of Cheat Cards */}
        <Row className="gy-4">
          {filtered.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <Col key={item.id} lg={6}>
                <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 h-100 d-flex flex-column">
                  <Card.Header className="bg-secondary bg-opacity-10 border-bottom border-secondary border-opacity-20 p-3 d-flex justify-content-between align-items-center">
                    <div>
                      <Badge bg="secondary" className="px-2 py-0.5 rounded-pill small me-2">
                        {item.category}
                      </Badge>
                      <strong className="text-white small">{item.title}</strong>
                    </div>
                    <Button
                      variant={isCopied ? 'success' : 'outline-info'}
                      size="sm"
                      className="rounded-pill px-3 py-0.5 text-xs font-semibold"
                      onClick={() => handleCopy(item.id, item.snippet)}
                    >
                      {isCopied ? '✓ Copied' : '📋 Copy'}
                    </Button>
                  </Card.Header>

                  <Card.Body className="p-3 d-flex flex-column flex-grow-1">
                    <p className="text-secondary small mb-2">{item.desc}</p>
                    <pre className="p-3 bg-black rounded-3 text-info font-monospace small mb-0 border border-secondary border-opacity-20 flex-grow-1 overflow-x-auto">
                      <code>{item.snippet}</code>
                    </pre>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CheatSheets;
