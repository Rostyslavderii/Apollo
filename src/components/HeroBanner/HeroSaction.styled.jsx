import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//BannerText
export const BannerText = styled.div`
  position: absolute;
  margin-left: 167px;
  margin-right: 151px;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  color: white;
  font-family: Syne;
  font-weight: 800;
  font-size: 28px;
  line-height: 28px;

  @media screen and (min-width: 480px) {
    font-weight: 800;
    font-size: 38px;
    line-height: 47px;
  }

  @media screen and (min-width: 760px) {
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
  }
`;

export const Big = styled.h1`
  font-size: 170px;
  line-height: 177px;
  font-weight: 900;

  @media screen and (min-width: 480px) {
    font-size: 270px;
    line-height: 233px;
    font-weight: 900;
  }

  @media screen and (min-width: 760px) {
    font-size: 295px;
    line-height: 262px;
    font-weight: 900;
  }
  @media screen and (min-width: 1280px) {
    font-size: 310px;
    line-height: 277px;
    font-weight: 900;
  }
`;
// //ArrowButton
export const ArrowDiv = styled.div`
  position: absolute;
  top: 90%;
`;
export const ArrowLink = styled(HashLink)`
  text-decoration: none;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
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
export const List = styled.ul`
  position: relative;
`;
export const Item = styled.li`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
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
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 760px) {
  }

  @media screen and (min-width: 1280px) {
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
  position: absolute;
  z-index: 10;
`;

export const LabelsCtrl = styled.div`
  &:not(:last-child) {
    margin-right: 8px;
  }
  position: absolute;
  display: flex;
  left: -49px;
  top: 29px;

  @media screen and (min-width: 480px) {
    left: -64px;
    top: 25px;
  }
  @media screen and (min-width: 760px) {
    top: 25px;
  }

  @media screen and (min-width: 1280px) {
    top: 29px;
  }
`;

export const Sp = styled.label`
  position: relative;
  margin-right: 27px;
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

  &.slide {
    opacity: 1;
    animation: scale 0.5s;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
    }
    &::after {
      left: -8px;
      height: 24px;
      width: 24px;
      border: 2px solid white;
      box-shadow: 0px 0px 6px 1px white;
      opacity: 1;
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
