import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PassengerDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats = [], totalAmount = 3730, train = {} } = location.state || {};

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>❮</button>
        <h2>Passenger Details</h2>
      </header>

      <div className="split-layout reverse-mobile">
        <div className="main-content">
          <div className="card summary-header">
            <h3>{train.id || '12951'} - {train.name || 'Mumbai Rajdhani'}</h3>
            <p>25 May 2024 | 16:55 (NDLS) ➝ 08:10 (BCT)</p>
            <p>2A | Seats: A1 - {selectedSeats.join(', ')}</p>
          </div>

          {selectedSeats.map((seat, index) => (
            <div key={index} className="card passenger-form">
              <h3>Passenger {index + 1}</h3>
              <div className="form-row three-cols">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input type="number" placeholder="28" />
                </div>
                <div className="input-group">
                  <label>Gender</label>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group half">
                  <label>Berth Preference</label>
                  <select><option>No Preference</option><option>Lower</option><option>Upper</option></select>
                </div>
              </div>
            </div>
          ))}

          <div className="card contact-form">
            <h3>Contact Details</h3>
            <div className="form-row">
              <div className="input-group half">
                <label>Phone Number</label>
                <input type="tel" placeholder="9876543210" />
              </div>
              <div className="input-group half">
                <label>Email</label>
                <input type="email" placeholder="rahul@email.com" />
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar card sticky-summary payment-summary">
          <h3>Payment Details</h3>
          <div className="price-row">
            <span>Base Fare</span>
            <span>₹{totalAmount - 200}</span>
          </div>
          <div className="price-row">
            <span>Taxes & Fees</span>
            <span>₹200</span>
          </div>
          <hr />
          <div className="price-row total">
            <span>Total Amount</span>
            <h2>₹ {totalAmount}</h2>
          </div>
          <button className="btn-primary full-width" onClick={() => alert("Payment Processing...")}>Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;