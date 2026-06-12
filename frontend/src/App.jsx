import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Activities from './pages/Activities';
import About from './pages/About';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="bookings" element={<PageTransition><Bookings /></PageTransition>} />
          <Route path="activities" element={<PageTransition><Activities /></PageTransition>} />
          <Route path="about" element={<PageTransition><About /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;