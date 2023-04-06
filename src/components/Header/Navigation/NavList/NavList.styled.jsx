import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  padding-left: 263px;
  padding-right: 265px;
  display: flex;
  gap: 32px;
`;

export const NavLinks = styled(NavLink)`
  &.${props => props.activeClassName} {
    color: white;
  }

  text-transform: uppercase;
  text-decoration: none;
  color: white;
  transition: box-shadow 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &.active {
    padding-bottom: 4px;
    box-shadow: 0px 1.2px 0px rgb(255, 255, 255);
  }

  &.selected {
    color: white; // red
  }

  &.${({ isActive }) => (isActive ? 'active=card' : '')} {
    color: white;
  }

  &:hover,
  &:focus {
    padding-bottom: 4px;
    box-shadow: 0px 1.2px 0px rgb(255, 255, 255);
  }
`;

export const NavLi = styled.li``;
