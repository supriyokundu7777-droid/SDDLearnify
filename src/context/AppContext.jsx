import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { playXPChime, playSuccessChime } from '../utils/soundEffects';

const AppContext = createContext();

// Sample initial enrolled courses with rich interactive data
const initialEnrolledCourses = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp with React & Node',
    category: 'Web Development',
    instructor: 'Alex Morrison',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    progress: 70,
    totalLessons: 10,
    completedLessons: [1, 2, 3, 4, 5, 6, 7],
    currentLessonId: 8,
    rating: 4.9,
    certificateUnlocked: false,
    lastAccessed: '2 hours ago',
    notes: {
      1: 'React 19 Server Components render on the server without shipping JavaScript bundles to the browser.',
      3: 'Use optimistic updates for high responsiveness when creating interactive apps.'
    }
  },
  {
    id: 2,
    title: 'Mastering AI Agents & LangChain in Python',
    category: 'Data Science & AI',
    instructor: 'Dr. Elena Rostova',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    progress: 100,
    totalLessons: 10,
    completedLessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentLessonId: 10,
    rating: 5.0,
    certificateUnlocked: true,
    credentialId: 'LF-CERT-AI-8842',
    issuedDate: 'October 1, 2026',
    lastAccessed: '1 day ago',
    notes: {
      2: 'Tool calling requires robust schema definition using Pydantic.'
    }
  },
  {
    id: 3,
    title: 'Next.js 15, Server Actions & App Router In-Depth',
    category: 'Web Development',
    instructor: 'Mark Evans',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
    progress: 40,
    totalLessons: 10,
    completedLessons: [1, 2, 3, 4],
    currentLessonId: 5,
    rating: 4.9,
    certificateUnlocked: false,
    lastAccessed: '3 days ago',
    notes: {}
  }
];

const initialCart = [
  {
    id: 101,
    title: 'Mastering Docker & Kubernetes Microservices',
    category: 'Cloud & DevOps',
    type: 'Course',
    price: 49.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=300&q=80',
    quantity: 1
  },
  {
    id: 102,
    title: 'UI/UX Design Systems in Figma 2026',
    category: 'UI/UX Design',
    type: 'Course',
    price: 39.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80',
    quantity: 1
  }
];

const initialWishlist = [
  {
    id: 103,
    title: 'Generative AI & LLM Fine-Tuning Bootcamp',
    category: 'Data Science & AI',
    instructor: 'Dr. Elena Rostova',
    price: 64.99,
    originalPrice: 119.99,
    rating: 4.95,
    reviews: '2.1k',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 104,
    title: 'Cybersecurity Threat Intelligence & Ethical Hacking',
    category: 'Cyber Security',
    instructor: 'David Reynolds',
    price: 54.99,
    originalPrice: 99.99,
    rating: 4.88,
    reviews: '1.4k',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 105,
    title: 'Cloud Architecture with AWS Solutions Architect Track',
    category: 'Cloud & DevOps',
    instructor: 'Sarah Jenkins',
    price: 44.99,
    originalPrice: 79.99,
    rating: 4.82,
    reviews: '3.0k',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80'
  }
];

const initialBadges = [
  { id: 'streak-7', name: '7-Day Streak', desc: 'Maintained a consistent daily learning streak', icon: '🔥', unlocked: true, date: 'October 2, 2026' },
  { id: 'quiz-master', name: 'Quiz Master', desc: 'Scored 100% on a module comprehension quiz', icon: '🎯', unlocked: true, date: 'October 1, 2026' },
  { id: 'sandbox-pro', name: 'Code Pilot', desc: 'Executed JavaScript in the in-browser sandbox', icon: '💻', unlocked: true, date: 'September 28, 2026' },
  { id: 'cert-earned', name: 'Certified Builder', desc: 'Completed an accredited tech track', icon: '🏆', unlocked: true, date: 'October 1, 2026' },
  { id: 'flashcards-hero', name: 'Knowledge Retainer', desc: 'Mastered 5+ technical flashcard concepts', icon: '⚡', unlocked: false },
  { id: 'social-contributor', name: 'Community Voice', desc: 'Asked or answered a question in the student Q&A forum', icon: '💬', unlocked: false },
  { id: 'code-master', name: 'Code Arena Champion', desc: 'Solved algorithmic challenges with all tests passing', icon: '💻', unlocked: false },
  { id: 'assessment-pro', name: 'Certified Specialist', desc: 'Passed a timed technical assessment exam with honors', icon: '🎯', unlocked: false },
  { id: 'focus-zen', name: 'Deep Focus Guru', desc: 'Completed 3+ Pomodoro focus sessions in the Study Lounge', icon: '🧘', unlocked: false }
];

