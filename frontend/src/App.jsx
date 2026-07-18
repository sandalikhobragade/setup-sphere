import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SearchResults from './pages/SearchResults';
import GuideDetail from './pages/GuideDetail';
import CreateGuide from './pages/CreateGuide';
import EditGuide from './pages/EditGuide';
import MyGuides from './pages/MyGuides';
import ErrorAnalyzer from './pages/ErrorAnalyzer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';


function App() {
  return (
    // Layout wraps ALL routes, so Navbar/Footer appear on every page
    // without repeating that markup inside each individual page component.
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/guides/:id" element={<GuideDetail />} />
        <Route path="/create-guide" element={<CreateGuide />} />
        <Route path="/edit-guide/:id" element={<EditGuide />} />
        <Route path="/my-guides" element={<MyGuides />} />
        <Route path="/error-analyzer" element={<ErrorAnalyzer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;