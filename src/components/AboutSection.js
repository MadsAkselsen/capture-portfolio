import React from 'react';
import home1 from '../img/home1.png';
import {
  StyledLayout,
  StyledDescription,
  StyledImageContainer,
  StyledHide,
} from '../styles';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription className="description">
        <motion.div>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>true</motion.h2>
          </StyledHide>
        </motion.div>
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
