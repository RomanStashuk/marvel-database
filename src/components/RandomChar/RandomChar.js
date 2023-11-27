import { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

import RandomCharSpinner from './RandomCharSpinner';
import RandomCharErrorMessage from './RandomCharErrorMessage';
import RandomCharThumbnail from './RandomCharThumbnail';

import MarvelService from '../../services/MarvelService';

import bgImg from '../../img/mjolnir.png';

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService
      .getCharacterById(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { className } = this.props;
    const { char, loading, error } = this.state;
    const errorMessage = error ? <RandomCharErrorMessage /> : null;
    const spinner = loading ? <RandomCharSpinner /> : null;
    const content = !loading && !error ? <View char={char} /> : null;

    return (
      <Row as="section" className={`${className} shadow`}>
        <h2 className="visually-hidden">Random Marvel Comics Character</h2>
        {errorMessage}
        {spinner}
        {content}
        <Col
          xs={12}
          md={6}
          className="position-relative d-flex flex-column bg-dark bg-gradient text-light p-4"
        >
          <p className="position-relative z-1 mb-3 h4">
            Random character for today!
            <br />
            Do you want to get to know him better?
            <br />
            <span className="d-block mt-4">Or choose another one</span>
          </p>
          <Button className="align-self-start mt-auto link-light ff-secondary fw-bold text-uppercase">
            Try it
          </Button>
          <Image
            src={bgImg}
            width={203}
            height={189}
            className="position-absolute bottom-0 end-0 mb-4 z-0"
            aria-hidden="true"
          />
        </Col>
      </Row>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;

  return (
    <Col
      xs={12}
      md={6}
      className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row p-4"
    >
      <div className="flex-shrink-0 align-self-center mb-2 mb-sm-0 mb-md-2 mb-lg-0 me-sm-3 me-md-0 me-lg-3">
        <RandomCharThumbnail src={thumbnail} name={name} />
      </div>
      <div className="d-flex flex-column">
        <h3 className="ff-secondary fw-bold text-uppercase ">{name}</h3>
        <p className="mb-sm-auto mb-md-2 mb-lg-auto">{description}</p>
        <Stack
          className="ff-secondary fw-bold text-uppercase"
          direction="horizontal"
          gap={2}
        >
          <Button
            href={homepage}
            className="me-2 link-light fw-bold"
            variant="primary"
          >
            Homepage
          </Button>
          <Button href={wiki} className="fw-bold" variant="secondary">
            Wiki
          </Button>
        </Stack>
      </div>
    </Col>
  );
};

export default RandomChar;
