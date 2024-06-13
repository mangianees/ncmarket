import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return(
        <>
        <Nav
      className="justify-content-center"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
      <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/sale">Sale</Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/purchase">Purchase</Link>
      </Nav.Item>
    </Nav>

        </>
    )
}

export default Navbar;