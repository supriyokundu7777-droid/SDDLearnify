import { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useApp } from '../context/AppContext';

const presetSuggestions = [
  '⚡ React 19 Server Components vs SSR',
  '🤖 How to build a LangChain AI Agent',
  '🐳 Explain Docker multi-stage builds',
  '🚀 What is useOptimistic in React 19?'
];

const knowledgeBase = {
  'react 19': `**React 19 Server Components** execute purely on the server and stream HTML/JSX to the client without sending their JS bundle dependencies.

\`\`\`jsx
// Server Component - 0 KB client bundle!
async function UserProfile({ userId }) {
  const user = await db.users.findUnique({ where: { id: userId } });
  return <div className="profile">Welcome, {user.name}!</div>;
}
\`\`\`

**Key Benefits:**
1. Zero bundle impact for server-side logic and markdown parsers.
2. Direct database and backend microservice access without public REST endpoints.
3. Native streaming SSR with Suspense boundaries.`,

  'langchain': `**LangChain & Autonomous AI Agents** use structured reasoning loops (ReAct pattern) to decide which external tools or functions to call.

\`\`\`python
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate

# Define system prompt with tool calling
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an autonomous engineering assistant."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
\`\`\`

**Core Flow:** Thought -> Action (Tool Call) -> Observation (Tool Output) -> Final Response.`,

  'docker': `**Docker Multi-Stage Builds** dramatically reduce production container image size and eliminate security vulnerabilities by keeping compilers out of the final runtime.

\`\`\`dockerfile
# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Minimal Production Runtime
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

Result: Image size drops from ~1.2 GB to only ~28 MB!`,

  'useoptimistic': `**React 19 \`useOptimistic\`** lets your UI render optimistic UI updates immediately while an asynchronous server action is in-flight.

\`\`\`jsx
import { useOptimistic } from 'react';

function LikeButton({ initialLikes, onLikeAction }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    initialLikes,
    (state, delta) => state + delta
  );

  async function handleLike() {
    setOptimisticLikes(1); // Instant visual feedback
    await onLikeAction();  // In-flight server update
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes}</button>;
}
\`\`\``
};

