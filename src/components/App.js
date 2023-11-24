import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import AppHeader from './AppHeader';
import RandomChar from './RandomChar';
import CharList from './CharList';
import CharInfo from './CharInfo';
import AppFooter from './AppFooter';

const App = () => {
  return (
    <div className="app">
      <AppHeader className="mb-4" />
      <Container as="main">
        <RandomChar className="mb-4" />
        <Row className="mb-4 mb-lg-5">
          <CharList />
          <CharInfo />
        </Row>
      </Container>
      <AppFooter />
    </div>
  );
};

export default App;
