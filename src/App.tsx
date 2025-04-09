import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Careers from './pages/Careers';
import Work from './pages/Work';

// Import service pages
import HairPage from './pages/services/Hair';
import SkinPage from './pages/services/Skin';
import NailPage from './pages/services/Nail';
import SpaPage from './pages/services/Spa';
import GroomingPage from './pages/services/Grooming';
import SPMUPage from './pages/services/SPMU';

// Import blog pages
import Blog from './pages/Blog';
import NewBlogPost from './pages/NewBlogPost';
import BlogPostView from './pages/BlogPostView';
import Offers from './pages/Offers';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/hair" element={<HairPage />} />
        <Route path="services/skin" element={<SkinPage />} />
        <Route path="services/nail" element={<NailPage />} />
        <Route path="services/spa" element={<SpaPage />} />
        <Route path="services/grooming" element={<GroomingPage />} />
        <Route path="services/spmu" element={<SPMUPage />} />
        <Route path="about" element={<About />} />
        <Route path="offers" element={<Offers />} />
        <Route path="work" element={<Work />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/new" element={<NewBlogPost />} />
        <Route path="blog/:id" element={<BlogPostView />} />
      </Route>
    </Routes>
  );
}

export default App;
