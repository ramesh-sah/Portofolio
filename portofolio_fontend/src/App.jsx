import Footer from "./Screens/Footer/Footer"
import NavBar from "./Screens/Header/NavBar"
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Screens/Pages/About/AboutPage";
import ResumePage from "./Screens/Pages/Resume/ResumePage";
import ProjectsPage from "./Screens/Pages/Projects/ProjectsPage";
import CoursesPage from "./Screens/Pages/Courses/CoursesPage";
import NotesPage from "./Screens/Pages/Notes/NotesPage";
import BlogPage from "./Screens/Pages/Blog/BlogPage";
import ContactPage from "./Screens/Pages/Contact/ContactPage";



function App() {
  return (
    <>

      <NavBar />

      <Routes>
 
        <Route path="/" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes for other pages */}

      </Routes>
      <Footer />
    </>
  )
}

export default App