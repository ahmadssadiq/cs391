import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certification from './pages/Certification';
import References from './pages/References';
import './App.css';

function Root() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}