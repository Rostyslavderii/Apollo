import styled from 'styled-components';

export const GiHamburgerMenuOpen = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  cursor: pointer;
  margin-left: auto;
  background: ${p => p.theme.colors.black};
  margin-left: 10px;
  @media (min-width: 768px) {
  }
  svg {
    fill: ${p => p.theme.colors.mainText};
  }
`;