const AICopilotModal = () => {
  const { addXP, showToast } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "👋 Hey engineer! I'm your Learnify AI Study Copilot. Ask me to explain concepts, debug code, review architecture, or generate interview practice questions!",
      time: 'Just now'
    }
  ]);

  const msgIdCounter = useRef(10);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (userText) => {
    const query = (userText || inputValue).trim();
    if (!query) return;

    msgIdCounter.current += 1;
    const userMsg = {
      id: msgIdCounter.current,
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Provide XP for curious learners
    addXP(5, 'Consulted Learnify AI Copilot');

    setTimeout(() => {
      let responseText = '';
      const lower = query.toLowerCase();

      if (lower.includes('react') || lower.includes('server component')) {
        responseText = knowledgeBase['react 19'];
      } else if (lower.includes('langchain') || lower.includes('agent') || lower.includes('ai')) {
        responseText = knowledgeBase['langchain'];
      } else if (lower.includes('docker') || lower.includes('container')) {
        responseText = knowledgeBase['docker'];
      } else if (lower.includes('optimistic') || lower.includes('useoptimistic')) {
        responseText = knowledgeBase['useoptimistic'];
      } else {
        responseText = `Here is the architectural breakdown for **"${query}"**:

1. **Core Concept:** When scaling high-throughput distributed web applications, state management should remain localized with minimal client re-renders.
2. **Best Practice:** Keep business validation schemas collocated using Zod or Pydantic.
3. **Suggested Next Step:** Review Module 2 and try testing this logic in our **Live Code Sandbox**!

\`\`\`javascript
// Example helper snippet
export async function handleAsyncProcess(payload) {
  try {
    const result = await processData(payload);
    return { success: true, data: result };
  } catch (error) {
    console.error("Execution failed:", error);
    return { success: false, error: error.message };
  }
}
\`\`\``;
      }

      msgIdCounter.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: msgIdCounter.current,
          sender: 'ai',
          text: responseText,
          time: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleCopyCode = (text) => {
    navigator.clipboard?.writeText?.(text);
    showToast('Code Copied!', 'Snippet copied to your clipboard.', 'info');
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'ai',
        text: '🧹 Chat cleared. What technical topic or bug would you like to explore next?',
        time: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          className="btn btn-info rounded-pill shadow-lg d-flex align-items-center gap-2 fw-bold text-dark position-fixed"
          style={{
            bottom: '24px',
            right: '24px',
            zIndex: 1050,
            padding: '12px 20px',
            boxShadow: '0 8px 30px rgba(0, 210, 255, 0.4)'
          }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
        >
          <span className="fs-5">🤖</span>
          <span>Ask AI Copilot</span>
          <span className="badge bg-dark text-info rounded-pill py-1 px-2" style={{ fontSize: '0.7rem' }}>
            Live
          </span>
        </button>
      )}

      {/* Floating Copilot Drawer Window */}
      {isOpen && (
        <div
          className="position-fixed shadow-2xl rounded-4 overflow-hidden border border-secondary border-opacity-50 d-flex flex-column"
          style={{
            bottom: '24px',
            right: '24px',
            width: isMinimized ? '320px' : '420px',
            maxWidth: '92vw',
            height: isMinimized ? '58px' : '620px',
            maxHeight: '85vh',
            zIndex: 1050,
            backgroundColor: 'rgba(15, 20, 30, 0.95)',
            backdropFilter: 'blur(20px)',
            transition: 'height 0.3s ease, width 0.3s ease'
          }}
        >
          {/* Header */}
          <div className="p-3 bg-secondary bg-opacity-20 border-bottom border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <div className="p-1 rounded-circle bg-info bg-opacity-20 text-info fs-6">
                ✨
              </div>
              <div>
                <strong className="text-white d-block small mb-0">Learnify AI Copilot</strong>
                <span className="text-success small d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                  <span className="badge p-1 bg-success rounded-circle"></span> Online • GPT-4o / Claude 3.5 Sonnet
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-1">
              {!isMinimized && (
                <button
                  type="button"
                  className="btn btn-sm btn-link text-secondary p-1"
                  onClick={handleClearChat}
                  title="Clear conversation"
                >
                  🧹
                </button>
              )}
              <button
                type="button"
                className="btn btn-sm btn-link text-secondary p-1"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? '▲' : '▼'}
              </button>
              <button
                type="button"
                className="btn-close btn-close-white btn-sm ms-1"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>

          {/* Main Chat Body */}
          {!isMinimized && (
            <>
              {/* Message History */}
              <div className="flex-grow-1 p-3 overflow-y-auto d-flex flex-column gap-3" style={{ fontSize: '0.85rem' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`d-flex flex-column ${
                      msg.sender === 'user' ? 'align-items-end' : 'align-items-start'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-4 shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-info text-dark fw-medium'
                          : 'bg-secondary bg-opacity-20 text-light border border-secondary border-opacity-25'
                      }`}
                      style={{ maxWidth: '90%', wordBreak: 'break-word' }}
                    >
                      {/* Render text with code block styling */}
                      {msg.text.includes('```') ? (
                        <div>
                          {msg.text.split('```').map((part, index) => {
                            if (index % 2 === 1) {
                              const codeLines = part.trim().split('\n');
                              const lang = codeLines[0].trim();
                              const code = codeLines.slice(lang ? 1 : 0).join('\n') || part;

                              return (
                                <div key={index} className="my-2 rounded-3 overflow-hidden border border-secondary border-opacity-50">
                                  <div className="d-flex justify-content-between align-items-center px-2 py-1 bg-black bg-opacity-60 text-secondary font-mono" style={{ fontSize: '0.7rem' }}>
                                    <span>{lang || 'code'}</span>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm text-info p-0 text-decoration-none"
                                      onClick={() => handleCopyCode(code)}
                                    >
                                      Copy
                                    </button>
                                  </div>
                                  <pre className="p-2 mb-0 bg-black text-light font-mono" style={{ fontSize: '0.78rem', whiteSpace: 'pre-wrap' }}>
                                    {code}
                                  </pre>
                                </div>
                              );
                            }
                            return <div key={index} style={{ whiteSpace: 'pre-line' }}>{part}</div>;
                          })}
                        </div>
                      ) : (
                        <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                      )}
                    </div>
                    <span className="text-secondary mt-1 px-1" style={{ fontSize: '0.65rem' }}>
                      {msg.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-secondary bg-opacity-10 text-secondary small align-self-start">
                    <span className="spinner-grow spinner-grow-sm text-info" role="status"></span>
                    <span>AI Copilot is synthesizing response...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="px-3 py-2 border-top border-secondary border-opacity-25 bg-black bg-opacity-30">
                <div className="d-flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  {presetSuggestions.map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="btn btn-outline-secondary btn-sm rounded-pill text-nowrap py-0 px-2 fw-medium text-light"
                      style={{ fontSize: '0.72rem' }}
                      onClick={() => handleSend(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <div className="p-3 border-top border-secondary border-opacity-25 bg-black bg-opacity-40">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="d-flex gap-2"
                >
                  <Form.Control
                    type="text"
                    placeholder="Ask technical question or paste bug..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-dark text-white border-secondary border-opacity-50 rounded-pill px-3 shadow-none small"
                    disabled={isTyping}
                  />
                  <Button
                    variant="info"
                    type="submit"
                    className="rounded-circle d-flex align-items-center justify-content-center p-0 text-dark fw-bold"
                    style={{ width: 38, height: 38, minWidth: 38 }}
                    disabled={!inputValue.trim() || isTyping}
                  >
                    ➤
                  </Button>
                </Form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AICopilotModal;
