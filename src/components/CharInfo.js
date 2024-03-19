import { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import Skeleton from './Skeleton/Skeleton';
import MarvelService from '../services/MarvelService';

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar = () => {
    const { charId } = this.props;

    if (!charId) return;

    this.onCharLoading();
    this.marvelService
      .getCharacterById(charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  onCharLoading = () => {
    this.setState({ loading: true });
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { char, loading, error } = this.state;

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage className={'w-100'} /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading && !error && char ? <View char={char} /> : null;

    return (
      <Col as="section" sm={12} md={5} className="p-4 p-md-3 p-lg-4 shadow">
        <h2 className="visually-hidden">Information about chosen character</h2>
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </Col>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const thumbnailClassName = `d-block mx-auto ms-lg-0 object-fit-${
    thumbnail.includes('image_not_available') ? 'contains' : 'cover'
  }`;
  return (
    <>
      <Row className="mb-2 mb-sm-3 mb-md-2 mb-lg-3">
        <Col sm={7} md={12} lg={5}>
          <img
            src={thumbnail}
            width={150}
            height={150}
            className={thumbnailClassName}
            alt={name}
          />
        </Col>
        <Col
          sm={5}
          md={12}
          lg={7}
          className="d-flex flex-column ps-lg-4 ps-xl-0"
        >
          <h3 className="align-self-center align-self-lg-start my-2 mt-lg-0 ff-secondary fw-bold text-uppercase">
            {name}
          </h3>
          <div className="d-flex flex-column mt-auto ff-secondary text-uppercase">
            <Button
              href={homepage}
              className="mb-2 fw-bold link-light"
              variant="primary"
            >
              Homepage
            </Button>
            <Button href={wiki} className="fw-bold " variant="secondary">
              Wiki
            </Button>
          </div>
        </Col>
      </Row>

      <p>{description}</p>

      <h4 className="ff-secondary fw-bold">Comics:</h4>
      <ul className="list-group">
        {comics.length ? null : 'There is no comics with this characher'}
        {comics.map((item, i) => {
          if (i > 10) return null;
          return (
            <li key={i} className="list-group-item">
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CharInfo;
