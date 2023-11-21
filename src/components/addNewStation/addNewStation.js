import React, { useState } from 'react';
import './addNewStation.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const AddNewStation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phones: {
      phone1: '',
      phone2: '',
    },
    email: ''
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith("phones.")) {
      const phoneField = name.split(".")[1];
  
      setFormData((prevData) => ({
        ...prevData,
        phones: {
          ...prevData.phones,
          [phoneField]: value,
        },
      }));
    }  else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const axiosConfig = {
      headers: {
        Authorization: token, 
      },
    };

    axios.post('http://localhost:5000/stations/create', formData, axiosConfig)
      .then((response) => {
        console.log('Station de service ajoutée avec succès :', response.data);

        setFormData({
          name: '',
          phones: {
            phone1: '',
            phone2: '',
          },
          email: ''
        });
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout de la station de service :', error);
      });
  };

  return (
    <div>
   
      <h2>Ajouter une nouvelle station de service</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Téléphone 1</label>
          <input
            type="text"
            name="phones.phone1"
            value={formData.phones.phone1}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Téléphone 2</label>
          <input
            type="text"
            name="phones.phone2"
            value={formData.phones.phone2}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="button-container"> 
          <button type="submit" className="add-station-button">
            <FontAwesomeIcon icon={faGasPump} /> Ajouter la station de service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStation;
