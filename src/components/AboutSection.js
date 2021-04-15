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
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.4,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <StyledLayout>
      <StyledDescription className="description">
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
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
