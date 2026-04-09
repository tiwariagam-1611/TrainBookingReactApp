import React, { useState } from 'react';

const FiltersSidebar = () => {
  const [classes, setClasses] = useState({ all: true, '1A': false, '2A': false, '3A': false, SL: false });
  const [trainTypes, setTrainTypes] = useState({ express: true, superfast: false, duronto: false });

  return (
    <aside className="filters-sidebar card">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="reset-btn">Reset</button>
      </div>

      <div className="filter-section">
        <h4>Class</h4>
        <div className="filter-item-checkbox">
          <input type="checkbox" checked={classes.all} onChange={(e) => setClasses({ ...classes, all: e.target.checked })} />
          <label>All Classes</label>
        </div>
        {['1A', '2A', '3A', 'SL'].map(cls => (
          <div key={cls} className="filter-item-checkbox">
            <input type="checkbox" checked={classes[cls]} onChange={(e) => setClasses({ ...classes, [cls]: e.target.checked, all: false })} />
            <label>{cls}</label>
          </div>
        ))}
      </div>

      <div className="filter-section">
        <h4>Departure Time</h4>
        <div className="slider-wrapper">
          <div className="mock-slider-track time-track">
            <div className="mock-slider-range time-range" style={{ left: '15%', width: '70%' }}></div>
            <div className="mock-slider-handle time-handle left-handle" style={{ left: '15%' }}></div>
            <div className="mock-slider-handle time-handle right-handle" style={{ left: '85%' }}></div>
          </div>
          <div className="slider-labels">
            <span>00:00</span>
            <span>24:00</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="slider-wrapper">
          <div className="mock-slider-track price-track">
            <div className="mock-slider-range price-range" style={{ left: '10%', width: '60%' }}></div>
            <div className="mock-slider-handle price-handle left-handle" style={{ left: '10%' }}></div>
            <div className="mock-slider-handle price-handle right-handle" style={{ left: '70%' }}></div>
          </div>
          <div className="slider-labels">
            <span>₹ 0</span>
            <span>₹ 3000</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Train Type</h4>
        {['Express', 'Superfast', 'Duronto'].map(type => (
          <div key={type} className="filter-item-checkbox">
            <input type="checkbox" checked={trainTypes[type.toLowerCase()]} onChange={(e) => setTrainTypes({ ...trainTypes, [type.toLowerCase()]: e.target.checked })} />
            <label>{type}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FiltersSidebar;