
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StationImage from '../../assests/l.jpg'; 
import './stationDetail.css'; 
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faMapMarker} from '@fortawesome/free-solid-svg-icons';
import Polissage from '../../assests/2.jpg'; 
import Interieur from '../../assests/3.jpg'; 
import Phare from '../../assests/4.jpeg'; 
import Ceramique from '../../assests/5.jpeg'; 
import Detaillage from '../../assests/6.jpeg'; 
import Nettoyage from '../../assests/1.webp'; 
import Wof from '../../assests/st2.jpeg';

function StationDetail() {
  /** 
 const { stationId } = useParams();
  const [stationData, setStationData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(`http://localhost:5000/stations/${stationId}`, axiosConfig)
      .then((response) => {
        setStationData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching station details:', error);
        setLoading(false);
      });
  }, [stationId]);

  if (loading) {
    return <p>Loading...</p>;
  }
  */
  const stationData = {
    image: Wof,
    name: "Great White",
    address: "Los Angeles,CA 90033, États-Unis ",
    phones: {
      phone1: "+ 87 543 322",
      phone2: "+ 76 543 368",
    },

  };

  return (
    <div>
      <Navbar />
   
      <div className="station-detail">
        <div className="station-header">
      
          <img
            src={stationData.image}
            alt="Station"
            className="station-image"
          />
       
        </div>
        <div className="station-info">
          <h3>{stationData.name}</h3>
          <p>
            <strong>
              <FontAwesomeIcon icon={faMapMarker} style={{ color: '#168aff' }} /> Address:
            </strong>{' '}
            {stationData.address}
          </p>
          <p>
      <strong>
        <FontAwesomeIcon icon={faPhone} style={{ color: '#168aff' }} /> Phone 1:
      </strong>{' '}
      {stationData.phones && stationData.phones.phone1}
    </p>
    <p>
      <strong>
        <FontAwesomeIcon icon={faPhone} style={{ color: '#168aff' }} /> Phone 2:
      </strong>{' '}
      {stationData.phones && stationData.phones.phone2}
    </p>
        </div>
      </div>
  

      
      <div className="service-cards-container">
        <ul className="service-cards-list">
  <li className="service-card">
    <img src={Nettoyage} alt="Service 1" />
    <h5>Great White</h5>
    <h5>Service de Nettoyage</h5>
    <p>Description du service de nettoyage : Le service de nettoyage offre un lavage complet pour tous les véhicules.</p>
    <button className="view-button">Voir</button>
  </li>
  <li className="service-card">
    <img src={Polissage} alt="Service 2" />
    <h5>Great White</h5>
    <h5>Service de Polissage</h5>
    <p>Description du service de polissage : Un polissage professionnel pour redonner de l'éclat à votre voiture.</p>
    <button className="view-button">Voir</button>
  </li>
  <li className="service-card">
    <img src={Interieur} alt="Service 3" />
    <h5>Great White</h5>
    <h5>Service d'Entretien Intérieur</h5>
    <p>Description du service d'entretien intérieur : Un nettoyage complet pour l'intérieur de votre véhicule.</p>
    <button className="view-button">Voir</button>
  </li>


</ul>
        </div>
    </div>
  );
}

export default StationDetail;
