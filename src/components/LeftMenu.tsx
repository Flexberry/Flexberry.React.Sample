import { Link } from 'react-router-dom';

import { observer } from "mobx-react-lite";

import { leftMenuLinks } from '../routes';
import Row from 'react-bootstrap/esm/Row';

const LeftMenu = observer(() => {
  return (
    <div className={'left-menu expanded'}>
      <Row className="nav">
        {leftMenuLinks.map((link, i) => {
          return (<Link key={i} to={link.path} className="nav-link"><div>{link.caption}</div></Link> )
        })}
      </Row>
    </div>
  )
})

export default LeftMenu;