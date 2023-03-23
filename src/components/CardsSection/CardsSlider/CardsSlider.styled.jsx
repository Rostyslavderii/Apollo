import styled from 'styled-components';

//CardsSlider
export const CardsContainer = styled.div`
  margin-left: 80px;
  margin-right: 80px;
`;
export const CardList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;
export const CardItem = styled.li`
  &:not(:nth-child(n + 3)) {
    margin-right: 24px;
  }
  &:nth-child(n + 4) {
    display: none;
  }
  border: 1px solid #d3eaff;
`;
export const CardImg = styled.img`
  width: 411px;
  height: 296px;
  object-fit: contain;
`;

//CardsTopic
export const CardsTopic = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 43px;
`;
export const CardsH1 = styled.h1`
  font-family: syne;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
`;
//CardsArrows
export const CardsArrows = styled.div`
  width: 104px;
  height: 44px;
`;
export const ArrLeft = styled.button``;
export const ArrRight = styled.button``;

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
