import { useNavigate } from 'react-router';
import LogoImg from '../../images/Logo/SpaceX.svg';
import { LogoLink, Div, LogoImage } from './logo.styled';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Div>
        <LogoLink onClick={() => navigate('/')}>
          <LogoImage src={LogoImg} alt=" Logo Icon" />
        </LogoLink>
      </Div>
    </>
  );
};
