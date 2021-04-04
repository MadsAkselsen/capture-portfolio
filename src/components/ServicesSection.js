import React from 'react';

//images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamowork from '../img/teamwork.svg';
import home from '../img/home2.png';

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Clock</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Money.</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamowork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home} alt="home" />
      </div>
    </div>
  );
};

export default ServicesSection;
