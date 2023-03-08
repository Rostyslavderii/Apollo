import { Logo } from 'components/Logo/Logo';
import { Container, HeaderBlock } from './Header.styled';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <header>
        <Container>
          <HeaderBlock>
            <Logo />
            <Navigation />
          </HeaderBlock>
        </Container>
      </header>
    </>
  );
};
