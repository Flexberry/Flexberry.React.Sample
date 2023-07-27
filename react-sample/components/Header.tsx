import Link from 'next/link'
import Image from 'next/image'
import { Container, Nav, Navbar } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

import { headerLinks } from '../routes'

const Header = () => (
  <Navbar fixed="top" className="header">
    <Container fluid>
      <Navbar.Text className="menu"><Icon.List size={30}></Icon.List> </Navbar.Text>
      <Link href={'/'} className={'navbar-brand'}>
        <Image
          src="/logo.svg"
          height="54"
          width="54"
          className="d-inline-block align-top"
          alt=""
        />
      </Link>
      <Nav>
        <Link href={'/'}>
          <div className="title">
            <div>Flexberry</div>
            <div className="small">React.Sample</div>
          </div>
        </Link>
      </Nav>
      <Nav className="ms-auto">
        {headerLinks.map((link, i) => {
          return (<Link key={i} href={link.path} className="nav-link">{link.caption}</Link>)
        })}

        {<Navbar.Text className='username'>userName</Navbar.Text>}
        {<Icon.BoxArrowRight className='logout-btn' size={25} title={'Выйти'}>Выйти</Icon.BoxArrowRight>}
      </Nav>
    </Container>
  </Navbar>
)

export default Header;