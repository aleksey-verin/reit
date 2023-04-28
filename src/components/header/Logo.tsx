import { FC } from 'react';
import ImgLogo from '../ui/ImgLogo';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="header-logo">
      <ImgLogo />
    </div>
  );
};

export default Logo;
