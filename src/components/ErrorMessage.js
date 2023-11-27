import { Image } from 'react-bootstrap';

import errorImg from '../img/error.gif';

const ErrorMessage = ({ width, height }) => {
  return <Image src={errorImg} width={width} height={height} alt="error" />;
};

export default ErrorMessage;
