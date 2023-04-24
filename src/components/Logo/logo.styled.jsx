import styled from 'styled-components';
//import Logo from '../../images/Logo/SpaceX.svg';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  width: 229px;
  height: 42px;
  background-blend-mode: difference;
`;

export const LogoImage = styled(`img`)`
  background-image: rgba(0, 0, 0, 0);
  width: 229px;
  height: 42px;
  padding-top: 18.5px;
  padding-bottom: 19.5px;
`;

export const Div = styled.div`
  z-index: 10001;
`;
