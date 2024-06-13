import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
    return(
        <>
    
    <Nav
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

    <div className="Category">

      

      <nav>
        <ul>
          <li>
            <Link>Electronics</Link>
          </li>
          <li>
            <Link>Relic</Link>
          </li>
          <li>
            <Link>Household</Link>
          </li>
        </ul>
      </nav>

    </div>
        </>
    )
    
}

export default Home;