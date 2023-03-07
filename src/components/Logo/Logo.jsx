import LogoImg from '../../images/Logo/Logo.png';
import { LogoLink, LogoImage } from './logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoLink to="/">
        <LogoImage src={LogoImg} alt=" Logo Icon" />
      </LogoLink>
    </>
  );
};
