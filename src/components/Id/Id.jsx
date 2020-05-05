import React from 'react';
import PropTypes from 'prop-types';
import '../ComponentMain/GlobalContainer.css';

function Id({ dataNeo }) {
  return (
    <div className="border position padding">
      <h2 className="color">Informations</h2>
      <table className="color table">
        <tbody>
          <tr>
            <td>Nom :</td>
            <td>{dataNeo.name}</td>
          </tr>
          <tr>
            <td>Diamètre :</td>
            <td>{dataNeo.size} Km</td>
            <td>soit ....</td>
          </tr>
          <tr>
            <td>Vitesse :</td>
            <td>{dataNeo.speed} Km/h</td>
          </tr>
          <tr>
            <td>Date d'approche :</td>
            <td>{dataNeo.closeDate}</td>
          </tr>
          <tr>
            <td>Distance :</td>
            <td>{dataNeo.distanceKm} Km</td>
            <td>{dataNeo.distanceLunar} Terre=>Lune</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
Id.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default Id;

/*
 */