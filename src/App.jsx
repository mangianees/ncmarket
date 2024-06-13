import Sale from './components/Sale'
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getItems } from './utilities/api';
import CategorySideBar from './components/CatergorySideBar';


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
      <Navbar />
      <CategorySideBar items={items}/>
      <Sale items = {items} />
      {/* <ItemCard /> */}
    </>
  </BrowserRouter>
  )
}

export default App
