import { Col, Container, Row, Card } from 'react-bootstrap'
import Link from 'next/link'
import { leftMenuLinks } from '../routes'

const Home = () => (
  <Container fluid>
    <div className='cards-container'>
      <Row>
        {leftMenuLinks.map((link, i) => {
          return (
            <Col key={i}>
              <Link key={i} href={link.path} className="nav-link">
                <Card><Card.Body><Card.Title as="h3">{link.caption}</Card.Title></Card.Body></Card>
              </Link>
            </Col>)
        })}
      </Row>
    </div>
  </Container>
)

export default Home;