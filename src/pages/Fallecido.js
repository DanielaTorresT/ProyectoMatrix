import React from 'react';
import { useNavigate } from 'react-router-dom';

const Fallecido = () => {
    const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };
 
  return (
    <div className='fallecido-page' >
      <h1>Datos Fallecido Page</h1>
      <p>Welcome to the Datos Fallecido Page!</p>
      <form>
        <div className="form-row">
          <label htmlFor="name">Identificación:</label>
          <input type="text" id="id" name="id" />
        </div>
        <div className="form-row">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="options">Relación con el Afiliado principal:</label>
            <select id="options" name="options">
            <option value="option1"></option>
              <option value="option2">Padre</option>
              <option value="option3">Madre</option>
              <option value="option4">Hijo/a</option>
              <option value="option5">Abuelo/a</option>
              <option value="option6">otro</option>
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="date">Fecha de Nacimiento:</label>
          <input type="date" id="date-birth" name="date-birth" />
        </div>
        <div className="form-row">
          <label htmlFor="options">Ciudad de residencia:</label>
            <select id="options" name="options">
           
            <option value="option1"></option>
              <option value="option2">Bogotá</option>
              <option value="option3">Barranquilla</option>
              <option value="option4">Santa Marta </option>
              <option value="option5">Chía </option>
              <option value="option6">Medellín</option>
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="name">Dirección de residencia:</label>
          <input type="text" id="adress" name="adress" />
        </div>
        <div className="form-row">
          <label htmlFor="name">Edad Fallecido:</label>
          <input type="text" id="age" name="age" />
        </div>

        
        <div className="form-row">
          <label htmlFor="options">Ciudad donde está el cuerpo:</label>
            <select id="options" name="options">
           
            <option value="option1"></option>
              <option value="option2">Bogotá</option>
              <option value="option3">Barranquilla</option>
              <option value="option4">Santa Marta </option>
              <option value="option5">Chía </option>
              <option value="option6">Medellín</option>
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="name">Lugar donde se esta el cuerpo:</label>
          <input type="text" id="adress-body" name="adress-body" />
        </div>
        <div className="form-row">
          <label htmlFor="date">Fecha de afiliación del fallecido:</label>
          <input type="date" id="date-birth" name="date-birth" />
        </div>
        <div className="form-row">
          <label htmlFor="name">Edad de Ingreso:</label>
          <input type="text" id="age-enter" name="age-enter" />
        </div>
        <div className="form-row">
          <label htmlFor="options">Causa de fallecimiento:</label>
            <select id="options" name="options">
           
            <option value="option1"></option>
              <option value="option2">Muerte Natural</option>
              <option value="option3">Accidente</option>
              <option value="option4">Enfermedad</option>
              <option value="option5">otro </option>
              
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="options">Tipo de fallecimiento:</label>
            <select id="options" name="options">
           
              <option value="option1"></option>
            
              <option value="option2">1</option>
              <option value="option3">2</option>
              <option value="option4">3</option>
              <option value="option5">4</option>
              <option value="option5">5</option>
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="options">Periodos de carencia:</label>
            <select id="options" name="options">
           
              <option value="option1"></option>
            
              <option value="option2">1</option>
              <option value="option3">2</option>
              <option value="option4">3</option>
              <option value="option5">4</option>
              <option value="option5">5</option>
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="options">COVID 19:</label>
            <select id="options" name="options">
           
              <option value="option1"></option>
            
              <option value="option2">Si</option>
              <option value="option3">No</option>
             
              

            </select>

        </div>
        <div className="form-row">
          <label htmlFor="options">Estado:</label>
            <select id="options" name="options">
              <option value="option1"></option>
              <option value="option2">1</option>
              <option value="option3">2</option>
              <option value="option4">3</option>
              <option value="option5">4</option>
              <option value="option5">5</option>
              

            </select>

        </div>
        <div className="button-container">
          <button type="submit">Submit</button>

          <button type='button' onClick={handleReturn}>Return to Home</button>
        </div>
       
      </form>

    </div>
  );
};

export default Fallecido;
