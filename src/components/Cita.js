import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, deleteCita }) => {
  return (
    <div className="cita">
      <div style={{display:'flex', justifyContent: 'space-between'}}>
        <div>
          <p>
            Mascota:<span>{cita.mascota}</span>
          </p>
          <p>
            Propietario:<span>{cita.propietario}</span>
          </p>
        </div>
        <div>
          <p>
            Fecha:<span>{cita.fecha}</span>
          </p>
          <p>
            Hora:<span>{cita.time}</span>
          </p>
          
        </div>
        
      </div>
      <p>
            Sintomas:<span>{cita.sintomas}</span>
          </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => {
          deleteCita(cita.id);
        }}
      >
        Eliminar X
      </button>
    </div>
  );
};

Cita.propTypes = {};

export default Cita;
