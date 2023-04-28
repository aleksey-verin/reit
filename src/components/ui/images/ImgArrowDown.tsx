import { FC } from 'react';

interface ImgArrowDownProps {}

const ImgArrowDown: FC<ImgArrowDownProps> = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 16.7999C11.8 16.7999 11.1 16.5299 10.57 15.9999L4.05002 9.47989C3.76002 9.18989 3.76002 8.70989 4.05002 8.41989C4.34002 8.12989 4.82002 8.12989 5.11002 8.41989L11.63 14.9399C12.11 15.4199 12.89 15.4199 13.37 14.9399L19.89 8.41989C20.18 8.12989 20.66 8.12989 20.95 8.41989C21.24 8.70989 21.24 9.18989 20.95 9.47989L14.43 15.9999C13.9 16.5299 13.2 16.7999 12.5 16.7999Z"
        fill="#7E92A2"
      />
    </svg>
  );
};

export default ImgArrowDown;
