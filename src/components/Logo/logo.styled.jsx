import styled from 'styled-components';
//import Logo from '../../images/Logo/Logo1.svg';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  //background: none;
  background-color: transparent;
  /* background: rgba(0, 0, 0, 0);
  mix-blend-mode: difference; */
`;

export const LogoImage = styled(`img`)`
  // position: absolute;
  width: 229px;
  height: 42px;
  padding-top: 18.5px;
  padding-bottom: 19.5px;
  background-repeat: no-repeat;
  opacity: 0.4;
  //fill: transparent;
  mix-blend-mode: difference;
  //background-blend-mode: unset;
  /* background-image: red;
  background-color: red; */
  //background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  svg {
    //
  }
`;

//  linear-gradient(
//         to bottom,
//         rgba(255, 255, 255, 0.4),
//         rgba(255, 255, 255, 0.4)
//       );
//       backdrop-filter: blur(25px);
