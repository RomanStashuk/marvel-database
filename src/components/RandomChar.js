import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// import './RandomChar.scss';
import thor from '../img/thor.jpeg';
import mjolnir from '../img/mjolnir.png';

const RandomChar = ({ className }) => {
  return (
    <Row as="section" className={`${className} shadow`}>
      <h2 className="visually-hidden">Random Marvel Comics Character</h2>
      <Col
        xs={12}
        md={6}
        className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row p-4"
      >
        <div className="flex-shrink-0 align-self-center mb-2 mb-sm-0 mb-md-2 mb-lg-0 me-sm-3 me-md-0 me-lg-3">
          <Image
            src={thor}
            className="object-fit-cover"
            width={180}
            height={180}
            alt="Random character"
          />
        </div>
        <div className="d-flex flex-column">
          <h3 className="ff-secondary fw-bold text-uppercase ">Thor</h3>
          <p>
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <Stack
            className="ff-secondary fw-bold text-uppercase"
            direction="horizontal"
            gap={2}
          >
            <Button
              href="#"
              className="me-2 link-light fw-bold"
              variant="primary"
            >
              Homepage
            </Button>
            <Button href="#" className="fw-bold" variant="secondary">
              Wiki
            </Button>
          </Stack>
        </div>
      </Col>
      <Col
        xs={12}
        md={6}
        className="position-relative d-flex flex-column bg-dark bg-gradient text-light p-4"
      >
        <p className="position-relative z-1 h4">
          Random character for today!
          <br />
          Do you want to get to know him better?
          <br />
          <span className="d-block mt-5">Or choose another one</span>
        </p>
        <Button className="align-self-start mt-auto link-light ff-secondary fw-bold text-uppercase">
          Try it
        </Button>
        <Image
          src={mjolnir}
          width={203}
          height={189}
          className="position-absolute bottom-0 end-0 mb-4 z-0"
          alt="mjolnir"
        />
      </Col>
    </Row>
  );
};

export default RandomChar;
