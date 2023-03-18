import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
`;

export const List = styled.ul`
  position: absolute;
  z-index: 2;
`;
export const Item = styled.li``;

export const Image = styled.img``;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 20px;
  padding-right: 20px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const LabelsCtrl = styled.div`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Sp = styled.label`
  position: relative;
  margin-right: 15px;
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
    width: 10px;
    height: 10px;
    background-color: white;
  }

  &::after {
    left: -7px;
    height: 20px;
    width: 20px;
    border: 2px solid white;
    box-shadow: 0px 0px 6px 1px white;
    opacity: 0;
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
