import { Nav, NavLinks, NavLi } from './NavList.styled';

export const NavList = () => {
  return (
    <>
      <Nav>
        <NavLi>
          <NavLinks to="/">Home</NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks
            onClick={() => {
              alert('Need tours fetch');
            }}
            to="/tours"
          >
            Tours
          </NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks
            onClick={() => {
              alert('Need about fetch');
            }}
            to="/about"
          >
            About
          </NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks
            onClick={() => {
              alert('Need help fetch');
            }}
            to="/help"
          >
            Help
          </NavLinks>
        </NavLi>
      </Nav>
    </>
  );
};
