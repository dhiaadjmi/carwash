import React from 'react';
import './stationCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Wof from '../../assests/st2.jpeg';
import Bluebird from '../../assests/st4.jpeg';
import Clean from '../../assests/st1.webp';
import Regin from '../../assests/st3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faMapMarker} from '@fortawesome/free-solid-svg-icons';


const StationCardFake = () => {
  const stations = [
    {
      _id: '1',
      image:Bluebird,
      address: "California, Tu 45656, États-Unis",
      name: 'Blue Bird',
      phones: {
        phone1: '+ 45678987',
        phone2: '+ 89098765',
      },
    },
    {
      _id: '2',
      image:Wof,
      address: "Los Angeles,CA 90033, États-Unis ",
      name: 'Great White',
      phones: {
        phone1: '+ 87 543 322',
        phone2: '+ 76 543 368',
      },
    },
    {
      _id: '3',
      image:Clean,
      address: "Las Vegas, lv 54044, États-Unis",
      name: 'Clean',
      phones: {
        phone1: ' + 90 345 287',
        phone2: ' + 90 234 234',
      },
    },
      {
        _id: '4',
        image:Regin,
        address: "Dallas, DA ru 334635, États-Unis ",
        name: 'Rein',
        phones: {
          phone1: '+00 127 978',
          phone2: '+00 992 507',
        },
    }
  ];
  return (
    <div>
     <br></br> <br></br>  <br></br> <br></br>
      <h1 className="cards-title">Liste des Stations</h1>
      <Grid container spacing={3}>
        {stations.map((station) => (
          <Grid key={station._id} item xs={12} sm={6} md={4} lg={3}>
            <Card className="station-card">
              <div className="img">
              <CardMedia
                component="img"
                height="250"
                image={station.image}
                alt={station.name}
              />
              </div>
              <CardContent>
           
                <Typography gutterBottom variant="h5" component="div">
                  {station.name}
                </Typography>
                <p>
            <strong>
              <FontAwesomeIcon icon={faMapMarker} style={{ color: '#168aff' }} /> 
            </strong>{' '}
            {station.address}
          </p>
                <Typography variant="body2" color="text.secondary">
                <FontAwesomeIcon icon={faPhone} style={{ color: '#168aff' }} />
                  Téléphone 1: {station.phones.phone1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <FontAwesomeIcon icon={faPhone} style={{ color: '#168aff' }} />
                  Téléphone 2: {station.phones.phone2}
                </Typography>
                <Link to={`/stations/${station._id}`}>
                  <br></br>
                  <button className="learn-more-button1">En savoir plus</button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StationCardFake;
