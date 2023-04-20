import { Nav, NavLinks, NavLi } from './NavList.styled';
import { useNavigate } from 'react-router';

export const NavList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav>
        <NavLi>
          <NavLinks to="/">Home</NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks
            onClick={e => {
              e.preventDefault();
              alert('Need tours fetch');
              return false;
            }}
            to="tours"
          >
            Tours
          </NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks
            onClick={e => {
              e.preventDefault();
              alert('Need about fetch');
              return false;
            }}
            to="about"
          >
            About
          </NavLinks>
        </NavLi>
        <NavLi>
          <NavLinks
            onClick={e => {
              e.preventDefault();
              alert('Need help fetch');
              return false;
            }}
            to="help"
          >
            Help
          </NavLinks>
        </NavLi>
      </Nav>
    </>
  );
};
