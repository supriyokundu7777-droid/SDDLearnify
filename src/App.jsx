import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

// Global Context Provider
import { AppProvider } from "./context/AppContext";

// Layout Components
import Header from "./component/Header";
import Footer from "./component/Footer";
import AICopilotModal from "./component/AICopilotModal";

// Main Components
import Home from "./component/Home";
import About from "./component/About";
import Course from "./component/Course";
import Shop from "./component/Shop";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Pages from "./component/Pages";

// Pages Folder Components (src/component/pages/)
import HomeOne from "./component/pages/HomeOne";
import HomeTwo from "./component/pages/HomeTwo";
import CourseOne from "./component/pages/CourseOne";
import CourseTwo from "./component/pages/CourseTwo";
import CourseThree from "./component/pages/CourseThree";
import CourseDetails from "./component/pages/CourseDetails";
import Instructor from "./component/pages/Instructor";
import InstructorDetails from "./component/pages/InstructorDetails";
import Event from "./component/pages/Event";
import SingleEvent from "./component/pages/SingleEvent";
import PricingPlan from "./component/pages/PricingPlan";
import FaqPage from "./component/pages/FaqPage";
import LoginPage from "./component/pages/LoginPage";
import Register from "./component/pages/Register";
import NotFound from "./component/pages/404";
import SingleShop from "./component/pages/SingleShop";
import Cart from "./component/pages/Cart";
import Checkout from "./component/pages/Checkout";
import BlogDetails from "./component/pages/BlogDetails";
import EnrollNow from "./component/pages/EnrollNow";
import DiscoverMore from "./component/pages/DiscoverMore";
import ExploreCourse from "./component/pages/ExploreCourse";

// Interactive Learning Features
import Dashboard from "./component/pages/Dashboard";
import Classroom from "./component/pages/Classroom";
import Certificate from "./component/pages/Certificate";
import MyCourses from "./component/pages/MyCourses";
import Wishlist from "./component/pages/Wishlist";
import Profile from "./component/pages/Profile";
import Flashcards from "./component/pages/Flashcards";
import CodingLab from "./component/pages/CodingLab";
import Assessment from "./component/pages/Assessment";
import StudyLounge from "./component/pages/StudyLounge";
import InterviewPrep from "./component/pages/InterviewPrep";
import CheatSheets from "./component/pages/CheatSheets";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        {/* Navbar Header */}
        <Header />

        <main className="flex-grow-1">
          <Routes>
            {/* Home Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home-one" element={<HomeOne />} />
            <Route path="/home-two" element={<HomeTwo />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Interactive Student Learning & Practice Hub */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/learn" element={<Classroom />} />
            <Route path="/learn/:courseId" element={<Classroom />} />
            <Route path="/coding-lab" element={<CodingLab />} />
            <Route path="/arena" element={<CodingLab />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/study-lounge" element={<StudyLounge />} />
            <Route path="/pomodoro" element={<StudyLounge />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/cheat-sheets" element={<CheatSheets />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/certificate/:courseId" element={<Certificate />} />
            <Route path="/verify" element={<Certificate />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />

            {/* Course Routes */}
            <Route path="/course" element={<Course />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/courses/:category" element={<Course />} />
            <Route path="/course-one" element={<CourseOne />} />
            <Route path="/course-two" element={<CourseTwo />} />
            <Route path="/course-three" element={<CourseThree />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/discover-more" element={<DiscoverMore />} />
            <Route path="/explore-course" element={<ExploreCourse />} />

            {/* Pages & Directory */}
            <Route path="/pages" element={<Pages />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/instructor-details" element={<InstructorDetails />} />
            <Route path="/events" element={<Event />} />
            <Route path="/single-event" element={<SingleEvent />} />
            <Route path="/pricing-plan" element={<PricingPlan />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/terms" element={<FaqPage />} />
            <Route path="/privacy" element={<FaqPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />

            {/* Shop Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/single-shop" element={<SingleShop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<BlogDetails />} />

            {/* Contact & Enroll */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<EnrollNow />} />

            {/* 404 Route */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Floating AI Study Copilot Assistant */}
        <AICopilotModal />

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;