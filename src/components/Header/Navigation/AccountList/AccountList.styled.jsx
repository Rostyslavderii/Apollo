import styled from 'styled-components';

export const List = styled(`ul`)`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const SingInButton = styled(`button`)`
  margin-left: 12px;
  width: 163px;
  background-color: ${p => p.theme.colors.bottons};
  font-family: ${p => p.theme.fonts.secondaryFamily};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
`;
