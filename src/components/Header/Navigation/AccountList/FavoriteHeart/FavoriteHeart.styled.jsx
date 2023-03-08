import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoriteLink = styled(Link)`
  display: block;
  width: 53px;
  height: 53px;

  background-color: ${p => p.theme.colors.arrows};
`;

export const FavoriteHeartSvg = styled.img`
  width: 24px;
  height: 24px;
  padding: 15.4px;
`;
