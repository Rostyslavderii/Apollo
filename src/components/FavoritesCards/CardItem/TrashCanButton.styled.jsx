import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrashLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  background-color: ${p => p.theme.colors.arrows};
  transition: all 0.3s;
  color: black;

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: white;
    background-color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.mainText};
    }
  }
  svg {
    text-decoration: none;
    fill: ${p => p.theme.colors.black};
    width: 24px;
    height: 24px;
  }
`;
