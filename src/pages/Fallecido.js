import React from 'react';
import { useNavigate } from 'react-router-dom';

const Fallecido = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  const handlePrevious = () => {
    navigate('/contacto'); // Navega de vuelta a la página Contacto
  };

  return (
    <div className='fallecido-page'>
      <h1>Datos del Fallecido</h1>
      <p>Complete la información correspondiente al fallecido.</p>
      <form>
        {/* Datos personales */}
        <div className="form-row">
          <label htmlFor="id">Identificación:</label>
          <input type="text" id="id" name="id" />
        </div>
        <div className="form-row">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="relation">Relación con el afiliado principal:</label>
          <select id="relation" name="relation">
            <option value=""></option>
            <option value="padre">Padre</option>
            <option value="madre">Madre</option>
            <option value="hijo">Hijo/a</option>
            <option value="abuelo">Abuelo/a</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="birth-date">Fecha de nacimiento:</label>
          <input type="date" id="birth-date" name="birth-date" />
        </div>
        <div className="form-row">
          <label htmlFor="city-residence">Ciudad de residencia:</label>
          <select id="city-residence" name="city-residence">
            <option value=""></option>
            <option value="bogota">Bogotá</option>
            <option value="barranquilla">Barranquilla</option>
            <option value="santa-marta">Santa Marta</option>
            <option value="chia">Chía</option>
            <option value="medellin">Medellín</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="address">Dirección de residencia:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="form-row">
          <label htmlFor="age">Edad del fallecido:</label>
          <input type="text" id="age" name="age" />
        </div>

        {/* Información adicional */}
        <div className="form-row">
          <label htmlFor="city-body">Ciudad donde está el cuerpo:</label>
          <select id="city-body" name="city-body">
            <option value=""></option>
            <option value="bogota">Bogotá</option>
            <option value="barranquilla">Barranquilla</option>
            <option value="santa-marta">Santa Marta</option>
            <option value="chia">Chía</option>
            <option value="medellin">Medellín</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="place-body">Lugar donde está el cuerpo:</label>
          <input type="text" id="place-body" name="place-body" />
        </div>
        <div className="form-row">
          <label htmlFor="affiliation-date">Fecha de afiliación:</label>
          <input type="date" id="affiliation-date" name="affiliation-date" />
        </div>
        <div className="form-row">
          <label htmlFor="entry-age">Edad de ingreso:</label>
          <input type="text" id="entry-age" name="entry-age" />
        </div>
        <div className="form-row">
          <label htmlFor="death-cause">Causa de fallecimiento:</label>
          <select id="death-cause" name="death-cause">
            <option value=""></option>
            <option value="natural">Muerte natural</option>
            <option value="accidente">Accidente</option>
            <option value="enfermedad">Enfermedad</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="death-type">Tipo de fallecimiento:</label>
          <select id="death-type" name="death-type">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="carencia-periods">Periodos de carencia:</label>
          <select id="carencia-periods" name="carencia-periods">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="covid">COVID-19:</label>
          <select id="covid" name="covid">
            <option value=""></option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="state">Estado:</label>
          <select id="state" name="state">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Botones */}
        <div className="button-container">
          <button type="button" onClick={handlePrevious}>Previous</button>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReturn}>Return to Home</button>
        </div>
      </form>
    </div>
  );
};

export default Fallecido;
