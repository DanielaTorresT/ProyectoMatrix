import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Contacto = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/'); // Navigate to Home
  };

  const handleNext = () => {
    navigate('/fallecido'); // Navigate to Fallecido page
  };

  const handlePrevious = () => {
    navigate('/reporte'); // Navigate back to Reporte page
  };

  return (
    <div className="contacto-page">
      <h1>Datos Contacto</h1>
      <p>Ingrese los datos de Contacto del cliente</p>

      <form className="contacto-form">
        {/* Section 1: Afiliado Principal */}
        <section className="afiliado-principal">
          <h2>Afiliado Principal</h2>
          <div className="form-row">
            <label htmlFor="name">Identificación:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="options">Relación con el fallecido:</label>
            <select id="options" name="options" required>
              <option value="">Seleccione una opción</option>
              <option value="Padre">Padre</option>
              <option value="Madre">Madre</option>
              <option value="Hijo/a">Hijo/a</option>
              <option value="Abuelo/a">Abuelo/a</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="name">Celular:</label>
            <input type="text" id="name" name="name" required />
          </div>
        </section>

        {/* Section 2: Persona Autorizada */}
        <section className="persona-autorizada">
          <h2>Persona Autorizada</h2>
          <div className="form-row">
            <label htmlFor="name">Identificación:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="options">Relación con el fallecido:</label>
            <select id="options" name="options" required>
              <option value="">Seleccione una opción</option>
              <option value="Padre">Padre</option>
              <option value="Madre">Madre</option>
              <option value="Hijo/a">Hijo/a</option>
              <option value="Abuelo/a">Abuelo/a</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="name">Celular:</label>
            <input type="text" id="name" name="name" required />
          </div>
        </section>

        {/* Section 3: Contacto AP */}
        <section className="contacto-ap">
          <h2>Contacto AP</h2>
          <div className="form-row">
            <label htmlFor="name">Dirección:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="options">Ciudad:</label>
            <select id="options" name="options" required>
              <option value="">Seleccione una ciudad</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Santa Marta">Santa Marta</option>
              <option value="Chía">Chía</option>
              <option value="Medellín">Medellín</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="phone1">Celular 1:</label>
            <input type="text" id="phone1" name="phone1" required />
          </div>
          <div className="form-row">
            <label htmlFor="phone2">Celular 2:</label>
            <input type="text" id="phone2" name="phone2" required />
          </div>
        </section>

        {/* Buttons Section */}
        <div className="button-container">
            <button type="button" className="prev-button" onClick={handlePrevious}>Previous</button>
            <button type="button" className="next-button" onClick={handleNext}>Next</button>
        </div>

        <div className="button-container">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="return-button" onClick={handleReturn}>Return to Home</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
