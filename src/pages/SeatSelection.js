import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { trains } from '../data/mockData';

const SeatSelection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const train = trains.find(t => t.id === id) || trains[0];
  
  const [selectedSeats, setSelectedSeats] = useState([28, 37]);
  const seatPrice = 1865; // Mock base price

  const coaches = ['A1', 'A2', 'A3', 'B1', 'B2'];
  const [activeCoach, setActiveCoach] = useState('A1');

  // Generate 60 mock seats
  const seats = Array.from({ length: 60 }, (_, i) => ({
    number: i + 1,
    status: [12, 14, 25, 42, 50].includes(i + 1) ? 'booked' : 'available'
  }));

  const toggleSeat = (num, status) => {
    if (status === 'booked') return;
    if (selectedSeats.includes(num)) {
      setSelectedSeats(selectedSeats.filter(s => s !== num));
    } else {
      setSelectedSeats([...selectedSeats, num]);
    }
  };

  const proceedToPassenger = () => {
    navigate('/passengers', { state: { selectedSeats, totalAmount: selectedSeats.length * seatPrice, train } });
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>❮</button>
        <h2>Seat Selection</h2>
      </header>

      <div className="split-layout">
        <div className="main-content card">
          <div className="train-info-bar">
            <h3>{train.id} - {train.name}</h3>
            <p>16:55 (NDLS) ➝ 08:10 (BCT) | 25 May 2024 | 2A</p>
          </div>

          <div className="coach-tabs">
            <span className="label">Coach</span>
            {coaches.map(c => (
              <button key={c} className={`tab ${activeCoach === c ? 'active' : ''}`} onClick={() => setActiveCoach(c)}>{c}</button>
            ))}
          </div>

          <div className="seat-grid-container">
            <div className="seat-headers">
              <span>Lower</span><span>Middle</span><span>Upper</span><span>Lower</span><span>Side Upper</span>
            </div>
            <div className="seat-grid">
              {seats.map(seat => (
                <button 
                  key={seat.number} 
                  className={`seat ${seat.status} ${selectedSeats.includes(seat.number) ? 'selected' : ''}`}
                  onClick={() => toggleSeat(seat.number, seat.status)}
                  disabled={seat.status === 'booked'}
                >
                  {seat.number}
                </button>
              ))}
            </div>
          </div>

          <div className="legend">
            <span className="legend-item"><div className="box available"></div> Available</span>
            <span className="legend-item"><div className="box selected"></div> Selected</span>
            <span className="legend-item"><div className="box booked"></div> Booked</span>
          </div>
        </div>

        <div className="sidebar card sticky-summary">
          <h3>Booking Summary</h3>
          <div className="summary-details">
            <p>Selected Seats: <strong>{selectedSeats.length}</strong></p>
            <p>{activeCoach} - {selectedSeats.join(', ')}</p>
            <h2 className="total-price">₹ {selectedSeats.length * seatPrice}</h2>
          </div>
          <button 
            className="btn-primary full-width" 
            onClick={proceedToPassenger}
            disabled={selectedSeats.length === 0}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;