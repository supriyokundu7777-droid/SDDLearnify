import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const careerRoadmaps = [
  {
    id: 'fullstack',
    title: 'Full-Stack Software Architect Track',
    badge: 'Most Popular',
    salary: '₹18 - ₹32 LPA',
    duration: '6 - 9 Months',
    icon: '💻',
    description: 'Master enterprise frontend architectures, serverless edge runtimes, scalable relational databases, and container deployments.',
    milestones: [
      { step: '01', title: 'Modern JavaScript & TypeScript 5', desc: 'Type safety, generics, async event loops, and ES2026 features.' },
      { step: '02', title: 'React 19 & Next.js 15 App Router', desc: 'Server Actions, streaming SSR, partial prerendering, and React Compiler.' },
      { step: '03', title: 'Distributed Microservices & PostgreSQL', desc: 'High-throughput database indexing, connection pooling, and REST/gRPC.' },
      { step: '04', title: 'Containerization & CI/CD Pipelines', desc: 'Docker images, GitHub Actions, and production zero-downtime rollouts.' }
    ],
    recommendedCourse: 'Full-Stack Web Development Bootcamp with React & Node'
  },
  {
    id: 'ai-agents',
    title: 'Autonomous AI & Agentic Systems Engineer',
    badge: 'Highest Demand',
    salary: '₹22 - ₹45 LPA',
    duration: '5 - 8 Months',
    icon: '🤖',
    description: 'Build enterprise-grade AI applications, RAG pipelines, fine-tuned transformer models, and multi-agent collaborative graphs.',
    milestones: [
      { step: '01', title: 'Python 3.12 for High Performance AI', desc: 'Vectorized operations, async I/O, Pydantic data schemas, and FastAPI.' },
      { step: '02', title: 'Vector Embeddings & Hybrid RAG', desc: 'Chunking strategies, dense/sparse embeddings, and Pinecone/Qdrant vector stores.' },
      { step: '03', title: 'LangChain, LlamaIndex & Function Calling', desc: 'Structured outputs, external API tools, and agent memory management.' },
      { step: '04', title: 'Multi-Agent Orchestration with LangGraph', desc: 'Stateful agent loops, human-in-the-loop validation, and evaluation benchmarks.' }
    ],
    recommendedCourse: 'Mastering AI Agents & LangChain in Python'
  },
  {
    id: 'devops-cloud',
    title: 'Cloud DevOps & Site Reliability Engineer',
    badge: 'Enterprise Grade',
    salary: '₹20 - ₹38 LPA',
    duration: '6 - 8 Months',
    icon: '☁️',
    description: 'Architect resilient multi-region infrastructure using Infrastructure-as-Code, Kubernetes clusters, and real-time observability.',
    milestones: [
      { step: '01', title: 'Linux Internals & Bash Automation', desc: 'Process management, networking, systemd, and security permissions.' },
      { step: '02', title: 'Docker Containers & Kubernetes Helm', desc: 'Pod lifecycles, service meshes, configmaps, and ingress controllers.' },
      { step: '03', title: 'Infrastructure as Code (Terraform & AWS)', desc: 'VPCs, IAM policies, auto-scaling groups, and Terraform modules.' },
      { step: '04', title: 'Observability (Prometheus, Grafana & ELK)', desc: 'Distributed tracing, alerting rules, and incident remediation.' }
    ],
    recommendedCourse: 'Enterprise Kubernetes & Cloud-Native DevOps CI/CD'
  },
  {
    id: 'uiux-product',
    title: 'Senior UI/UX & Design Systems Engineer',
    badge: 'Creative Tech',
    salary: '₹15 - ₹28 LPA',
    duration: '4 - 6 Months',
    icon: '🎨',
    description: 'Bridge the divide between Figma design systems and production React frontend component libraries with accessible design tokens.',
    milestones: [
      { step: '01', title: 'Design Foundations & Heuristic Analysis', desc: 'Information architecture, typography scales, contrast standards, and wireframing.' },
      { step: '02', title: 'Advanced Figma Design Systems', desc: 'Auto-layout, interactive component variants, design tokens, and variables.' },
      { step: '03', title: 'Tailwind CSS & Web Accessibility (WCAG)', desc: 'Semantic HTML, ARIA landmarks, screen reader optimization, and responsive grids.' },
      { step: '04', title: 'Micro-Interactions & Framer Motion', desc: 'Physics-based animations, layout transitions, and interactive design prototypes.' }
    ],
    recommendedCourse: 'Modern UI/UX Design Systems & Figma Masterclass'
  }
];

