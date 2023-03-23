import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
`;

//BannerText
export const BannerText = styled.div`
  position: inherit;
  left: 0%;
  top: 239px;
  text-align: center;
`;
export const H1 = styled.h1`
  margin-left: 167px;
  margin-right: 151px;
  text-transform: uppercase;
  color: white;
  font-family: Syne;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
`;

export const Big = styled.h1`
  font-size: 310px;
  line-height: 199px;
  font-weight: 900;
`;
//ArrowButton
export const ArrowDiv = styled.div`
  position: inherit;
  display: flex;
  justify-content: center;
  top: 600px;
`;
export const ArrowContainer = styled.div``;

export const ArrowButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
`;
export const ArrowImg = styled.img``;
export const Text = styled.p`
  text-transform: capitalize;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: white;

  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  margin-right: 8px;
`;

//Slider
export const List = styled.ul``;
export const Item = styled.li`
  width: 100%;
  height: 100%;
  opacity: ${props => (props.slide ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const Container = styled.div`
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

//radio

export const RadioWraper = styled.div`
  justify-content: center;
  display: flex;
  align-items: end;
  height: 100vh;
`;
export const FormCtrl = styled.form`
  position: absolute;
  z-index: 3;
`;
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
  color: #fff;
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
    background-color: white;
  }

  &::after {
    left: -8px;
    height: 24px;
    width: 24px;
    border: 2px solid white;
    box-shadow: 0px 0px 6px 1px white;
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

export const UInput = styled.input`
  display: none;
  opacity: 0;
  visibility: hidden;

  width: 24px;
  height: 24px;

  &:checked {
    ~ {
      ${Sp} {
        color: gold;
        &::after {
          opacity: 1;
          animation: scale;
        }
      }
    }
  }
`;
