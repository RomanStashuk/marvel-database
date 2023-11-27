import Col from 'react-bootstrap/Col';

import ErrorMessage from '../ErrorMessage';

const RandomCharErrorMessage = () => {
  return (
    <Col
      xs={12}
      md={6}
      className="d-flex justify-content-center align-items-center p-4 mh-180 bg-dark bg-gradient"
    >
      <ErrorMessage width={312} height={180} />
    </Col>
  );
};

export default RandomCharErrorMessage;
