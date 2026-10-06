/**
 * API Service for interacting with the Learnify Express & MongoDB Backend
 */

const API_BASE_URL = '/api';
const BACKEND_DIRECT_URL = 'http://localhost:5000/api';

/**
 * Helper to handle fetch responses with proper error messages
 */
const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  let data = {};
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    data = { message: text };
  }

  if (!response.ok) {
    const errorMessage = data.message || `Request failed with status ${response.status}`;
    throw new Error(errorMessage);
  }

  return data;
};

/**
 * Universal fetch with automatic direct backend fallback
 */
const requestWithFallback = async (endpoint, options = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: defaultHeaders
    });
    return await handleResponse(res);
  } catch (primaryErr) {
    try {
      const fallbackRes = await fetch(`${BACKEND_DIRECT_URL}${endpoint}`, {
        ...options,
        headers: defaultHeaders
      });
      return await handleResponse(fallbackRes);
    } catch {
      throw primaryErr;
    }
  }
};

/**
 * Register / Create Account API
 * @param {Object} userData - { fullName, email, password, learningTrack, role }
 */
export const apiRegister = async (userData) => {
  return requestWithFallback('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData)
  });
};

/**
 * Sign In / Login API
 * @param {Object} credentials - { email, password }
 */
export const apiLogin = async (credentials) => {
  return requestWithFallback('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
};

/**
 * Contact Us Form Submission API
 * @param {Object} contactData - { fullName, email, subject, orderId, message }
 */
export const apiContact = async (contactData) => {
  return requestWithFallback('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData)
  });
};

/**
 * Cohort Admission Enrollment API
 * @param {Object} enrollData - { fullName, email, phone, batchId, track, experienceLevel, githubProfile, appliedScholarship, scholarshipReason }
 */
export const apiEnroll = async (enrollData) => {
  return requestWithFallback('/enroll', {
    method: 'POST',
    body: JSON.stringify(enrollData)
  });
};

/**
 * Newsletter Subscription API
 * @param {Object} newsletterData - { email, source }
 */
export const apiNewsletter = async (newsletterData) => {
  return requestWithFallback('/newsletter', {
    method: 'POST',
    body: JSON.stringify(newsletterData)
  });
};

/**
 * Backend Health & MongoDB Connection Check
 */
export const checkApiHealth = async () => {
  try {
    return await requestWithFallback('/health', { method: 'GET' });
  } catch (error) {
    return {
      status: 'unreachable',
      message: error.message,
      database: { status: 'Disconnected' }
    };
  }
};
