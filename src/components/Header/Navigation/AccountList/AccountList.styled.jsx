import styled from 'styled-components';

export const List = styled(`ul`)`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const SingInButton = styled(`button`)`
  margin-left: 12px;
  padding: 12px 0px;
  text-transform: uppercase;
  width: 163px;
  background-color: ${p => p.theme.colors.bottons};
  font-family: ${p => p.theme.fonts.secondaryFamily};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &.active {
    font-weight: 900;
  }
`;
