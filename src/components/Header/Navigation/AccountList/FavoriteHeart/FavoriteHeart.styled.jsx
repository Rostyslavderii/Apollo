import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoriteLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  background-color: ${p => p.theme.colors.arrows};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.mainText};
    }
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const FavoriteHeartSvg = styled.img`
  width: 24px;
  height: 24px;
  &:hover,
  &:focus {
    svg {
      // svg не стилизуеться
      fill: ${p => p.theme.colors.mainText};
    }
  }
`;
