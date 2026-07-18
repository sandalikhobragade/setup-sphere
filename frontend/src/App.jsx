import { Routes, Route } from 'react-router-dom';

// Page components — each one represents a full screen/URL in our app
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
    // <Routes> looks at the current browser URL and renders
    // whichever single <Route> below matches it.
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

      {/* Catch-all: matches any URL that didn't match a route above.
          Must always be the LAST route, since React Router checks
          routes top-to-bottom and stops at the first match. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;