import LogoImg from '../../images/Logo/SpaceX.svg';
import { LogoLink, Div, LogoImage } from './logo.styled';

export const Logo = () => {
  return (
    <>
      <Div>
        <LogoLink to="/">
          <LogoImage src={LogoImg} alt=" Logo Icon" />
        </LogoLink>
      </Div>
    </>
  );
};
