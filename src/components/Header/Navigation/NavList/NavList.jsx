import { Nav, NavLinks, NavLi } from './NavList.styled';

export const NavList = () => {
  return (
    <>
      <Nav>
        <NavLi>
          <NavLinks to="/">Home</NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks to="/">Tours</NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks to="/">About</NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks to="/">Help</NavLinks>
        </NavLi>
      </Nav>
    </>
  );
};
