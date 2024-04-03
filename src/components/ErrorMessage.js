import { Image } from 'react-bootstrap';

import errorImg from '../img/error.gif';

const ErrorMessage = ({ width, height, className }) => {
  return (
    <Image
      src={errorImg}
      width={width}
      height={height}
      className={className}
      alt="error"
    />
  );
};

export default ErrorMessage;
