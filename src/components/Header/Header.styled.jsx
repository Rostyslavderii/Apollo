import styled from 'styled-components';

export const Container = styled(`div`)`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1280px) {
    width: 100vw;
  }
`;

export const HeaderBlock = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: rgba(6, 6, 6, 0.48);
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 86px;
  padding-right: 36px;
`;
