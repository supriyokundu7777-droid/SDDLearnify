import { useState } from 'react';
import { Link, useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import { useApp } from '../../context/AppContext';

const Certificate = () => {
  const { courseId } = useParams();
  const { user, enrolledCourses, showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [verifyInput, setVerifyInput] = useState('');
  const [verifiedResult, setVerifiedResult] = useState(null);

  const targetCourseId = parseInt(courseId, 10);
  const completedList = enrolledCourses.filter((c) => c.certificateUnlocked || c.progress === 100);

  const course = (targetCourseId && enrolledCourses.find((c) => c.id === targetCourseId)) ||
    completedList[0] ||
    enrolledCourses[0] || {
      id: 2,
      title: 'Mastering AI Agents & LangChain in Python',
      instructor: 'Dr. Elena Rostova',
      credentialId: 'LF-CERT-AI-8842',
      issuedDate: 'October 1, 2026'
    };

  const credentialId = course.credentialId || 'LF-CERT-AI-8842';
  const issueDate = course.issuedDate || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopied(true);
    showToast('Link Copied!', 'Credential verification URL copied to clipboard.', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleVerifyLookup = (e) => {
    e.preventDefault();
    const clean = verifyInput.trim().toUpperCase();
    if (!clean) return;

    if (clean.includes('LF-CERT') || clean === 'LF-CERT-AI-8842' || clean === credentialId) {
      setVerifiedResult({
        status: 'VERIFIED',
        credentialId: clean,
        recipient: user.name,
        curriculum: course.title,
        issuedOn: issueDate,
        issuer: 'Learnify Institute of Advanced Software Engineering',
        securityHash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'
      });
      showToast('Credential Verified!', 'Cryptographic signature authenticated successfully.', 'success');
    } else {
      setVerifiedResult({
        status: 'NOT_FOUND',
        credentialId: clean,
        message: 'No record found with this Credential ID. Please verify the ID format.'
      });
      showToast('Not Found', 'Invalid or unverified credential ID.', 'warning');
    }
  };

  return (
    <div className="certificate-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xl">
        
        {/* TOP CONTROLS BAR (Hidden during print) */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 d-print-none">
          <div className="d-flex align-items-center gap-3">
            <Link to="/dashboard" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
              &larr; Back to Dashboard
            </Link>
            <div>
              <h1 className="h5 fw-bold mb-0 text-white">Official Certificate of Achievement</h1>
              <span className="text-secondary small font-mono">Credential ID: {credentialId}</span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            <Button variant="info" className="rounded-pill px-3 fw-bold text-dark" onClick={handlePrint}>
              🖨️ Print / Download PDF
            </Button>
            <Button variant="outline-light" className="rounded-pill px-3" onClick={handleCopyLink}>
              {copied ? '✓ Copied' : '🔗 Copy Verification Link'}
            </Button>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary rounded-pill px-3 fw-semibold"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Certificate Switcher for multiple completed courses */}
        {completedList.length > 1 && (
          <div className="d-flex align-items-center gap-2 mb-4 d-print-none overflow-x-auto pb-2">
            <span className="text-secondary small fw-medium text-nowrap">Your Certificates:</span>
            {completedList.map((c) => (
              <Link
                key={c.id}
                to={`/certificate/${c.id}`}
                className={`btn btn-sm rounded-pill px-3 text-nowrap ${
                  c.id === course.id ? 'btn-info text-dark fw-bold' : 'btn-outline-secondary text-light'
                }`}
              >
                🏆 {c.title.split(' ')[0]}...
              </Link>
            ))}
          </div>
        )}

        {/* HIGH RESOLUTION PRINTABLE CERTIFICATE FRAME */}
        <div className="certificate-frame p-4 p-md-5 rounded-3 mx-auto shadow-2xl position-relative text-dark mb-5" style={{ maxWidth: '960px', background: '#fafaf9', border: '16px solid #0f172a' }}>
          
          {/* Inner Decorative Border */}
          <div className="border border-warning border-opacity-75 p-4 p-md-5 rounded-2 position-relative" style={{ borderStyle: 'double', borderWidth: '4px' }}>
            
            {/* Top Brand Header */}
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center gap-2 mb-2">
                <span className="fs-1">⚡</span>
                <span className="fs-2 fw-black text-dark tracking-tight" style={{ fontWeight: 800 }}>
                  LEARN<span className="text-primary">IFY</span>
                </span>
              </div>
              <p className="text-uppercase fw-bold text-secondary tracking-widest small mb-1" style={{ letterSpacing: '4px', fontSize: '0.75rem' }}>
                INSTITUTE OF ADVANCED SOFTWARE ENGINEERING & ARTIFICIAL INTELLIGENCE
              </p>
              <div className="mx-auto bg-warning" style={{ width: '80px', height: '3px' }}></div>
            </div>

            {/* Certificate Title */}
            <div className="text-center my-4">
              <h2 className="display-6 fw-bold text-dark mb-2" style={{ fontFamily: 'serif', letterSpacing: '1px' }}>
                CERTIFICATE OF COMPLETION
              </h2>
              <p className="text-secondary text-uppercase fw-semibold small" style={{ letterSpacing: '2px' }}>
                THIS IS PROUDLY CONFERRED UPON
              </p>
              
              {/* Recipient Name */}
              <div className="my-3 py-2 border-bottom border-dark border-opacity-25 mx-auto" style={{ maxWidth: '600px' }}>
                <h3 className="display-5 fw-bold text-primary mb-0" style={{ fontStyle: 'italic', letterSpacing: '-0.5px' }}>
                  {user.name}
                </h3>
              </div>

              <p className="text-secondary small mt-3 mx-auto" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
                for successfully completing the rigorous, project-evaluated curriculum in
              </p>

              {/* Course Title */}
              <h4 className="fw-bold text-dark fs-4 my-2 px-3">
                {course.title}
              </h4>

              <p className="text-secondary small mt-2">
                demonstrating production-level engineering proficiency, architectural problem solving, and adherence to modern industry standards.
              </p>
            </div>

            {/* Signatures & Seal Row */}
            <div className="row align-items-end mt-5 pt-4 text-center gy-4">
              
              <div className="col-4">
                <div className="border-bottom border-dark pb-2 mb-2 mx-auto" style={{ maxWidth: '180px' }}>
                  <span className="fs-5" style={{ fontFamily: 'cursive' }}>Alex Morrison</span>
                </div>
                <strong className="d-block small text-dark">{course.instructor || 'Lead Technical Instructor'}</strong>
                <span className="text-secondary" style={{ fontSize: '0.7rem' }}>Head of Engineering Curriculum</span>
              </div>

              {/* Gold Verification Seal */}
              <div className="col-4">
                <div className="d-inline-flex flex-column align-items-center justify-content-center p-3 rounded-circle bg-warning bg-opacity-25 border border-warning shadow-sm" style={{ width: '100px', height: '100px' }}>
                  <span className="fs-2">🏅</span>
                  <span className="text-uppercase fw-bold text-dark" style={{ fontSize: '0.55rem', letterSpacing: '1px' }}>OFFICIAL SEAL</span>
                </div>
              </div>

              <div className="col-4">
                <div className="border-bottom border-dark pb-2 mb-2 mx-auto" style={{ maxWidth: '180px' }}>
                  <span className="fs-5" style={{ fontFamily: 'cursive' }}>Dr. Elena Rostova</span>
                </div>
                <strong className="d-block small text-dark">Dr. Elena Rostova, PhD</strong>
                <span className="text-secondary" style={{ fontSize: '0.7rem' }}>Dean of Academics & AI Research</span>
              </div>

            </div>

            {/* Bottom Meta & QR Code strip */}
            <div className="mt-5 pt-3 border-top border-dark border-opacity-10 d-flex justify-content-between align-items-center small text-secondary" style={{ fontSize: '0.75rem' }}>
              <div>
                <span><strong>Issued Date:</strong> {issueDate}</span>
                <span className="ms-3"><strong>Credential ID:</strong> <code className="text-dark fw-bold">{credentialId}</code></span>
              </div>

              {/* Verified QR Code Graphic */}
              <div className="d-flex align-items-center gap-2">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="border border-dark p-1 rounded bg-white">
                  <rect width="18" height="18" fill="#0f172a" />
                  <rect x="4" y="4" width="10" height="10" fill="#ffffff" />
                  <rect x="6" y="6" width="6" height="6" fill="#0f172a" />
                  <rect x="24" width="18" height="18" fill="#0f172a" />
                  <rect x="28" y="4" width="10" height="10" fill="#ffffff" />
                  <rect x="30" y="6" width="6" height="6" fill="#0f172a" />
                  <rect y="24" width="18" height="18" fill="#0f172a" />
                  <rect x="4" y="28" width="10" height="10" fill="#ffffff" />
                  <rect x="6" y="30" width="6" height="6" fill="#0f172a" />
                  <rect x="24" y="24" width="6" height="6" fill="#0f172a" />
                  <rect x="36" y="24" width="6" height="6" fill="#0f172a" />
                  <rect x="30" y="30" width="6" height="6" fill="#0f172a" />
                  <rect x="24" y="36" width="6" height="6" fill="#0f172a" />
                  <rect x="36" y="36" width="6" height="6" fill="#0f172a" />
                </svg>
                <div className="text-end">
                  <span className="d-block fw-bold text-dark">Scan to Verify</span>
                  <span className="opacity-75">learnify.io/verify</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RECRUITER & EMPLOYER INSTANT VERIFICATION LOOKUP PORTAL */}
        <div className="p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 d-print-none" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold text-white mb-1">🔍 Real-Time Credential Verification Portal</h5>
              <p className="text-secondary small mb-0">
                Employers, hiring teams, and universities can verify credential authenticity on-chain.
              </p>
            </div>
            <Badge bg="info" className="text-dark rounded-pill">Public Registry</Badge>
          </div>

          <Form onSubmit={handleVerifyLookup} className="d-flex gap-2 mb-3">
            <Form.Control
              type="text"
              placeholder={`Enter Credential ID (e.g. ${credentialId})...`}
              value={verifyInput}
              onChange={(e) => setVerifyInput(e.target.value)}
              className="bg-black text-white font-mono border-secondary border-opacity-50 rounded-pill px-3 shadow-none small"
            />
            <Button type="submit" variant="info" className="rounded-pill px-4 fw-bold text-dark text-nowrap">
              Verify ID
            </Button>
          </Form>

          {/* Verification Result Display */}
          {verifiedResult && (
            <div className={`p-3 rounded-3 border ${
              verifiedResult.status === 'VERIFIED'
                ? 'bg-success bg-opacity-10 border-success border-opacity-40 text-light'
                : 'bg-danger bg-opacity-10 border-danger border-opacity-40 text-light'
            }`}>
              {verifiedResult.status === 'VERIFIED' ? (
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-success text-white px-2 py-1">✓ AUTHENTIC VERIFIED CREDENTIAL</span>
                    <span className="font-mono text-info small">{verifiedResult.credentialId}</span>
                  </div>
                  <div className="row g-2 small text-secondary">
                    <div className="col-sm-6">
                      <strong className="text-white d-block">Conferred Upon:</strong>
                      <span>{verifiedResult.recipient}</span>
                    </div>
                    <div className="col-sm-6">
                      <strong className="text-white d-block">Curriculum:</strong>
                      <span>{verifiedResult.curriculum}</span>
                    </div>
                    <div className="col-sm-6">
                      <strong className="text-white d-block">Issued On:</strong>
                      <span>{verifiedResult.issuedOn}</span>
                    </div>
                    <div className="col-sm-6">
                      <strong className="text-white d-block">Issuing Body:</strong>
                      <span>{verifiedResult.issuer}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="badge bg-danger text-white px-2 py-1">❌ UNVERIFIED</span>
                    <span className="font-mono text-secondary small">{verifiedResult.credentialId}</span>
                  </div>
                  <p className="small mb-0 text-light opacity-75">{verifiedResult.message}</p>
                </div>
              )}
            </div>
          )}
        </div>

      </Container>
    </div>
  );
};

export default Certificate;
