import React from 'react';
import './homePage.css';
import BannerBackground from "../../assests/homepg.png"
import BannerImage from "../../assests/cwash.png"

import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import StationCard from "../../components/stationCard/stationCard"
import ServiceCard from "../../components/serviceCard/serviceCard"
import StationCardFake from "../../static/stationCard/stationCard"
import Contact from "../../components/contact/contact"

const HomePage = () => {
  return (

      <div className="home-container">
              <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">Rendez votre chère  voiture éclatante 
            ,<br></br>en un seul clic, elle devient étincelante.
            </h1>
            <p className="primary-text">
           On vous offre un accès rapide aux stations de lavage et à leurs services proposés. En un seul clic, découvrez les stations de lavage à proximité avec des informations détaillées sur leurs services, vous permettant de choisir la station idéale pour transformer votre voiture en un clin d'œil
            </p>
            <button className="secondary-button">
              En savoir plus
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>

        <div id="stations-section">
  <StationCardFake />
</div>

<div id="services-section">
  <ServiceCard />
  </div>
{/** <div id="stations-section">
  <StationCard />
  </div>*/}


<div id="contact-section">
  <Contact />
</div>
        <Footer />
      </div>
    );
  };
  
     



export default HomePage;