const DiscoverMore = () => {
  const [activeTrack, setActiveTrack] = useState('fullstack');
  const selectedRoadmap = careerRoadmaps.find((r) => r.id === activeTrack) || careerRoadmaps[0];

  return (
    <div className="discover-more-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* HEADER */}
        <div className="text-center mb-5">
          <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-30 px-3 py-2 rounded-pill fw-semibold mb-3">
            🗺️ Career Roadmaps & Specialization Tracks
          </Badge>
          <h1 className="display-5 fw-bold text-white mb-3">
            Choose Your High-Growth <span className="text-gradient">Tech Career Path</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '680px' }}>
            Follow vetted step-by-step learning roadmaps with recommended curriculums, salary projections, and verified competency benchmarks.
          </p>

          {/* Track Switcher Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {careerRoadmaps.map((r) => (
              <Button
                key={r.id}
                variant={activeTrack === r.id ? 'info' : 'outline-secondary'}
                className={`rounded-pill px-4 fw-semibold ${activeTrack === r.id ? 'text-dark' : 'text-light'}`}
                onClick={() => setActiveTrack(r.id)}
              >
                <span className="me-2">{r.icon}</span>
                {r.title}
              </Button>
            ))}
          </div>
        </div>

        {/* SELECTED TRACK DEEP DIVE */}
        <div className="p-4 p-lg-5 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 shadow-xl mb-5">
          <Row className="gy-4 align-items-center mb-4 pb-4 border-bottom border-secondary border-opacity-25">
            <Col lg={8}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <Badge bg="info" className="text-dark fw-bold px-3 py-1 rounded-pill">
                  {selectedRoadmap.badge}
                </Badge>
                <span className="text-secondary small">⏱️ Est. Timeline: {selectedRoadmap.duration}</span>
              </div>
              <h2 className="display-6 fw-bold text-white mb-2">{selectedRoadmap.title}</h2>
              <p className="text-secondary lead fs-6 mb-0">{selectedRoadmap.description}</p>
            </Col>

            <Col lg={4} className="text-lg-end">
              <div className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25 d-inline-block text-start">
                <small className="text-secondary d-block">Projected Market Salary:</small>
                <strong className="fs-5 text-success">{selectedRoadmap.salary}</strong>
              </div>
            </Col>
          </Row>

          {/* ROADMAP STEPS TIMELINE */}
          <h3 className="h5 fw-bold text-white mb-4">Milestone Progression:</h3>
          <Row className="g-4 mb-4">
            {selectedRoadmap.milestones.map((milestone, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="bg-dark border-secondary border-opacity-40 p-4 rounded-4 h-100 card-hover">
                  <div className="text-info fw-bold font-mono fs-4 mb-2">{milestone.step}</div>
                  <h4 className="fw-bold text-white fs-6 mb-2">{milestone.title}</h4>
                  <p className="text-secondary small mb-0">{milestone.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>

          {/* RECOMMENDED COURSE STRIP */}
          <div className="p-3 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-30 d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <small className="text-info fw-bold d-block text-uppercase">Recommended Flagship Curriculum:</small>
              <strong className="text-white fs-6">{selectedRoadmap.recommendedCourse}</strong>
            </div>
            <Button as={Link} to="/course" variant="info" className="rounded-pill px-4 fw-bold text-dark shadow-sm">
              Enroll in Track Curriculums &rarr;
            </Button>
          </div>
        </div>

        {/* COMPARISON CARDS */}
        <h3 className="h4 fw-bold text-white mb-4 text-center">All Career Specialization Tracks</h3>
        <Row className="g-4">
          {careerRoadmaps.map((r) => (
            <Col md={6} key={r.id}>
              <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 rounded-4 h-100 card-hover">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fs-2">{r.icon}</span>
                  <Badge bg="secondary" className="px-3 py-1 rounded-pill small">
                    {r.duration}
                  </Badge>
                </div>
                <h4 className="fw-bold text-white fs-5 mb-2">{r.title}</h4>
                <p className="text-secondary small mb-3">{r.description}</p>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 mt-auto">
                  <span className="text-success small fw-bold">{r.salary}</span>
                  <Button
                    variant="outline-info"
                    size="sm"
                    className="rounded-pill px-3"
                    onClick={() => {
                      setActiveTrack(r.id);
                      window.scrollTo({ top: 180, behavior: 'smooth' });
                    }}
                  >
                    View Roadmap
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default DiscoverMore;