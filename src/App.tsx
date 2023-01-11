import './App.scss';

import Header from './components/Header';
import Content from './components/Content';
import LeftMenu from './components/LeftMenu';
import { Container, Row, Col } from 'react-bootstrap';

import { observer } from 'mobx-react-lite';
import React from 'react';


const App = observer(() => {
  
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row style={{ padding: '72px 0 0 0' }}>
        <LeftMenu />
        <Col className='app content'>
          <Content />
        </Col>
      </Row>

    </Container>
  )

})

export default App;
