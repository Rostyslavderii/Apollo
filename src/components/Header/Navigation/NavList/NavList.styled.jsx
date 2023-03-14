import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  padding-left: 263px;
  padding-right: 265px;
  display: flex;
  gap: 32px;
`;
export const NavLinks = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
`;

export const NavLi = styled.li``;
