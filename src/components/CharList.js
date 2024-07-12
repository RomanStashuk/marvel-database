import { useState, useEffect, useRef } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import MarvelService from '../services/MarvelService';

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;

    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const onRequest = (offset) => {
    onCharListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage className={'w-100 mb-3'} /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content =
    !loading && !error ? (
      <View charArr={charList} onCharSelected={props.onCharSelected} />
    ) : null;

  const buttonClassName = `d-block mx-auto ff-secondary fw-bold text-uppercase text-white ${
    charEnded ? 'invisible' : 'visible'
  }`;

  return (
    <Col as="section" xs={12} md={7} className="mb-4 mb-md-0 p-0">
      <h2 className="visually-hidden">List of Marvel Comic Characters</h2>
      <div className="me-md-3 me-lg-4">
        {errorMessage}
        {spinner}
        {content}
        <Button
          className={buttonClassName}
          disabled={newItemLoading}
          hidden={charEnded}
          onClick={() => onRequest(offset)}
        >
          Load more
        </Button>
      </div>
    </Col>
  );
};

const View = ({ charArr, onCharSelected }) => {
  const itemsRefs = useRef([]);

  const focusOnItem = (id) => {
    itemsRefs.current.forEach((item) =>
      item.classList.remove('char__item_selected'),
    );
    itemsRefs.current[id].classList.add('char__item_selected');
    itemsRefs.current[id].focus();
  };

  const chars = charArr.map(({ id, name, thumbnail, homepage }) => {
    return (
      <Col
        key={id}
        ref={(el) => (itemsRefs.current[id] = el)}
        onClick={() => {
          onCharSelected(id);
          focusOnItem(id);
        }}
        onKeyPress={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            onCharSelected(id);
            focusOnItem(id);
          }
        }}
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
