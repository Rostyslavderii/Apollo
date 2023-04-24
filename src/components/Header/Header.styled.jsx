import styled from 'styled-components';

export const Container = styled(`div`)`
  position: absolute;
  z-index: 10;
  opacity: 1;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    opacity: 1;
  }
  width: 100vw;
  @media screen and (min-width: 1280px) {
    width: 100vw;
  }
`;

export const HeaderBlock = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: rgba(6, 6, 6, 0.48);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  @media screen and (min-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 760px) {
    padding-left: 55px;
    padding-right: 55px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
