import React from 'react';
import { useNavigate } from 'react-router-dom';
import FiltersSidebar from '../components/FiltersSidebar';
import { trains } from '../data/mockData';

const TrainList = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container train-listing-page">
      <header className="listing-header">
        <div className="listing-title">
          <button className="back-btn" onClick={() => navigate(-1)}>❮</button>
          <h2>Found {trains.length} trains</h2>
        </div>
        <div className="sort-controls">
          <label>Sort by:</label>
          <select defaultValue="departure">
            <option value="departure">Departure Time</option>
            <option value="duration">Duration</option>
            <option value="price">Price</option>
          </select>
        </div>
      </header>

      <div className="split-layout sidebar-layout">
        <FiltersSidebar />
        
        <div className="train-list train-grid">
          {trains.map(train => (
            <div key={train.id} className="card train-card">
              <div className="train-header">
                <span className="train-name"><span className="train-id">{train.id}</span> {train.name}</span>
                <span className="train-rating">★ {train.rating}</span>
              </div>
              
              <div className="train-timeline">
                <div className="time-block">
                  <span className="city">{train.from}</span>
                  <span className="time">{train.dep}</span>
                </div>
                <div className="duration-line">
                  <span className="duration">{train.duration}</span>
                </div>
                <div className="time-block right">
                  <span className="city">{train.to}</span>
                  <span className="time">{train.arr}</span>
                </div>
              </div>

              <div className="train-classes">
                {train.classes.map(cls => (
                  <div key={cls.name} className="class-badge">
                    <span className="class-name">{cls.name}</span>
                    <span className="class-price">₹{cls.price}</span>
                  </div>
                ))}
              </div>

              <div className="card-actions">
                <button 
                  className="btn-primary" 
                  onClick={() => navigate(`/seats/${train.id}`)}
                >
                  View Seats
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainList;