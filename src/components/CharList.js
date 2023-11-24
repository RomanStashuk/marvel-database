import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import abyss from '../img/abyss.jpg';

const CharList = () => {
  return (
    <Col as="section" className="">
      <h2 className="visually-hidden">List of Marvel Comic Characters</h2>
      <Row xs={2} sm={3} md={2} lg={3} className="mb-3">
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light shadow">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase ">
                <Card.Link
                  href="#"
                  className="ff-secondary link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light ">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light ">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light ">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light ">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light ">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light ">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light shadow">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 shadow">
          <Card className="bg-dark text-light shadow">
            <Card.Img
              variant="top"
              src={abyss}
              className="object-fit-contain"
              alt="abyss"
            />
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                <a
                  href="#"
                  className="link-light link-underline-opacity-0 stretched-link"
                >
                  Abyss
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button className="d-block mx-auto ff-secondary fw-bold text-white text-uppercase">
        Load more
      </Button>
    </Col>
  );
};

export default CharList;
