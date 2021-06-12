import React from 'react';
import styled from 'styled-components';

//images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamowork from '../img/teamwork.svg';
import home from '../img/home2.png';

// styles
import {
  StyledLayout,
  StyledDescription,
  StyledImageContainer,
} from '../styles';

// test
import { fade } from '../animation';
import { UseScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = UseScroll(0.5);
  return (
    <Services
      variants={fade}
      animate={controls}
      initial={'hidden'}
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Clock</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Money.</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamowork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Id magna elit ea anim.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImageContainer>
        <img src={home} alt="home" />
      </StyledImageContainer>
    </Services>
  );
};

const Services = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
