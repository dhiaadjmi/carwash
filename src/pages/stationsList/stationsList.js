import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faSearch } from '@fortawesome/free-solid-svg-icons';
import EditStation from'../../components/editStation/editStation';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import './stationsList.css';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
export const StationsList = () => {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({}); 
  const token = localStorage.getItem('token'); 
  console.log('Token from local storage:', token);

  useEffect(() => {
    const axiosConfig = {
        headers: {
            Authorization: token, 
        },
      };
   
    axios
      .get('http://localhost:5000/stations/list', axiosConfig)
      .then((response) => {
       
        setStations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching stations:', error);
      });
  }, [token]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStations = stations.filter((station) =>
    station.name && station.name.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : '')
  );
  const handleDeleteClick = (stationId) => {
    const axiosConfig = {
        headers: {
            Authorization: token, 
        },
      };
    axios.delete(`http://localhost:5000/stations/${stationId}`,axiosConfig)
      .then(() => {
        const updatedStations = stations.filter((station) => station._id !== stationId);
        setStations(updatedStations);
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de l\'station :', error);
      });
  };
  const handleEditClick = (station) => {
    setSelectedStation(station);
    setEditFormData({
      name: station.name,
      phones: {
        phone1: station.phones.phone1,
        phone2: station.phones.phone2,
      },
      email: station.email
   ,
    });
    setIsEditModalOpen(true);
  };
  const handleEditSubmit = (formData) => {
    const axiosConfig = {
      headers: {
          Authorization: token, 
      },
    };
    // Appelez d'abord l'API PUT pour mettre à jour l'station
    axios
      .put(`http://localhost:5000/stations/${selectedStation._id}`, formData,axiosConfig)
      .then(() => {
        // Ensuite, appelez l'API GET pour obtenir la liste mise à jour des stations
        axios.get('http://localhost:5000/stations/list',axiosConfig)
          .then((response) => {
            // Mettez à jour l'état local des stations avec les données de la réponse GET
            setStations(response.data);
  
            // Enfin, fermez le modal d'édition
            setIsEditModalOpen(false);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération de la liste des stations :', error);
          });
      })
      .catch((error) => {
        console.error('Erreur lors de la modification de l\'station :', error);
      });
  };

  return (
    <div>
      <AdminNavbar/>
      <div className="background"></div>
      <h1>Liste des Stations</h1>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/addstation">
          <button className="action-button special">
            <FontAwesomeIcon icon={faGasPump} /> Ajouter une station
          </button>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <input 
    type="text"
    placeholder="Rechercher par nom"
    value={searchTerm}
    onChange={handleSearchChange}
    style={{
      width: '150px',
      fontSize: '12px',
      margin: '0',
      border: '1px solid #143d81',
      borderRadius: '3px',
      height: '32px', // Ajuster la hauteur de l'input
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
      height: '32px', // Ajuster la hauteur du bouton
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
            <th>Descrption</th>
            <th>Téléphone 1</th>
            <th>Téléphone 2</th>
          </tr>
        </thead>
        <tbody>
          {filteredStations.map((station) => (
            <tr key={station._id}>
              <td>{station._id}</td>
              <td>{station.name}</td>
              <td>Description</td>
              <td>{station.phones && station.phones.phone1}</td>
              <td>{station.phones && station.phones.phone2}</td>
              <td>
              <button className="action-button">
                  <FontAwesomeIcon icon={faEdit}  onClick={() => handleEditClick(station)}/> 
                </button>
                <button className="action-button" onClick={() => handleDeleteClick(station._id)}>
  <FontAwesomeIcon icon={faTrash} /> 
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && selectedStation && (
        <EditStation
          station={selectedStation}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default StationsList;
