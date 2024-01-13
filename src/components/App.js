import { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import AppHeader from './AppHeader';
import RandomChar from './RandomChar/RandomChar';
import CharList from './CharList';
import CharInfo from './CharInfo';
import AppFooter from './AppFooter';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    const { selectedChar } = this.state;

    return (
      <div className="app">
        <AppHeader className="mb-4" />
        <Container as="main" className="px-4">
          <ErrorBoundary>
            <RandomChar className="mb-4" />
          </ErrorBoundary>
          <Row className="d-flex justify-content-between mb-4 mb-lg-5">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={selectedChar} />
            </ErrorBoundary>
          </Row>
        </Container>
        <AppFooter />
      </div>
    );
  }
}

export default App;
