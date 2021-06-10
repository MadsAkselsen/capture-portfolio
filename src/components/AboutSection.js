import React from 'react';
import home1 from '../img/home1.png';
import {
  StyledLayout,
  StyledDescription,
  StyledImageContainer,
  StyledHide,
} from '../styles';

import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
import Wave from '../components/Wave';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription className="description">
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videoagraphy ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImageContainer>
        <motion.img
          variants={photoAnimation}
          initial={'hidden'}
          animate={'show'}
          src={home1}
          alt="guy with camera"
        ></motion.img>
      </StyledImageContainer>
      <Wave />
    </StyledLayout>
  );
};

// styled components

export default AboutSection;
