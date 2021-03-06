import React from 'react';
import styled from 'styled-components';
import {
  StyledLayout,
  StyledDescription,
  StyledImageContainer,
} from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { UseScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = UseScroll(0.3);
  return (
    <StyledFaq
      variants={scrollReveal}
      animate={controls}
      initial={'hidden'}
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={'How Do I Start?'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Culpa deserunt sit exercitation ipsum est magna dolor et sunt.
            </p>
          </div>
        </Toggle>
        <Toggle title={'Daily Schedule'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Culpa deserunt sit exercitation ipsum est magna dolor et sunt.
            </p>
          </div>
        </Toggle>
        <Toggle title={'How Do I Start?'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Culpa deserunt sit exercitation ipsum est magna dolor et sunt.
            </p>
          </div>
        </Toggle>
        <Toggle title={'Different Payment Methods'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Culpa deserunt sit exercitation ipsum est magna dolor et sunt.
            </p>
          </div>
        </Toggle>
        <Toggle title={'What Products do you offer?'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Culpa deserunt sit exercitation ipsum est magna dolor et sunt.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
