import "./Footer.css";

function Footer() {
  // Dynamically calculating the current year avoids having to manually
  // update a hardcoded "2026" every year — small detail, real-world habit.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Setup Sphere. Built by Sandali Khobragade.</p>
      <p className="footer-tagline">
        Your one-stop guide for installing any software, hassle-free.
      </p>
    </footer>
  );
}

export default Footer;