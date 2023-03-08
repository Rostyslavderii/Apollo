import styled from 'styled-components';

export const Container = styled(`div`)`
  margin-left: auto;
  margin-right: auto;
  background-color: #1e1e1e;
  opacity: 0.8;

  @media screen and (min-width: 1280px) {
    padding-left: 28px;
    padding-right: 28px;
    width: 1398px;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 86px;
  padding-right: 36px;
`;
