import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Nettoyage from '../../assests/1.webp';
import Polissage from '../../assests/2.jpg';
import Interieur from '../../assests/3.jpg';

const ServiceList = () => {
  const services = [
    {
      _id: '507f191e810c19729de860ea',
      name: 'Service de Nettoyage',
      description: 'Le service de nettoyage offre un lavage complet pour tous les véhicules.',
      waitingQueue: 5,
      durationPerPerson: 30,
      image: Nettoyage,
    },
    {
      _id: '00000020f51bb4362eee2a4d',
      name: 'Service de Polissage',
      description: 'Un polissage professionnel pour redonner de l\'éclat à votre voiture.',
      waitingQueue: 3,
      durationPerPerson: 90,
      image: Polissage,
    },
    {
      _id: '507f191e810c19729de860ea',
      name: 'Service d\'Entretien Intérieur',
      description: 'Un nettoyage complet pour l\'intérieur de votre véhicule.',
      waitingQueue: 1,
      durationPerPerson: 30,
      image: Interieur,
    },
   
  ];

  return (
    <div>
      <div className="background"></div>
      <h1>Mes Services</h1>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="action-button special">
          <FontAwesomeIcon icon={faCog} /> Ajouter un service
        </button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher par nom"
            style={{
              width: '150px',
              fontSize: '12px',
              margin: '0',
              border: '1px solid #143d81',
              borderRadius: '3px',
              height: '32px',
            }}
          />
          <button
            style={{
              marginLeft: '5px',
              backgroundColor: '#143d81',
              padding: '0',
              border: 'none',
              borderRadius: '3px',
              margin: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '32px',
            }}
          >
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: '32px', color: 'white' }} />
          </button>
        </div>
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>En attente</th>
            <th>Durée </th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service._id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.waitingQueue} personnes</td>
              <td>{service.durationPerPerson} minutes</td>
              <td>
                <img src={service.image} alt={service.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button className="action-button">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="action-button">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
