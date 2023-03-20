import styled from 'styled-components';

//CardsSlider
export const CardsContainer = styled.div``;
export const CardList = styled.ul``;
export const CardItem = styled.li``;
export const CardImg = styled.img``;

//CardsButtonsBlack
export const RadioButtonsDiv = styled.div`
  position: inherit;
  top: 439px;
  z-index: 10;
  left: -2%;
`;

export const LabelsCtrl = styled.div`
  &:not(:last-child) {
    margin-right: 8px;
  }

  display: flex;
  justify-content: center;
  align-content: end;
`;

export const Sp = styled.label`
  position: relative;
  margin-right: 24px;
  display: block;
  color: #000;
  cursor: pointer;
  transition: color 0.5s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }

  &::before {
    left: 0;
    width: 12px;
    height: 12px;
    background-color: black;
  }

  &::after {
    left: -8px;
    height: 24px;
    width: 24px;
    border: 2px solid black;
    box-shadow: 0px 0px 6px 1px black;
    opacity: 0;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
      animation: scale;
    }
  }

  @keyframes scale {
    0% {
      transform: translateY(-50%) scale(1.5);
    }
    50% {
      transform: translateY(-50%) scale(0.5);
    }
    110% {
      transform: translateY(-50%) scale(1);
    }
  }
`;
