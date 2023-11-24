import Container from 'react-bootstrap/Container';

const AppFooter = () => {
  return (
    <footer bg-dark fluid className="text-bg-dark">
      <Container className="p-3 text-center">
        <p className="m-0">
          Data provided by{' '}
          <a
            href="https://www.marvel.com"
            className="link-primary link-underline-opacity-0 link-underline-opacity-100-hover"
            target="_blank"
            rel="noreferrer"
          >
            Marvel
          </a>
          . ©&nbsp;2014&nbsp;Marvel
        </p>
      </Container>
    </footer>
  );
};
export default AppFooter;
