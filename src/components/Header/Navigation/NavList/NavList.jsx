import { Nav, NavLinks } from './NavList.styled';

export const NavList = () => {
  return (
    <>
      <Nav>
        <li>
          <NavLinks to="/">Home</NavLinks>
        </li>
        <li>
          <NavLinks to="/">Tours</NavLinks>
        </li>
        <li>
          <NavLinks to="/">About</NavLinks>
        </li>
        <li>
          <NavLinks to="/">Help</NavLinks>
        </li>
      </Nav>
    </>
  );
};
