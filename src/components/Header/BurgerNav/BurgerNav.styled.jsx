import styled from 'styled-components';

export const BurgerNavMenu = styled.div`
  position: fixed;
  z-index: 15;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  padding: 16px 0;
  background-color: ${p => p.theme.colors.black};
`;

export const LogoMenu = styled.div`
  display: flex;
`;

export const UserAuthMenu = styled.div`
  display: flex;
  margin-top: 46px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 18px;
    padding-right: 18px;
    width: 1280px;
  }
`;
