import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Iniciales = ({ setClientData }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/reporte'); // Navigate to Reporte page
  };
  const handlePrevious = () => {
    navigate('/home'); // Navigate to Home page
  };

  // Local state for form data
  const [name, setName] = useState('');
  const [coordinator, setCoordinator] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('');
  const [justification, setJustification] = useState('');

  // Handle form changes
  const handleNameChange = (event) => setName(event.target.value);
  const handleCoordinatorChange = (event) => setCoordinator(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handleJustificationChange = (event) => setJustification(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Store form data in localStorage
    const clientData = { name, coordinator, date, time, status, justification };
    localStorage.setItem('clientData', JSON.stringify(clientData));

    // Pass data up to parent (App component)
    setClientData(clientData);

    // Optionally navigate to another page, e.g., Reporte
    navigate('/Reporte');
  };

  const handleReturn = () => {
    navigate('/home');
  };

  return (
    <div className="iniciales-page">
      <h1>Datos Iniciales</h1>
      <p>Escriba los datos iniciales del cliente</p>
      <form onSubmit={handleSubmit} className="iniciales-form">
        <div className="form-row">
          <label htmlFor="name">Siniestro:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="coordinator">Elija un coordinador:</label>
          <select
            id="coordinator"
            name="coordinator"
            value={coordinator}
            onChange={handleCoordinatorChange}
            required
          >
            <option value="">Select Coordinator</option>
            <option value="Carlos Sánchez">Carlos Sánchez</option>
            <option value="Miguel Torres">Miguel Torres</option>
            <option value="Andrea López">Andrea López</option>
            <option value="Jorge González">Jorge González</option>
            <option value="Daniela Torres">Daniela Torres</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="status">Estado:</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={handleStatusChange}
            required
          >
            <option value="">Select Status</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="justification">Justificación:</label>
          <input
            type="text"
            id="justification"
            name="justification"
            value={justification}
            onChange={handleJustificationChange}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="prev-button" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="return-button" onClick={handleReturn}>
            Return to Home
          </button>
          <button type="button" className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Iniciales;
