import React, { useState } from 'react';
import { Container, List, Item, Image } from '../HeroSaction.styled';
import { Sp, LabelsCtrl, RadioButtonsDiv } from '../HeroSaction.styled';

import Images from '../../../apollo/Images.json';

export const SliderContent = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveInput = index => {
    setSlideIndex(index);
  };

  return (
    <>
      <Container>
        <List>
          {Images.map((image, index) => (
            <Item key={image.id} slide={slideIndex === index + 1}>
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
            <Sp
              key={index}
              className={slideIndex === index + 1 ? 'slide' : ''}
              onClick={() => moveInput(index + 1)}
            ></Sp>
          ))}
        </LabelsCtrl>
      </RadioButtonsDiv>
    </>
  );
};
