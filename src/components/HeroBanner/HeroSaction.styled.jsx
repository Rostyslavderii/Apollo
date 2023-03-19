import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
`;
//ArrowButton
export const ArrowDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;
export const ArrowContainer = styled.div``;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
`;
export const ArrowImg = styled.img``;
export const Text = styled.p``;

//Slider
export const List = styled.ul`
  /* position: absolute;
  z-index: 2;
  display: flex; */
  /* flex-wrap: nowrap; */
  /* scroll-snap-type: x proximity; */
`;
export const Item = styled.li`
  width: 100%;
  height: 100%;
  /* position: absolute; */
  opacity: ${props => (props.slide ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
  /* display: ${props => (props.displayIt ? 'block' : 'none')}; */
  /* &.active-aim {
    opacity: 1;
  } */
  /* &.slide {
    opacity: 1;
  } */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
`;

export const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */

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
  top: 400px;
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
    opacity: 1;
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