const initialQuestions = [
  {
    id: 1,
    courseId: 1,
    author: 'Liam Chen',
    avatar: 'LC',
    date: 'Yesterday at 3:15 PM',
    title: 'How does React 19 Action handle form pending state internally?',
    content: 'In Lesson 3, we implemented useActionState. Does it automatically reset the form or should we manage it with ref?',
    upvotes: 12,
    userUpvoted: false,
    instructorAnswered: true,
    replies: [
      {
        id: 101,
        author: 'Alex Morrison (Lead Instructor)',
        role: 'Instructor',
        avatar: 'AM',
        date: 'Yesterday at 4:30 PM',
        content: 'Great question Liam! useActionState provides the pending state automatically while the Action promise resolves. If you want automatic form reset, you can use the native HTML form reset or pair it with an action ref callback.'
      }
    ]
  },
  {
    id: 2,
    courseId: 1,
    author: 'Sarah Connor',
    avatar: 'SC',
    date: '2 days ago',
    title: 'Docker container port mapping issues on Windows',
    content: 'When running `docker run -p 3000:3000`, the container starts but localhost:3000 refuses connection. Anyone faced this?',
    upvotes: 7,
    userUpvoted: false,
    instructorAnswered: false,
    replies: [
      {
        id: 102,
        author: 'Supriyo Kundu',
        role: 'Pro Student',
        avatar: 'SK',
        date: '1 day ago',
        content: 'Check if WSL 2 is enabled in Docker Desktop settings and ensure your app listens on 0.0.0.0 instead of 127.0.0.1 inside the container!'
      }
    ]
  }
];

const defaultUserData = {
  name: 'Supriyo Kundu',
  email: 'kundusupriyo@gmail.com',
  initials: 'SK',
  role: 'Pro Student',
  title: 'Full Stack & AI Engineer Apprentice',
  bio: 'Lifelong learner focusing on building distributed web applications, Next.js 15, and autonomous AI agents.',
  streak: 7,
  hoursLearned: 38.5,
  points: 1450,
  country: 'India',
  skills: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'Python', 'LangChain', 'Docker'],
  targetWeeklyHours: 12,
  lastStreakClaimDate: null
};

