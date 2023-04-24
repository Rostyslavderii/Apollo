import styled from 'styled-components';

export const GiHamburgerMenuClose = styled.button`
  font-size: 2em;
  margin-left: auto;
  background: ${p => p.theme.colors.mainBackground};
  color: #fff;
  svg {
    fill: ${p => p.theme.colors.mainText};
    color: #fff;
    background-color: #fff;
  }
`;
