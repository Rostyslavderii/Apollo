import styled from 'styled-components';
import Logo from '../../images/Logo/Logo1.svg';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: block;
  width: 229px;
  height: 42px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${Logo});
  background-blend-mode: difference;
`;

// export const LogoImage = styled(`img`)`
//   position: absolute;
//   top: 0px;
//   background-image: rgba(0, 0, 0, 0);
//   width: 229px;
//   height: 42px;
//   padding-top: 18.5px;
//   padding-bottom: 19.5px;
//   z-index: 10;

//   //
// `;

export const Div = styled.div``;
