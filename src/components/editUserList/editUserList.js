import React, { useState } from 'react';
import './editUserList.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const EditUserList = ({ user, onClose, onSubmit }) => {
  const [editFormData, setEditFormData] = useState({
    name: user.name,
    date_of_birth: user.date_of_birth,
    email: user.email,
    address: {
      street: user.address.street,
      country: user.address.country,
      city: user.address.city,
      postal_code: user.address.postal_code,
    },
    phone: user.phone,
    profile_photo: user.profile_photo,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
  
      setEditFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setEditFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
 
  
  const handleSubmit = () => {
    onSubmit(editFormData);
    Swal.fire({
      icon: 'success',
      title: 'Modification réussie!',
      text: 'Les informations de l\'utilisateur ont été mises à jour avec succès.',
    });
  };

  return (
    <div className="form-container">
    <div className="edit-user-modal">
      <h2>Modifier l'utilisateur</h2>
      <form>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="name"
            value={editFormData.name}
            onChange={handleInputChange}
            className="edit-input" 
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label>Date de Naissance:</label>
          <input
            type="date"
            name="date_of_birth"
            value={editFormData.date_of_birth}
            onChange={handleInputChange}
            className="edit-input" 
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editFormData.email}
            onChange={handleInputChange}
            className="edit-input" 
            style={{ width: '100%' }}
          />
        </div>
        <div>
  <label>Pays:</label>
  <input
    type="text"
    name="address.country"
    value={editFormData.address.country}
    onChange={handleInputChange}
    className="edit-input" 
    style={{ width: '100%' }}
  />
</div>
<div>
  <label>Ville:</label>
  <input
    type="text"
    name="address.city"
    value={editFormData.address.city}
    onChange={handleInputChange}
    className="edit-input" 
    style={{ width: '100%' }}
  />
</div>
<div>
  <label>Rue:</label>
  <input
    type="text"
    name="address.street"
    value={editFormData.address.street}
    onChange={handleInputChange}
    className="edit-input" 
    style={{ width: '100%' }}
  />
</div>
<div>
  <label>Code Postal:</label>
  <input
    type="text"
    name="address.postal_code"
    value={editFormData.address.postal_code}
    onChange={handleInputChange}
    className="edit-input" 
    style={{ width: '100%' }}
  />
</div>
        <div>
          <label>Téléphone:</label>
          <input
            type="text"
            name="phone"
            value={editFormData.phone}
            onChange={handleInputChange}
            className="edit-input" 
            style={{ width: '100%' }}
          />
        </div>
        <button type="button" onClick={handleSubmit} className="action-button ">

           Enregistrer 
           <FontAwesomeIcon icon={faUser} />
        </button>
        <button type="button" onClick={onClose} className="action-button annuler ">

          Annuler
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </form>
    </div>
    </div>
  );
};

export default EditUserList;