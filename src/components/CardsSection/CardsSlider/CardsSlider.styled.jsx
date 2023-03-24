import styled from 'styled-components';

//CardsSlider
export const CardsContainer = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 96px;
  width: 1281px;
  height: 720px;
`;
export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CardsItemContainer = styled.div`
  width: 411px;
  height: 296px;
`;

export const CardItem = styled.li`
  width: 411px;
  height: 572px;
  /* &:not(:nth-child(n + 3)) {
    margin-right: 24px;
  } */
  &:not(:first-child) {
    margin-left: 24px;
  }
  &:nth-child(n + 4) {
    display: none;
  }
  border: 1px solid #d3eaff;
  overflow: hidden;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

//CardText
export const CardTextContainer = styled.div`
  width: 411px;
  height: 103px;
  overflow: hidden;
  padding-top: 32px;
`;

export const CardName = styled.h1`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0px 32px 0px 32px;
`;

export const CardText = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  /* display: flex; */
  align-items: center;
  text-align: center;
  padding: 16px 32px 0px 32px;
  height: 58px;
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
export const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  &:first-child {
    margin-right: 16px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

//ButtomList BUY
export const ButtomList = styled.div`
  padding: 64px 32px 24px 32px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
export const CardButton = styled.button`
  width: 278px;
  padding: 12px 0px;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${p => p.theme.colors.bottons};
  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &.active {
    font-weight: 900;
  }
`;

//CardsButtonsBlack
export const RadioButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const LabelsCtrl = styled.div`
  &:not(:last-child) {
    margin-right: 8px;
  }
  display: flex;
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
