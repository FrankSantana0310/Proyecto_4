import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import uuid from 'uuid';


const Form = ({getCita}) => {
const initialState = {
    mascota: "",
    propietario: "",
    fecha: "",
    time: "",
    sintomas: "",
    
  }

  const [cita, setCita] = useState(initialState);

  const handleChange = (e) => {
      setCita({
          ...cita,
          [e.target.name]:e.target.value,
      })
  };

  const handleSubmit = (e) => {
      e.preventDefault();
        const nuevaCita = {...cita}
        nuevaCita['id'] = uuid();
        setCita(nuevaCita)
        getCita(nuevaCita);
        setCita(initialState)
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          onChange={handleChange}
          className="u-full-width"
          type="text"
          placeholder="Nombre"
          id="mascota"
          name="mascota"
          value={cita.mascota}
        />
        <label htmlFor="propietario">Nombre Propietario</label>
        <input
          onChange={handleChange}
          className="u-full-width"
          type="text"
          placeholder="Propietario"
          id="propietario"
          name="propietario"
          value={cita.propietario}
        />
        <label htmlFor="fecha">Fecha</label>
        <input
          onChange={handleChange}
          type="date"
          className="u-full-width"
          name="fecha"
          id="fecha"
          value={cita.fecha}
        />
        <label htmlFor="time">Hora</label>
        <input onChange={handleChange} type="time" className="u-full-width" name="time" id="time"  value={cita.time} />
        <label htmlFor="sintomas">Sintomas</label>
        <textarea
          onChange={handleChange}
          className="u-full-width"
          name="sintomas"
          id="sintomas"
          value={cita.sintomas}
        ></textarea>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar"
        />
      </form>
    </Fragment>
  );
};

Form.propTypes = {};

export default Form;
