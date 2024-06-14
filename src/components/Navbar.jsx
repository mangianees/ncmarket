import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Navbar() {

function handlePostItem(params) {
  
  
}

    return(
        <>
        
<nav class="navbar navbar-dark bg-dark nav-fill w-100" >
  
className="justify-content-center"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      <Nav.Item>
      <Link class="navbar-brand" to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
      <Link class="navbar-brand" to="/sale">Sale</Link>
      <Link class="navbar-brand" to="/postItem" onClick={handlePostItem}>Create Listing</Link>

      </Nav.Item>
      <Nav.Item>
      <Link class="navbar-brand" to="/purchase">Purchase</Link>
      </Nav.Item>

</nav>




       
        </>
    )
}

export default Navbar;