import React from 'react'
import stationImage from '../../assests/l.jpg'; 
import Polissage from '../../assests/2.jpg'; 
import Interieur from '../../assests/3.jpg'; 
import Phare from '../../assests/4.jpeg'; 
import Ceramique from '../../assests/5.jpeg'; 
import Detaillage from '../../assests/6.jpeg'; 
import Nettoyage from '../../assests/1.webp'; 

const ServiceCard = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
              <div className="service-list">
        <h4>Les services Disponibles de tout les stations</h4>
        <br></br>
            <br></br>
            <br></br>

        <div className="service-cards-container">
        <ul className="service-cards-list">
  <li className="service-card">
    <img src={Nettoyage} alt="Service 1" />
    <h5>Great White</h5>
    <h5>Service de Nettoyage</h5>
    <p>Le service de nettoyage offre un lavage complet pour tous les véhicules.</p>
    <button className="view-button">Voir</button>
  </li>


  <li className="service-card">
    <img src={Phare} alt="Service 4" />
    <h5>Blue Bird</h5>
    <h5>Service de Rénovation des Phares</h5>
    <p> Pour redonner de la clarté à vos phares automobiles.</p>
    <button className="view-button">Voir</button>
  </li>
  <li className="service-card">
    <img src={Polissage} alt="Service 2" />
    <h5>Great White</h5>
    <h5>Service de Polissage</h5>
    <p> Un polissage professionnel pour redonner de l'éclat à votre voiture.</p>
    <button className="view-button">Voir</button>
  </li>

  <li className="service-card">
    <img src={Ceramique} alt="Service 5" />
    <h5>Rein</h5>
    <h5>Service de Traitement Céramique</h5>
    <p> Un traitement pour protéger la carrosserie de votre voiture.</p>
    <button className="view-button">Voir</button>
  </li>
  <li className="service-card">
    <img src={Interieur} alt="Service 3" />
    <h5>Great White</h5>
    <h5>Service d'Entretien Intérieur</h5>
    <p> Un nettoyage complet pour l'intérieur de votre véhicule.</p>
    <button className="view-button">Voir</button>
  </li>

  <li className="service-card">
    <img src={Detaillage} alt="Service 6" />
    <h5>Clean</h5>
    <h5>Service de Détaillage Automobile</h5>
    <p>Pour un nettoyage en profondeur de votre voiture, intérieur et extérieur.</p>
    <button className="view-button">Voir</button>
  </li>
</ul>
        </div>
      </div>
        </div>
    )
}

export default ServiceCard
