import { useState, useRef } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { useApp } from '../../context/AppContext';
import { playSuccessChime, playFailureChime, playXPChime } from '../../utils/soundEffects';

const CHALLENGES = [
  {
    id: 1,
    title: 'Two Sum Problem',
    difficulty: 'Easy',
    category: 'Algorithms',
    acceptance: '92%',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    starterCode: `function twoSum(nums, target) {
  // Write your solution here
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    tests: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[3, 2, 4], 6], expected: [1, 2] },
      { args: [[3, 3], 6], expected: [0, 1] }
    ],
    fnName: 'twoSum',
    hints: [
      'Can you solve it in O(n) time using a Hash Map?',
      'Store each number index in a Map and check if (target - num) exists.'
    ],
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    timeComplexity: 'O(n) - Single pass through the array',
    spaceComplexity: 'O(n) - Storing elements in the Hash Map'
  },
  {
    id: 2,
    title: 'Debounce Function Implementation',
    difficulty: 'Medium',
    category: 'Frontend JS',
    acceptance: '84%',
    description: `Implement a \`debounce\` function in JavaScript.

A debounced function delays the execution of the provided function until after \`delay\` milliseconds have elapsed since the last time the debounced function was invoked. For this synchronous test, the returned wrapper should return an object with a \`triggerCount\` property or execute when invoked.`,
    examples: [
      {
        input: 'const debounced = debounce(fn, 200); debounced(); debounced();',
        output: 'Only executes once after delay timer finishes.',
        explanation: 'Successive rapid calls cancel prior timers.'
      }
    ],
    starterCode: `function debounce(fn, delay) {
  let timerId = null;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`,
    tests: [
      {
        customValidator: `
          let count = 0;
          const fn = () => { count++; };
          const debounced = userFn(fn, 50);
          return typeof debounced === 'function' ? true : false;
        `,
        expectedDesc: 'Returns an executable wrapper function',
        expected: true
      },
      {
        customValidator: `
          let val = 0;
          const fn = (x) => { val = x; };
          const debounced = userFn(fn, 10);
          return typeof debounced === 'function' && typeof val === 'number';
        `,
        expectedDesc: 'Maintains closure over timer and callback',
        expected: true
      }
    ],
    fnName: 'debounce',
    hints: [
      'Store timerId in closure.',
      'Use clearTimeout(timerId) on each trigger before scheduling setTimeout.'
    ],
    solution: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
    timeComplexity: 'O(1) invocation overhead',
    spaceComplexity: 'O(1) closure timer reference'
  },
  {
    id: 3,
    title: 'Valid Parentheses & Brackets',
    difficulty: 'Easy',
    category: 'Data Structures',
    acceptance: '89%',
    description: `Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      { input: 's = "()[]{}"', output: 'true', explanation: 'All brackets match correctly.' },
      { input: 's = "(]"', output: 'false', explanation: 'Parenthesis closed by square bracket.' }
    ],
    starterCode: `function isValidParentheses(s) {
  // Use a stack to track open brackets
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (map[char]) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}`,
    tests: [
      { args: ['()'], expected: true },
      { args: ['()[]{}'], expected: true },
      { args: ['(]'], expected: false },
      { args: ['([)]'], expected: false },
      { args: ['{[]}',], expected: true }
    ],
    fnName: 'isValidParentheses',
    hints: [
      'Use a Last-In First-Out (LIFO) Stack.',
      'Push opening brackets; on closing brackets, pop and verify equality.'
    ],
    solution: `function isValidParentheses(s) {
  const stack = [];
  const matching = { ')': '(', '}': '{', ']': '[' };
  for (let c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      if (stack.pop() !== matching[c]) return false;
    }
  }
  return stack.length === 0;
}`,
    timeComplexity: 'O(n) - Single string traversal',
    spaceComplexity: 'O(n) - Stack depth'
  },
  {
    id: 4,
    title: 'Deep Flatten Nested Array',
    difficulty: 'Medium',
    category: 'Algorithms',
    acceptance: '81%',
    description: `Write a function \`deepFlatten(arr)\` that flattens an array of arbitrarily nested arrays into a single-dimensional array without using native \`Array.prototype.flat()\`.`,
    examples: [
      {
        input: 'arr = [1, [2, [3, [4]], 5]]',
        output: '[1, 2, 3, 4, 5]',
        explanation: 'All nested dimensions are flattened recursively.'
      }
    ],
    starterCode: `function deepFlatten(arr) {
  // Do not use arr.flat()!
  const result = [];
  function helper(subArr) {
    for (const item of subArr) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  }
  helper(arr);
  return result;
}`,
    tests: [
      { args: [[1, [2, 3], [4, [5]]]], expected: [1, 2, 3, 4, 5] },
      { args: [[[[1]]]], expected: [1] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[]], expected: [] }
    ],
    fnName: 'deepFlatten',
    hints: [
      'Recursion or an iterative stack with `while(stack.length)` works beautifully.',
      'Check `Array.isArray(item)` for each element.'
    ],
    solution: `function deepFlatten(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...deepFlatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}`,
    timeComplexity: 'O(N) - Where N is total number of elements',
    spaceComplexity: 'O(D) - Call stack depth proportional to nesting'
  },
  {
    id: 5,
    title: 'Array Group By Key',
    difficulty: 'Medium',
    category: 'Frontend JS',
    acceptance: '86%',
    description: `Implement \`groupBy(array, keyOrFn)\` which splits an array into sets, grouped by the result of running each element through \`keyOrFn\`. If \`keyOrFn\` is a string, group by that object key.`,
    examples: [
      {
        input: "groupBy(['one', 'two', 'three'], 'length')",
        output: "{ '3': ['one', 'two'], '5': ['three'] }",
        explanation: "Grouped by the length string property."
      }
    ],
    starterCode: `function groupBy(array, keyOrFn) {
  return array.reduce((acc, item) => {
    const key = typeof keyOrFn === 'function' ? keyOrFn(item) : item[keyOrFn];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}`,
    tests: [
      {
        args: [
          [{ id: 1, role: 'admin' }, { id: 2, role: 'user' }, { id: 3, role: 'admin' }],
          'role'
        ],
        expected: {
          admin: [{ id: 1, role: 'admin' }, { id: 3, role: 'admin' }],
          user: [{ id: 2, role: 'user' }]
        }
      },
      {
        args: [[6.1, 4.2, 6.3], Math.floor],
        expected: {
          '4': [4.2],
          '6': [6.1, 6.3]
        }
      }
    ],
    fnName: 'groupBy',
    hints: [
      'Use `Array.prototype.reduce`.',
      'Check `typeof keyOrFn === "function"` to extract the group key.'
    ],
    solution: `function groupBy(array, keyOrFn) {
  return array.reduce((acc, item) => {
    const key = typeof keyOrFn === 'function' ? keyOrFn(item) : item[keyOrFn];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}`,
    timeComplexity: 'O(n) - Single reduction pass',
    spaceComplexity: 'O(n) - Grouped output object'
  },
  {
    id: 6,
    title: 'Valid Alphanumeric Palindrome',
    difficulty: 'Easy',
    category: 'Algorithms',
    acceptance: '94%',
    description: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false', explanation: '"raceacar" is not a palindrome.' }
    ],
    starterCode: `function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
    tests: [
      { args: ['A man, a plan, a canal: Panama'], expected: true },
      { args: ['race a car'], expected: false },
      { args: [' '], expected: true },
      { args: ['0P'], expected: false }
    ],
    fnName: 'isPalindrome',
    hints: [
      'Filter out non-alphanumerics with regex `/[^a-z0-9]/g`.',
      'Use two pointers from left and right inward.'
    ],
    solution: `function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`,
    timeComplexity: 'O(n) - Linear pass',
    spaceComplexity: 'O(n) - Cleaned string'
  }
];

const CodingLab = () => {
  const { addXP, unlockBadge } = useApp();
  const [selectedChallengeId, setSelectedChallengeId] = useState(1);
  const [code, setCode] = useState(() => CHALLENGES[0].starterCode);
  const [activeTab, setActiveTab] = useState('tests'); // 'tests' | 'solution' | 'hints'
  const [testResults, setTestResults] = useState(null);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [solvedChallenges, setSolvedChallenges] = useState(() => {
    try {
      const saved = localStorage.getItem('learnify_solved_challenges');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const challenge = CHALLENGES.find((c) => c.id === selectedChallengeId) || CHALLENGES[0];

  const handleSelectChallenge = (c) => {
    setSelectedChallengeId(c.id);
    setCode(c.starterCode);
    setTestResults(null);
    setConsoleLogs([]);
    setActiveTab('tests');
  };

  const handleResetCode = () => {
    setCode(challenge.starterCode);
    setTestResults(null);
  };

  // Execution engine
  const handleRunCode = () => {
    setIsRunning(true);
    setTestResults(null);
    const logs = [];

    // Intercept console.log
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      originalLog.apply(console, args);
    };

    const startTime = performance.now();
    const results = [];
    let allPassed = true;

    try {
      // Evaluate user code to get the function
      // eslint-disable-next-line no-new-func
      const factory = new Function(`
        ${code}
        if (typeof ${challenge.fnName} !== 'undefined') {
          return ${challenge.fnName};
        }
        throw new Error("Function '${challenge.fnName}' is not defined. Ensure your function is named '${challenge.fnName}'.");
      `);

      const userFn = factory();

      // Run each test
      for (let i = 0; i < challenge.tests.length; i++) {
        const test = challenge.tests[i];
        let actual;
        let passed = false;
        const testStart = performance.now();

        if (test.customValidator) {
          // eslint-disable-next-line no-new-func
          const validatorFn = new Function('userFn', test.customValidator);
          actual = validatorFn(userFn);
          passed = actual === test.expected;
        } else {
          // Clone args to prevent mutation side-effects
          const clonedArgs = JSON.parse(JSON.stringify(test.args));
          actual = userFn(...clonedArgs);
          passed = JSON.stringify(actual) === JSON.stringify(test.expected);
        }

        const latency = (performance.now() - testStart).toFixed(2);

        if (!passed) allPassed = false;

        results.push({
          index: i + 1,
          passed,
          args: test.args ? JSON.stringify(test.args) : (test.expectedDesc || 'Execution check'),
          expected: JSON.stringify(test.expected),
          actual: JSON.stringify(actual),
          latency
        });
      }
    } catch (err) {
      allPassed = false;
      results.push({
        index: 1,
        passed: false,
        error: err.message || 'Execution error'
      });
    } finally {
      console.log = originalLog;
      setIsRunning(false);
      setConsoleLogs(logs);
    }

    const totalLatency = (performance.now() - startTime).toFixed(1);
    setTestResults({
      allPassed,
      results,
      totalLatency
    });

    if (allPassed) {
      playSuccessChime();
      if (!solvedChallenges.includes(challenge.id)) {
        const updated = [...solvedChallenges, challenge.id];
        setSolvedChallenges(updated);
        localStorage.setItem('learnify_solved_challenges', JSON.stringify(updated));
        addXP(50, `Solved "${challenge.title}" in Coding Lab!`);
        playXPChime();
        if (updated.length >= 3) {
          unlockBadge('code-master');
        }
      }
    } else {
      playFailureChime();
    }
  };

  return (
    <div className="coding-lab-page bg-dark text-white min-vh-100 py-4">
      <Container fluid="xxl">
        {/* Top Header Bar */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-info bg-opacity-10 text-info p-2 rounded-3 border border-info border-opacity-25 fs-4">
              💻
            </div>
            <div>
              <div className="d-flex align-items-center gap-2">
                <h1 className="h4 fw-bold mb-0 text-white">Interactive Coding Lab & Arena</h1>
                <Badge bg="success" className="bg-opacity-25 text-success border border-success border-opacity-25 px-2 py-1">
                  Live Sandbox
                </Badge>
              </div>
              <p className="text-secondary small mb-0">
                Solve real-world algorithmic & system design challenges with automated in-browser test validation.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="bg-secondary bg-opacity-10 px-3 py-1.5 rounded-pill border border-secondary border-opacity-25 small">
              🏆 Solved: <strong className="text-info">{solvedChallenges.length}</strong> / {CHALLENGES.length}
            </div>
            <Link to="/classroom" className="btn btn-outline-info btn-sm rounded-pill px-3">
              ← Back to Classroom
            </Link>
          </div>
        </div>

        {/* Main Grid: Left Problem List & Details / Right Code Editor & Runner */}
        <Row className="gy-4">
          
          {/* Left Column: Challenge Selector & Problem Details */}
          <Col lg={5}>
            {/* Quick Challenge Selector Pills */}
            <div className="d-flex gap-2 overflow-x-auto pb-2 mb-3">
              {CHALLENGES.map((c) => {
                const isSolved = solvedChallenges.includes(c.id);
                const isSelected = c.id === selectedChallengeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleSelectChallenge(c)}
                    className={`btn btn-sm text-nowrap rounded-pill px-3 py-1.5 d-flex align-items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'btn-info text-dark fw-bold shadow'
                        : 'btn-outline-secondary text-secondary'
                    }`}
                  >
                    <span>{isSolved ? '✅' : '#' + c.id}</span>
                    <span>{c.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Problem Spec Card */}
            <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 h-100">
              <Card.Header className="bg-secondary bg-opacity-10 border-bottom border-secondary border-opacity-25 p-3 d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="h5 fw-bold mb-1 text-white">
                    {challenge.id}. {challenge.title}
                  </h2>
                  <div className="d-flex align-items-center gap-2">
                    <Badge
                      bg={
                        challenge.difficulty === 'Easy'
                          ? 'success'
                          : challenge.difficulty === 'Medium'
                          ? 'warning'
                          : 'danger'
                      }
                      className="rounded-pill"
                    >
                      {challenge.difficulty}
                    </Badge>
                    <span className="text-secondary small">• {challenge.category}</span>
                    <span className="text-secondary small">• Acceptance: {challenge.acceptance}</span>
                  </div>
                </div>
                {solvedChallenges.includes(challenge.id) && (
                  <Badge bg="success" className="px-2.5 py-1.5 rounded-pill">
                    Solved ✨
                  </Badge>
                )}
              </Card.Header>

              <Card.Body className="p-4" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                <h6 className="fw-semibold text-info text-uppercase small tracking-wider mb-2">Description</h6>
                <div className="text-light text-opacity-90 small leading-relaxed whitespace-pre-line mb-4">
                  {challenge.description}
                </div>

                <h6 className="fw-semibold text-info text-uppercase small tracking-wider mb-2">Examples</h6>
                {challenge.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-3 mb-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-20 font-monospace small"
                  >
                    <div className="mb-1 text-light">
                      <strong className="text-info">Input: </strong> {ex.input}
                    </div>
                    <div className="mb-1 text-light">
                      <strong className="text-success">Output: </strong> {ex.output}
                    </div>
                    {ex.explanation && (
                      <div className="text-secondary font-sans mt-2" style={{ fontFamily: 'var(--font-main)' }}>
                        <em>Explanation: </em> {ex.explanation}
                      </div>
                    )}
                  </div>
                ))}

                <h6 className="fw-semibold text-info text-uppercase small tracking-wider mb-2">Hints</h6>
                <div className="d-flex flex-column gap-2 mb-4">
                  {challenge.hints.map((hint, i) => (
                    <details key={i} className="bg-secondary bg-opacity-10 p-2.5 rounded-3 border border-secondary border-opacity-20 small">
                      <summary className="cursor-pointer text-warning fw-medium">
                        💡 Hint {i + 1}
                      </summary>
                      <p className="mt-2 mb-0 text-secondary">{hint}</p>
                    </details>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column: Code Editor & Automated Test Runner */}
          <Col lg={7}>
            <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 overflow-hidden d-flex flex-column h-100">
              
              {/* Editor Header Toolbar */}
              <div className="bg-black bg-opacity-60 px-3 py-2 border-bottom border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 font-monospace">
                    JavaScript (ES6+)
                  </span>
                  <span className="text-secondary small font-monospace">
                    fn: {challenge.fnName}()
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-pill px-2.5 py-1 text-xs"
                    onClick={handleResetCode}
                    title="Reset to boilerplate code"
                  >
                    ↺ Reset
                  </Button>
                  <Button
                    variant="info"
                    size="sm"
                    className="rounded-pill px-4 py-1 text-dark fw-bold d-flex align-items-center gap-1.5 shadow"
                    onClick={handleRunCode}
                    disabled={isRunning}
                  >
                    <span>{isRunning ? '⏳ Running...' : '▶ Run Tests'}</span>
                  </Button>
                </div>
              </div>

              {/* Code Textarea Editor */}
              <div className="position-relative" style={{ minHeight: '340px' }}>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck="false"
                  className="w-100 h-100 p-3 bg-black text-light font-monospace border-0 outline-none shadow-none"
                  style={{
                    minHeight: '340px',
                    fontSize: '0.92rem',
                    lineHeight: '1.6',
                    resize: 'vertical',
                    outline: 'none',
                    tabSize: 2
                  }}
                />
              </div>

              {/* Test Runner & Results Tabs */}
              <div className="bg-secondary bg-opacity-10 border-top border-secondary border-opacity-25 flex-grow-1 p-3">
                <Nav variant="pills" className="gap-2 mb-3">
                  <Nav.Item>
                    <Nav.Link
                      active={activeTab === 'tests'}
                      onClick={() => setActiveTab('tests')}
                      className={`rounded-pill px-3 py-1 small fw-semibold cursor-pointer ${
                        activeTab === 'tests' ? 'bg-info text-dark' : 'text-secondary'
                      }`}
                    >
                      🧪 Test Suite {testResults && (testResults.allPassed ? '✅' : '❌')}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeTab === 'console'}
                      onClick={() => setActiveTab('console')}
                      className={`rounded-pill px-3 py-1 small fw-semibold cursor-pointer ${
                        activeTab === 'console' ? 'bg-secondary text-white' : 'text-secondary'
                      }`}
                    >
                      📟 Console ({consoleLogs.length})
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      active={activeTab === 'solution'}
                      onClick={() => setActiveTab('solution')}
                      className={`rounded-pill px-3 py-1 small fw-semibold cursor-pointer ${
                        activeTab === 'solution' ? 'bg-warning text-dark' : 'text-secondary'
                      }`}
                    >
                      🔓 Solution & Analysis
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                {/* Tab 1: Test Results */}
                {activeTab === 'tests' && (
                  <div>
                    {!testResults ? (
                      <div className="p-4 text-center text-secondary border border-secondary border-opacity-10 rounded-3">
                        <div className="fs-3 mb-2">⚡</div>
                        <p className="mb-0 small">
                          Click <strong className="text-info">▶ Run Tests</strong> above to execute automated test assertions against your code.
                        </p>
                      </div>
                    ) : (
                      <div>
                        {/* Overall Test Verdict Banner */}
                        <div
                          className={`p-3 rounded-3 mb-3 d-flex justify-content-between align-items-center ${
                            testResults.allPassed
                              ? 'bg-success bg-opacity-15 border border-success border-opacity-30 text-success'
                              : 'bg-danger bg-opacity-15 border border-danger border-opacity-30 text-danger'
                          }`}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <span className="fs-5">{testResults.allPassed ? '🎉' : '❌'}</span>
                            <span className="fw-bold">
                              {testResults.allPassed
                                ? 'All Test Cases Passed! +50 XP Awarded'
                                : 'Some Test Cases Failed. Check expected vs actual below.'}
                            </span>
                          </div>
                          <span className="small font-monospace opacity-75">
                            ⚡ {testResults.totalLatency}ms
                          </span>
                        </div>

                        {/* Individual Test Cards */}
                        <div className="d-flex flex-column gap-2">
                          {testResults.results.map((res, i) => (
                            <div
                              key={i}
                              className={`p-3 rounded-3 border ${
                                res.passed
                                  ? 'border-success border-opacity-25 bg-success bg-opacity-5'
                                  : 'border-danger border-opacity-25 bg-danger bg-opacity-5'
                              }`}
                            >
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className="fw-semibold small">
                                  Test Case #{res.index}
                                </span>
                                <Badge bg={res.passed ? 'success' : 'danger'} className="rounded-pill">
                                  {res.passed ? 'PASSED' : 'FAILED'}
                                </Badge>
                              </div>

                              {res.error ? (
                                <div className="text-danger small font-monospace mt-1">
                                  {res.error}
                                </div>
                              ) : (
                                <div className="font-monospace small text-secondary mt-1">
                                  <div><span className="text-info">Arguments:</span> {res.args}</div>
                                  <div><span className="text-warning">Expected:</span> {res.expected}</div>
                                  <div>
                                    <span className={res.passed ? 'text-success' : 'text-danger'}>
                                      Actual:
                                    </span> {res.actual}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: Console Logs */}
                {activeTab === 'console' && (
                  <div className="bg-black p-3 rounded-3 font-monospace small" style={{ minHeight: '120px' }}>
                    {consoleLogs.length === 0 ? (
                      <span className="text-secondary opacity-50">No console output recorded yet. Use console.log() inside your code.</span>
                    ) : (
                      consoleLogs.map((log, i) => (
                        <div key={i} className="text-light">
                          <span className="text-secondary">&gt; </span> {log}
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Tab 3: Reference Solution */}
                {activeTab === 'solution' && (
                  <div className="p-3 bg-black rounded-3 border border-secondary border-opacity-25">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-warning fw-bold small">Official Solution</span>
                      <Button
                        variant="outline-info"
                        size="sm"
                        className="py-0 px-2 rounded-pill small"
                        onClick={() => setCode(challenge.solution)}
                      >
                        Copy to Editor
                      </Button>
                    </div>
                    <pre className="text-info font-monospace small mb-3 p-2 bg-dark rounded">
                      {challenge.solution}
                    </pre>
                    <div className="small text-secondary">
                      <div><strong className="text-light">Time Complexity:</strong> {challenge.timeComplexity}</div>
                      <div><strong className="text-light">Space Complexity:</strong> {challenge.spaceComplexity}</div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CodingLab;
