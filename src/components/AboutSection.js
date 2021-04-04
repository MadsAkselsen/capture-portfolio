import React from 'react';
import home1 from '../img/home1.png';

import {
  StyledLayout,
  StyledDescription,
  StyledImageContainer,
  StyledHide,
} from '../styles';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription className="description">
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videoagraphy ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImageContainer>
        <img src={home1} alt="guy with camera"></img>
      </StyledImageContainer>
    </StyledLayout>
  );
};

// styled components

export default AboutSection;
