import Col from 'react-bootstrap/Col';

import Spinner from '../Spinner';

const RandomCharSpinner = () => {
  return (
    <Col
      xs={12}
      md={6}
      className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row p-4 mh-180"
    >
      <Spinner />
    </Col>
  );
};

export default RandomCharSpinner;
