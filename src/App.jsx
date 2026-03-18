import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import './App.css';

const About = lazy(() => import('./pages/About.jsx'));
const CompletedProjects = lazy(() => import('./pages/CompletedProjects.jsx'));
const ProjectsUnderConstruction = lazy(() => import('./pages/ProjectsUnderConstruction.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));

function AppContent() {
  const location = useLocation();
  const isProjectDetail = /^\/projekat\/[^/]+$/.test(location.pathname);

  return (
    <>
      <ScrollToTop />
      <div className="app">
        {!isProjectDetail && <Navbar />}
        <div className="app-main">
          <Suspense fallback={<div className="app-loading" aria-live="polite">Učitavanje…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nama" element={<About />} />
              <Route path="/gotovi-projekti" element={<CompletedProjects />} />
              <Route path="/projekti-u-izgradnji" element={<ProjectsUnderConstruction />} />
              <Route path="/projekat/:slug" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
