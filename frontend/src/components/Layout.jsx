import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

// Layout wraps every page with a shared Navbar and Footer.
// `children` represents whatever page component is currently
// being rendered by React Router — passed in from App.jsx.
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;