import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Reporte = () => {
    const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };
  const [time, setTime] = useState('');

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className='reporte-page'>
      <h1>Datos Reporte Page</h1>
      <p>Welcome to the Datos Reporte Page!</p>
      <form>
      <div className="form-row">
          <label htmlFor="time">Hora Reporte:</label>
          <input
            type="time"
            id="time-reporte"
            name="time-reporte"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="name">Reporta:</label>
          <input type="text" id="name-report" name="name-report" />
        </div>
        <div className="form-row">
          <label htmlFor="name">N° Expediente:</label>
          <input type="text" id="name-expediente" name="name-expediente" />
        </div>
        <div className="form-row">
          <label htmlFor="options">Poliza:</label>
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
          <label htmlFor="options">Plan:</label>
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
          <label htmlFor="options">Grupo:</label>
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

export default Reporte;
