import Home from './components/Home'
import Sale from './components/Sale'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getItems } from './utilities/api';


function App() {

  const [items, setItems] = useState([])
  useEffect(()=>{
    getItems().then((itemsFromApi)=>{
      setItems(itemsFromApi)
    })
  },[])
  

  return (
    
    <BrowserRouter>
    <>
      <Home items = {items}/>
      <Sale items = {items} />
      {/* <ItemCard /> */}
    </>
  </BrowserRouter>
  )
}

export default App
