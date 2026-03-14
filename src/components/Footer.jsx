import './Footer.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <span className="footer-label">End of Record</span>
          <p className="footer-brand">MuroRune</p>
          <p className="copyright">© {new Date().getFullYear()} MuroRune. All rights reserved.</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/KirraL2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/Andorei444" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
