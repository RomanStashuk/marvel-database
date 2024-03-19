import { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import MarvelService from '../services/MarvelService';
class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError);
  }

  onCharListLoaded = (charList) => {
    this.setState({ charList, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { charList, loading, error } = this.state;

    const errorMessage = error ? (
      <ErrorMessage className={'w-100 mb-3'} />
    ) : null;
    const spinner = loading ? <Spinner /> : null;
    const content =
      !loading && !error ? (
        <View charArr={charList} onCharSelected={this.props.onCharSelected} />
      ) : null;

    return (
      <Col as="section" xs={12} md={7} className="mb-4 mb-md-0 p-0">
        <h2 className="visually-hidden">List of Marvel Comic Characters</h2>
        <div className="me-md-3 me-lg-4">
          {errorMessage}
          {spinner}
          {content}
          <Button className="d-block mx-auto ff-secondary fw-bold text-uppercase text-white">
            Load more
          </Button>
        </div>
      </Col>
    );
  }
}

const View = ({ charArr, onCharSelected }) => {
  const chars = charArr.map(({ id, name, thumbnail, homepage }) => {
    return (
      <Col
        key={id}
        onClick={() => onCharSelected(id)}
        as="li"
        xs={6}
        sm={4}
        md={6}
        lg={4}
        className="position-relative"
        style={{ cursor: 'pointer' }}
      >
        <div className="d-flex flex-column p-0 h-100 bg-dark text-light shadow">
          <Image src={thumbnail} className="object-fit-cover" alt={name} />
          <h3 className="mb-0 p-3 fw-bold ff-secondary fs-4 text-uppercase text-break">
            {name}
          </h3>
        </div>
      </Col>
    );
  });

  return (
    <Row as="ul" className="mb-3 g-3 list-unstyled">
      {chars}
    </Row>
  );
};

export default CharList;
