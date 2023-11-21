import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import EditStation from '../../components/editStation/editStation';
import Wof from '../../assests/st2.jpeg';
import Bluebird from '../../assests/st4.jpeg';
import Clean from '../../assests/st1.webp';
import Regin from '../../assests/st3.jpeg';
import './staticListStation.css';

const StaticListStations = () => {
  const [stations, setStations] = useState([
    {
        _id: '507f1f77bcf86cd799439015',
        image:Bluebird,
        address: "California, Tu 45656, États-Unis",
        name: 'Blue Bird',
        phones: {
          phone1: '+ 45678987',
          phone2: '+ 89098765',
        },
      },
      {
        _id: '23g8355uvtdt78u90h6811005',
        image:Wof,
        address: "Los Angeles,CA 90033, États-Unis ",
        name: 'Great White',
        phones: {
          phone1: '+ 87 543 322',
          phone2: '+ 76 543 368',
        },
      },
      {
        _id: '961ye567jxsnk00mo5u438316',
        image:Clean,
        address: "Las Vegas, lv 54044, États-Unis",
        name: 'Clean',
        phones: {
          phone1: ' + 90 345 287',
          phone2: ' + 90 234 234',
        },
      },
        {
            _id: '115n6op54901yt59103nm6',
          image:Regin,
          address: "Dallas, DA ru 334635, États-Unis ",
          name: 'Rein',
          phones: {
            phone1: '+00 127 978',
            phone2: '+00 992 507',
          },
      }
  ]);

  const [selectedStation, setSelectedStation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStations = stations.filter((station) =>
    station.name && station.name.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : '')
  );

  const handleDeleteClick = (stationId) => {
    const updatedStations = stations.filter((station) => station._id !== stationId);
    setStations(updatedStations);
  };

  const handleEditClick = (station) => {
    setSelectedStation(station);
    setEditFormData({
      name: station.name,
      phones: {
        phone1: station.phones.phone1,
        phone2: station.phones.phone2,
      },
    });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (formData) => {
    const updatedStations = stations.map((station) =>
      station._id === selectedStation._id ? { ...station, ...formData } : station
    );
    setStations(updatedStations);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="background"></div>
      <h1>Liste des Stations</h1>
      <br />
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
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom de la station</th>
            <th>Adresse</th>
            <th>Téléphone 1</th>
            <th>Téléphone 2</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {filteredStations.map((station) => (
            <tr key={station._id}>
              <td>{station._id}</td>
              <td>{station.name}</td>
              <td>{station.address}</td>
              <td>{station.phones && station.phones.phone1}</td>
              <td>{station.phones && station.phones.phone2}</td>
              <td>
                <img src={station.image} alt={station.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button className="action-button">
                  <FontAwesomeIcon icon={faEdit} onClick={() => handleEditClick(station)} />
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


    export default StaticListStations;