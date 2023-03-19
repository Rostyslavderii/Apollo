import React, { useState } from 'react';
import { Container, List, Item, Image } from '../HeroSaction.styled';
import { Sp, LabelsCtrl, RadioButtonsDiv } from '../HeroSaction.styled';
import { RadioInputs } from '../RadioInputs/RadioInputs';
import Images from './Images.json';

export const SliderContent = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== Images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Images.length);
    }
  };

  const moveInput = index => {
    setSlideIndex(index);
  };

  return (
    <>
      <Container>
        <List>
          {Images.map((image, index) => (
            <Item
              key={image.id}
              // className={slideIndex === index + 1 ? 'slide' : ''}
              slide={slideIndex === index + 1}
            >
              {(console.log('id', image.id), console.log('slide'))}
              <Image
                src={process.env.PUBLIC_URL + image.icon}
                alt={image.description}
              />
            </Item>
          ))}
        </List>
      </Container>
      <RadioButtonsDiv>
        <LabelsCtrl>
          {Array.from({ length: 3 }).map((item, index) => (
            <Sp key={index} onClick={() => moveInput(index + 1)}></Sp>
          ))}
        </LabelsCtrl>
      </RadioButtonsDiv>
      {/* <RadioInputs setSlideIndex={setSlideIndex} index={this.index} /> */}
    </>
  );
};
