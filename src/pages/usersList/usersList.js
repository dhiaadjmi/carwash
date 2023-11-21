import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './usersList.css';
import EditUserList from'../../components/editUserList/editUserList';
import AdminNavbar from '../../components/adminNavbar/adminNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import admin from '../../assests/admin.jpg';
import client from '../../assests/client.webp';
import responsable from '../../assests/responsable.jpg';
import Swal from 'sweetalert2';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddUserFormOpen, setIsAddUserFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editFormData, setEditFormData] = useState({}); 

  useEffect(() => {
    axios.get('http://localhost:5000/users/list')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
 

const filteredUsers = users.filter((user) =>
  user.name && user.name.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : '')
);

  const handleAddUserClick = () => {
    setIsAddUserFormOpen(true);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditFormData({
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
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (formData) => {
    // Appelez d'abord l'API PUT pour mettre à jour l'utilisateur
    axios
      .put(`http://localhost:5000/users/${selectedUser._id}`, formData)
      .then(() => {
        // Ensuite, appelez l'API GET pour obtenir la liste mise à jour des utilisateurs
        axios.get('http://localhost:5000/users/list')
          .then((response) => {
            // Mettez à jour l'état local des utilisateurs avec les données de la réponse GET
            setUsers(response.data);
  
            // Enfin, fermez le modal d'édition
            setIsEditModalOpen(false);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération de la liste des utilisateurs :', error);
          });
      })
      .catch((error) => {
        console.error('Erreur lors de la modification de l\'utilisateur :', error);
      });
  };
  
  
  
  

  const handleDeleteClick = (userId) => {
    // Utilisation de SweetAlert pour demander confirmation
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur clique sur "Oui", procédez à la suppression
        axios.delete(`http://localhost:5000/users/${userId}`)
          .then(() => {
            const updatedUsers = users.filter((user) => user._id !== userId);
            setUsers(updatedUsers);
            Swal.fire(
              'Supprimé!',
              'L\'utilisateur a été supprimé.',
              'success'
            );
          })
          .catch((error) => {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
            Swal.fire(
              'Erreur!',
              'Une erreur s\'est produite lors de la suppression de l\'utilisateur.',
              'error'
            );
          });
      }
    });
  };
  const images = [
    {
      _id: '655381248170baf377fc8794',
      image: admin,
    },
    {
      _id: '655382038170baf377fc879d',
      image: client,
    },
    {
      _id: '655382da8170baf377fc87a8',
      image: responsable,
    },
  ];
 
    return (
      <div>
        <AdminNavbar/>
           <div className="background"></div>
      <h1>Liste des Utilisateurs</h1>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Link to="/adduser">
    <button className="action-button special" onClick={handleAddUserClick}>
      <FontAwesomeIcon icon={faUser} /> Ajouter un utilisateur
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
            <th>Date de Naissance</th>
            <th>Email</th>
            <th>Pays</th>
            <th>Ville</th>
            <th>Rue</th>
            
            <th>Téléphone</th>
            <th>Role</th>
            <th>Photo de profil</th>
          </tr>
        </thead>
        <tbody>
        {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.date_of_birth}</td>
              <td>{user.email}</td>
              <td>{user.address.country}
              </td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
            
              <td>{user.phone}</td>
              <td>{user.role}</td>
           {/**    <td>
              <img src={image.image} alt={`Photo de ${user.name}`} />
              </td>
              */}
           <td>
  {images.find(img => img._id === user._id) && (
    <img
      key={images.find(img => img._id === user._id)._id}
      src={images.find(img => img._id === user._id).image}
      alt={`Photo de ${user.name}`}
    />
  )}
</td>
              <td>
                <button className="action-button">
                  <FontAwesomeIcon icon={faEdit}  onClick={() => handleEditClick(user)}/> {/* Icône d'édition */}
                </button>
                <button className="action-button" onClick={() => handleDeleteClick(user._id)}>
  <FontAwesomeIcon icon={faTrash} /> 
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       {isEditModalOpen && selectedUser && (
        <EditUserList
          user={selectedUser}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
    )
}
export default UsersList;