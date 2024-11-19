import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reporte = () => {
    const navigate = useNavigate();
    
    const handleNext = () => {
        navigate('/contacto'); // Navigate to Contacto page
    };
    
    const handlePrevious = () => {
        navigate('/iniciales'); // Navigate back to Iniciales page
    };

    const handleReturn = () => {
        navigate('/'); // Navigate back to Home page
    };

    const [time, setTime] = useState('');

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className="reporte-page">
            <h1>Datos Reporte</h1>
            <p>Welcome to the Datos Reporte Page!</p>
            <form className="reporte-form">
                <div className="form-row">
                    <label htmlFor="time">Hora Reporte:</label>
                    <input
                        type="time"
                        id="time-reporte"
                        name="time-reporte"
                        value={time}
                        onChange={handleTimeChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="name">Reporta:</label>
                    <input
                        type="text"
                        id="name-report"
                        name="name-report"
                        required
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="expediente">N° Expediente:</label>
                    <input
                        type="text"
                        id="name-expediente"
                        name="name-expediente"
                        required
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="options">Poliza:</label>
                    <select id="options" name="options" required>
                        <option value="">Select a Policy</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="plan">Plan:</label>
                    <select id="plan" name="plan" required>
                        <option value="">Select a Plan</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="form-row">
                    <label htmlFor="grupo">Grupo:</label>
                    <select id="grupo" name="grupo" required>
                        <option value="">Select a Group</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
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

export default Reporte;
