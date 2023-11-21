import React from 'react';
import Polissage from '../../assests/2.jpg'; 
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock , faCalendar} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar/navbar';
import './serviceDetail.css';

function ServiceDetail() {
  const queueData = {
    waiting: 3,
    remainingTime: '90 minutes',
  };

  return (
    <div>
      <Navbar/>
    <Card className="service-detail">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
      
      <br></br>
      <br></br>
      
      
        <CardMedia
  component="div"
  className="image-container"
>
  <img
    src={Polissage}
    alt="Service Image"
    className="service-image"
  />
  
</CardMedia>

        </Grid>
        <Grid item xs={6} className="card-content">
          <CardContent>
          <Typography variant="h5" component="h2" className="service-title">
          Great White
            </Typography> 
            <Typography variant="h5" component="h2" className="service-title">
            Service de Polissage
            </Typography>
            <Typography variant="body2" color="text.secondary" className="service-description">
            Description du service de polissage : Un polissage professionnel pour redonner de l'éclat à votre voiture
            </Typography>
            <Box display="flex" alignItems="center" className="queue-info">
              <FontAwesomeIcon icon={faUsers} />
              <Typography variant="body2" color="text.secondary">
                Personnes en attente : {queueData.waiting}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" className="time-info">
              <FontAwesomeIcon icon={faClock} />
              <Typography variant="body2" color="text.secondary">
                Temps d'attente restant : {queueData.remainingTime}
              </Typography>
            </Box>
            <div class="reservation-button-container">
            <button className="reservation-button" >
  Réserver maintenant 
  <FontAwesomeIcon icon={faCalendar} />
</button>
</div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </div>
  );
}

export default ServiceDetail;

