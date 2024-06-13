import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Home({items}) {

  function handleElectronics(){
    const electronicItems = items.filter((item)=>{
      if(item.category_name=== 'Electronics'){
        return item
      }
    })
    console.log('Electronics', electronicItems)
  }

  function handleRelic(){
    const relicItems = items.filter((item)=>{
      if(item.category_name=== 'Relics'){
        return item
      }
    })
    console.log('Relic', relicItems)
  }

  function handleHousehold(){
    const householdItems = items.filter((item)=>{
      if(item.category_name=== 'Household'){
        return item
      }
    })
    console.log('Household', householdItems)
  }

  
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

    <div className="Category">
      <nav>
        <ul>
          <li>
            <Link onClick={handleElectronics}>Electronics</Link>
          </li>
          <li>
            <Link onClick={handleRelic}>Relic</Link>
          </li>
          <li>
            <Link onClick={handleHousehold}>Household</Link>
          </li>
        </ul>
      </nav>

    </div>
        </>
    )
    
}

export default Home;