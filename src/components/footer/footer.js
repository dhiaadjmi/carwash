import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>A propos de nous </h3>
          <p>Explorez notre plateforme dédiée à la découverte des stations de lavage, où vous pouvez non seulement consulter les services offerts mais aussi réserver aisément le service de votre choix</p>
        
        </div>
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li>A propos de nous </li>
            <li>Stations</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
  <FontAwesomeIcon icon={faMapMarker} />
  3446 Sousse, Tunisia
</p>
<p>
  <FontAwesomeIcon icon={faEnvelope} />
  Email: carwash@gmail.com
</p>
<p>
  <FontAwesomeIcon icon={faPhone} />
  Téléphone: +73 737373
</p>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; Carwash 2023. Tous droits sont réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
