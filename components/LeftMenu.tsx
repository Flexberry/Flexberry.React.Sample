import Link from 'next/link'
import { Row } from 'react-bootstrap'

import { leftMenuLinks } from '../routes'

const LeftMenu = () => (
  <div className={'left-menu expanded'}>
    <Row className="nav">
      {leftMenuLinks.map((link, i) => {
        return (<Link key={i} href={link.path} className="nav-link"><div>{link.caption}</div></Link> )
      })}
    </Row>
  </div>
)

export default LeftMenu;