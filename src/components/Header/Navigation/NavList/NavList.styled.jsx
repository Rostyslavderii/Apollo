import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.ul`
  display: flex;
  padding-left: 0px;
  padding-right: 0px;
  gap: 32px;

  @media screen and (min-width: 480px) {
    gap: 24px;
  }
  @media screen and (min-width: 760px) {
    gap: 29px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const NavLinks = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  transition: box-shadow 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &.active {
    padding-bottom: 4px;
    box-shadow: 0px 1.2px 0px rgb(255, 255, 255);
  }

  &:hover,
  &:focus {
    padding-bottom: 4px;
    box-shadow: 0px 1.2px 0px rgb(255, 255, 255);
  }
`;

export const NavLi = styled.li``;
