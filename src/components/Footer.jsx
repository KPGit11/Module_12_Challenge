import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/KPGit11" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/kevin-perez-732a88341/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://stackoverflow.com/users/28776993/kevin-perez" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