export const AppProvider = ({ children }) => {
  // Theme State: 'dark' | 'light'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('learnify_theme');
    return saved || 'dark';
  });

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem('learnify_is_authenticated');
    return saved !== null ? saved === 'true' : true;
  });

  // User Profile & Gamification
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('learnify_user');
    return saved ? JSON.parse(saved) : defaultUserData;
  });

  // Badges State (Merging any newly added badges with saved ones)
  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem('learnify_badges');
    if (!saved) return initialBadges;
    try {
      const parsed = JSON.parse(saved);
      const existingIds = new Set(parsed.map((b) => b.id));
      const merged = [...parsed];
      initialBadges.forEach((b) => {
        if (!existingIds.has(b.id)) {
          merged.push(b);
        }
      });
      return merged;
    } catch {
      return initialBadges;
    }
  });

  // Sound Effects toggle
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('learnify_sound') !== 'false';
  });

  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('learnify_cart');
    return saved ? JSON.parse(saved) : initialCart;
  });

  // Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('learnify_wishlist');
    return saved ? JSON.parse(saved) : initialWishlist;
  });

  // Enrolled Courses State
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('learnify_enrolled');
    return saved ? JSON.parse(saved) : initialEnrolledCourses;
  });

  // Classroom Discussion Questions
  const [classroomQuestions, setClassroomQuestions] = useState(() => {
    const saved = localStorage.getItem('learnify_questions');
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  // Mastered Flashcards IDs
  const [masteredFlashcards, setMasteredFlashcards] = useState(() => {
    const saved = localStorage.getItem('learnify_flashcards_mastered');
    return saved ? JSON.parse(saved) : [1, 3];
  });

  // Discount / Promo Code
  const [appliedPromo, setAppliedPromo] = useState({
    code: 'LEARN2026',
    discountPercent: 15
  });

  // Toast System
  const [toasts, setToasts] = useState([]);

  // Global Search Keyword
  const [searchKeyword, setSearchKeyword] = useState('');

  // Apply Theme to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('learnify_theme', theme);
  }, [theme]);

  // Persist storage
  useEffect(() => {
    localStorage.setItem('learnify_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('learnify_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('learnify_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('learnify_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('learnify_enrolled', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    localStorage.setItem('learnify_questions', JSON.stringify(classroomQuestions));
  }, [classroomQuestions]);

  useEffect(() => {
    localStorage.setItem('learnify_flashcards_mastered', JSON.stringify(masteredFlashcards));
  }, [masteredFlashcards]);

  // Toggle Theme Function
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      showToast('Theme Changed', `Switched to ${next === 'dark' ? 'Dark 🌙' : 'Light ☀️'} mode.`, 'info');
      return next;
    });
  };

  // ID Counter Ref
  const idRef = useRef(100);

  // Toast Helpers
  const showToast = (title, message, type = 'info') => {
    idRef.current += 1;
    const id = idRef.current;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // XP and Gamification
  const addXP = (amount, reason = '') => {
    setUser((prev) => {
      const newPoints = (prev.points || 0) + amount;
      return { ...prev, points: newPoints };
    });
    if (soundEnabled) {
      playXPChime();
    }
    showToast(`+${amount} XP Earned!`, reason || 'Great job accelerating your engineering learning.', 'success');
  };

  const claimDailyStreak = () => {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (user.lastStreakClaimDate === todayStr) {
      showToast('Already Claimed', 'You already claimed your daily learning bonus today! Come back tomorrow.', 'info');
      return false;
    }

    setUser((prev) => ({
      ...prev,
      points: (prev.points || 0) + 50,
      streak: (prev.streak || 0) + 1,
      lastStreakClaimDate: todayStr
    }));

    unlockBadge('streak-7');
    showToast('🔥 Daily Streak Claimed!', '+50 XP awarded! Your streak is now increased.', 'success');
    return true;
  };

  const unlockBadge = (badgeId) => {
    setBadges((prev) =>
      prev.map((b) => {
        if (b.id === badgeId && !b.unlocked) {
          if (soundEnabled) {
            playSuccessChime();
          }
          showToast(`🏆 Badge Unlocked: ${b.name}!`, b.desc, 'warning');
          return { ...b, unlocked: true, date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) };
        }
        return b;
      })
    );
  };

  // Flashcards Mastery
  const toggleFlashcardMastery = (cardId) => {
    setMasteredFlashcards((prev) => {
      const exists = prev.includes(cardId);
      let updated;
      if (exists) {
        updated = prev.filter((id) => id !== cardId);
        showToast('Moved to Review', 'Card returned to your active review deck.', 'info');
      } else {
        updated = [...prev, cardId];
        addXP(10, 'Card concept mastered!');
        if (updated.length >= 5) {
          unlockBadge('flashcards-hero');
        }
      }
      return updated;
    });
  };

  // Classroom Discussion Forum
  const addClassroomQuestion = (courseId, title, content) => {
    idRef.current += 1;
    const newQ = {
      id: idRef.current,
      courseId: courseId || 1,
      author: user.name,
      avatar: user.initials || 'SK',
      date: 'Just now',
      title,
      content,
      upvotes: 1,
      userUpvoted: true,
      instructorAnswered: false,
      replies: []
    };

    setClassroomQuestions((prev) => [newQ, ...prev]);
    addXP(15, 'Contributed to peer discussion forum');
    unlockBadge('social-contributor');
    showToast('Question Posted!', 'Your question was shared with mentors and peers.', 'success');
  };

  const upvoteQuestion = (qId) => {
    setClassroomQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId) {
          const upvoted = !q.userUpvoted;
          return {
            ...q,
            upvotes: upvoted ? q.upvotes + 1 : Math.max(0, q.upvotes - 1),
            userUpvoted: upvoted
          };
        }
        return q;
      })
    );
  };

  const addQuestionReply = (qId, replyContent) => {
    idRef.current += 1;
    const replyId = idRef.current;
    setClassroomQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId) {
          return {
            ...q,
            replies: [
              ...q.replies,
              {
                id: replyId,
                author: user.name,
                role: user.role,
                avatar: user.initials || 'SK',
                date: 'Just now',
                content: replyContent
              }
            ]
          };
        }
        return q;
      })
    );
    addXP(15, 'Helpful answer posted to community discussion');
    showToast('Reply Posted', 'Thank you for helping fellow engineers learn!', 'success');
  };

  // Cart Functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast('Cart Updated', `Increased quantity of "${product.title}"`, 'info');
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      showToast('Added to Cart', `"${product.title}" added to your cart!`, 'success');
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          category: product.category || product.cat || 'Online Course',
          type: product.type || 'Course',
          price: product.price || product.pr || 49.99,
          originalPrice: product.originalPrice || product.opr || 89.99,
          image: product.image || product.img || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80',
          quantity: 1
        }
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        showToast('Item Removed', `Removed "${item.title}" from your cart`, 'warning');
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const updateCartQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'LEARN2026' || clean === 'SPRING2026') {
      setAppliedPromo({ code: clean, discountPercent: 20 });
      showToast('Coupon Applied!', `Promo code "${clean}" applied for 20% OFF!`, 'success');
      return { success: true, message: `20% discount applied with code ${clean}!` };
    } else if (clean === 'SUPER50') {
      setAppliedPromo({ code: clean, discountPercent: 50 });
      showToast('Super Deal!', 'Flash 50% discount applied!', 'success');
      return { success: true, message: '50% Flash deal applied!' };
    } else {
      showToast('Invalid Code', 'The coupon code entered is invalid or expired.', 'danger');
      return { success: false, message: 'Invalid promo code' };
    }
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartDiscountAmount = appliedPromo
    ? (cartSubtotal * (appliedPromo.discountPercent / 100))
    : 0;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscountAmount);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Wishlist Functions
  const toggleWishlist = (course) => {
    const isSaved = wishlist.some((item) => item.id === course.id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((item) => item.id !== course.id));
      showToast('Removed from Wishlist', `Removed "${course.title}" from wishlist.`, 'warning');
    } else {
      setWishlist((prev) => [
        ...prev,
        {
          id: course.id,
          title: course.title,
          category: course.category || course.cat || 'Tech Course',
          instructor: course.instructor || course.inst || 'Lead Mentor',
          price: course.price || course.pr || 49.99,
          originalPrice: course.originalPrice || course.opr || 89.99,
          rating: course.rating || course.r || 4.9,
          reviews: course.reviews || course.rev || '1.2k',
          image: course.image || course.img || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80'
        }
      ]);
      showToast('Saved to Wishlist', `Saved "${course.title}" to your wishlist!`, 'success');
    }
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  // Enrolled Courses & Learning Progress
  const enrollCourse = (course) => {
    const existing = enrolledCourses.find((c) => c.id === course.id);
    if (existing) {
      showToast('Already Enrolled', 'You are already enrolled in this course!', 'info');
      return existing;
    }

    idRef.current += 1;
    const newEnrolled = {
      id: course.id || idRef.current,
      title: course.title,
      category: course.category || 'Software Engineering',
      instructor: course.instructor || 'Learnify Lead Instructor',
      image: course.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      progress: 0,
      totalLessons: 10,
      completedLessons: [],
      currentLessonId: 1,
      rating: 5.0,
      certificateUnlocked: false,
      lastAccessed: 'Just now',
      notes: {}
    };

    setEnrolledCourses((prev) => [newEnrolled, ...prev]);
    addXP(50, 'Course enrollment bonus');
    showToast('Enrollment Successful!', `You are now enrolled in "${course.title}". Happy learning!`, 'success');
    return newEnrolled;
  };

  const markLessonCompleted = (courseId, lessonId, totalLessons = 10) => {
    setEnrolledCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          const completedSet = new Set(c.completedLessons || []);
          completedSet.add(lessonId);
          const completedList = Array.from(completedSet);
          const newProgress = Math.min(100, Math.round((completedList.length / totalLessons) * 100));
          const certUnlocked = newProgress === 100;

          if (certUnlocked && !c.certificateUnlocked) {
            unlockBadge('cert-earned');
            addXP(200, 'Track completed and certificate unlocked!');
            showToast('🎓 Certificate Unlocked!', `Congratulations! You completed "${c.title}"!`, 'success');
          } else {
            addXP(25, 'Lesson completed');
            showToast('Lesson Complete!', `Lesson marked complete. Progress: ${newProgress}%`, 'success');
          }

          return {
            ...c,
            completedLessons: completedList,
            progress: newProgress,
            certificateUnlocked: certUnlocked,
            credentialId: c.credentialId || `LF-CERT-${Math.floor(1000 + Math.random() * 9000)}`,
            issuedDate: c.issuedDate || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            lastAccessed: 'Just now'
          };
        }
        return c;
      })
    );
  };

  const saveLessonNote = (courseId, lessonId, noteText) => {
    setEnrolledCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          return {
            ...c,
            notes: {
              ...(c.notes || {}),
              [lessonId]: noteText
            }
          };
        }
        return c;
      })
    );
    showToast('Notes Saved', 'Your personal lesson notes were saved.', 'info');
  };

  // User Profile
  const updateUserProfile = (fields) => {
    setUser((prev) => ({ ...prev, ...fields }));
    showToast('Profile Updated', 'Your profile details have been saved successfully.', 'success');
  };

  // Authentication Handlers
  const login = (credentials = {}) => {
    const email = credentials.email?.trim() || 'kundusupriyo@gmail.com';
    let name = credentials.name?.trim() || credentials.fullName?.trim();
    if (!name) {
      if (email.toLowerCase().includes('supriyo') || email.toLowerCase().includes('kundu')) {
        name = 'Supriyo Kundu';
      } else {
        const username = email.split('@')[0];
        name = username.charAt(0).toUpperCase() + username.slice(1);
      }
    }
    const initials = credentials.initials || name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'SK';

    const role = credentials.role || (email.includes('instructor') ? 'Lead Instructor' : 'Pro Student');

    const updatedUser = {
      ...defaultUserData,
      ...user,
      id: credentials._id || credentials.id || user.id,
      _id: credentials._id || credentials.id || user.id,
      name,
      fullName: name,
      email,
      initials,
      role,
      token: credentials.token || null
    };

    setUser(updatedUser);
    setIsAuthenticated(true);
    localStorage.setItem('learnify_is_authenticated', 'true');
    localStorage.setItem('learnify_user', JSON.stringify(updatedUser));
    if (credentials.token) {
      localStorage.setItem('learnify_token', credentials.token);
    }
    if (soundEnabled) {
      playSuccessChime();
    }
    showToast(`Welcome back, ${name}!`, 'You have successfully signed in.', 'success');
    return updatedUser;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('learnify_is_authenticated', 'false');
    localStorage.removeItem('learnify_token');
    showToast('Signed Out', 'You have been logged out of your account.', 'info');
  };

  const register = (registrationData = {}) => {
    const name = registrationData.fullName?.trim() || registrationData.name?.trim() || 'New Learner';
    const email = registrationData.email?.trim() || 'learner@example.com';
    const initials = registrationData.initials || name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'NL';
    const track = registrationData.learningTrack || 'Full-Stack Development';

    const newUser = {
      ...defaultUserData,
      id: registrationData._id || registrationData.id,
      _id: registrationData._id || registrationData.id,
      name,
      fullName: name,
      email,
      initials,
      role: registrationData.role || 'Student',
      title: `${track} Scholar`,
      learningTrack: track,
      token: registrationData.token || null,
      streak: 1,
      hoursLearned: 0,
      points: 100
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('learnify_is_authenticated', 'true');
    localStorage.setItem('learnify_user', JSON.stringify(newUser));
    if (registrationData.token) {
      localStorage.setItem('learnify_token', registrationData.token);
    }
    if (soundEnabled) {
      playSuccessChime();
    }
    showToast(`Welcome, ${name}!`, 'Your student account was created successfully.', 'success');
    return newUser;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        isAuthenticated,
        login,
        logout,
        register,
        user,
        updateUserProfile,
        badges,
        unlockBadge,
        claimDailyStreak,
        addXP,
        masteredFlashcards,
        toggleFlashcardMastery,
        classroomQuestions,
        addClassroomQuestion,
        upvoteQuestion,
        addQuestionReply,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartSubtotal,
        cartDiscountAmount,
        cartTotal,
        cartCount,
        appliedPromo,
        applyPromoCode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
        enrolledCourses,
        enrollCourse,
        markLessonCompleted,
        saveLessonNote,
        toasts,
        showToast,
        dismissToast,
        searchKeyword,
        setSearchKeyword,
        soundEnabled,
        setSoundEnabled
      }}
    >
      {children}

      {/* Global Visual Toast Alerts */}
      <div className="toast-container-custom">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-custom border-${
              toast.type === 'success'
                ? 'success text-white'
                : toast.type === 'danger'
                ? 'danger text-white'
                : toast.type === 'warning'
                ? 'warning text-white'
                : 'info text-white'
            }`}
          >
            <div className="fs-5">
              {toast.type === 'success' && '✨'}
              {toast.type === 'warning' && '⚠️'}
              {toast.type === 'danger' && '❌'}
              {toast.type === 'info' && '💡'}
            </div>
            <div className="flex-grow-1">
              <div className="fw-bold small">{toast.title}</div>
              <div className="small opacity-75">{toast.message}</div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white btn-sm"
              onClick={() => dismissToast(toast.id)}
              aria-label="Close"
            />
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
