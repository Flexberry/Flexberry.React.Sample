import { Container, Col } from 'react-bootstrap';
// Импорт Row отдельно, тк иначе происходит ошибка Cannot use import statement outside a module
import { Row } from 'react-bootstrap';

import '../styles/app.scss'
import type { AppProps } from 'next/app'

import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row style={{ padding: '72px 0 0 0' }}>
        <LeftMenu />
        <Col className='app content'>
          <Component {...pageProps} />
        </Col>
      </Row>
    </Container>
  )
}
