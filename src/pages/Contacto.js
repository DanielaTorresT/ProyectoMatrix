import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Contacto = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  

  return (
    <div className='contacto-page'>
      <h1>Datos Contacto Page</h1>
      <p>Ingrese los datos de Contacto del cliente</p>

      <form>
        {/* Section 1: Afiliado Principal */}
        <section className="afiliado-principal">
          <h2>Afiliado Principal</h2>
          <div className="form-row">
            <label htmlFor="name">Identificación:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          
          <div className="form-row">
            <label htmlFor="options">Relación con el fallecido</label>
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
            <label htmlFor="name">Celular:</label>
            <input type="text" id="name" name="name" />
          </div>
        </section>

        {/* Section 2:Persona Autorizada*/}
        <section className="persona-autorizada">
          <h2>Persona Autorizada</h2>
          <div className="form-row">
            <label htmlFor="name">Identificación:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          
          <div className="form-row">
            <label htmlFor="options">Relación con el fallecido</label>
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
            <label htmlFor="name">Celular:</label>
            <input type="text" id="name" name="name" />
          </div>
        </section>

        {/* Section 3: Conatacto AP */}
        <section className="contacto-ap">
          <h2>Contacto AP</h2>
          <div className="form-row">
            <label htmlFor="name">Dirección:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="options">Ciudad:</label>
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
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-row">
            <label htmlFor="name">celular 1 :</label>
            <input type="text" id="phone1" name="phone1" />
          </div>
          <div className="form-row">
            <label htmlFor="name">celular 2 :</label>
            <input type="text" id="phone2" name="phone2" />
          </div>
        </section>

        {/* Buttons Section */}
        <div className="button-container">
          <button type="submit">Next</button>
          <button type='button' onClick={handleReturn}>Return to Home</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
