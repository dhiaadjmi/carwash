import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stationCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import stationImage from '../../assests/l.jpg'; 
function StationCard() {

    const [stations, setStations] = useState([]);
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
  return (
    <div>
           <br></br>
           <br></br>
      <h1 className="cards-title" >Liste des Stations</h1>
      <br></br>  <br></br>   <br></br>
      <Grid container spacing={16}>
        {stations.map((station) => (
          <Grid key={station._id} item xs={12} sm={6} md={4} lg={4}>
            <Card className="station-card">
              <CardMedia
                component="img"
                height="250"
                max-width= "100%"
                margin-bottom ="10px"
                image={stationImage}
                alt={station.name}
              />
         
             
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {station.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone 1: {station.phones.phone1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone 2: {station.phones.phone2}
                </Typography>
                <Link to={`/stations/${station._id}`}>
          <button className="learn-more-button">En savoir plus</button>
        </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}

export default StationCard;

