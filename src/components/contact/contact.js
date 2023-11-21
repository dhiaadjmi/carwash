import React from 'react';
import { faEnvelope, faMapMarker, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';

const Contact = () => {
  return (
      <div>
                

    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-form">
          <h2>Nous Contacter</h2>
          <input type="text" placeholder="Votre Nom" />
          <input type="email" placeholder="Votre Email" />
          <textarea placeholder="Votre Message"></textarea>
          <button>Envoyer</button>
        </div>
        <div className="contact-info">
          <h3>Informations de Contact</h3>
          <ul>
            <li>
            <FontAwesomeIcon icon={faEnvelope} />    <strong>Email:</strong>      carwash@gmail.com
            </li><br></br>
            <li>
            <FontAwesomeIcon icon={faMapMarker} />  <strong>Addresse:</strong> 3446 Sousse, Tunisia
            </li><br></br>
            <li>
            <FontAwesomeIcon icon={faPhone} />  <strong>Téléphone:</strong> 73 737 373
            </li><br></br>
            <li>
            <FontAwesomeIcon icon={faGlobe} />
    <strong>Site Web:</strong> carwash.com
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
