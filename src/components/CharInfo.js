import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

import thor from '../img/thor.jpeg';

const CharInfo = () => {
  return (
    <Col as="section" sm={12} md={5} className="p-4 p-md-3 p-lg-4 shadow">
      <h2 className="visually-hidden">Information about chosen character</h2>

      <Row className="mb-2 mb-sm-3 mb-md-2 mb-lg-3">
        <Col xs sm={7} md={12} lg="auto">
          <img
            src={thor}
            width={150}
            height={150}
            className="d-block mx-auto ms-lg-0"
            alt="abyss"
          />
        </Col>
        <Col xs sm={5} md={12} lg="auto" className="d-flex flex-column ">
          <h3 className="align-self-center align-self-lg-start my-2 mt-lg-0 ff-secondary fw-bold text-uppercase">
            Thor
          </h3>
          <div className="d-flex flex-column mt-auto ff-secondary text-uppercase">
            <Button
              href="#"
              className="mb-2 fw-bold link-light"
              variant="primary"
            >
              Homepage
            </Button>
            <Button href="#" className="fw-bold " variant="secondary">
              Wiki
            </Button>
          </div>
        </Col>
      </Row>

      <p>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>

      <h4 className="ff-secondary fw-bold">Comics:</h4>
      <ul className="list-group">
        <li className="list-group-item">
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
        <li className="list-group-item">Alpha Flight (1983) #50</li>
        <li className="list-group-item">Amazing Spider-Man (1999) #503</li>
        <li className="list-group-item">Amazing Spider-Man (1999) #504</li>
        <li className="list-group-item">
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li className="list-group-item">
          Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
        </li>
        <li className="list-group-item">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li className="list-group-item">Vengeance (2011) #4</li>
        <li className="list-group-item">Avengers (1963) #1</li>
        <li className="list-group-item">Avengers (1996) #1</li>
      </ul>
    </Col>
  );
};

export default CharInfo;
