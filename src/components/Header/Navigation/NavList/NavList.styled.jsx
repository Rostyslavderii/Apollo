import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  padding-left: 263px;
  padding-right: 265px;
  display: flex;
`;
export const NavLinks = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  padding-left: 32px;
  padding-right: 32px;
`;
