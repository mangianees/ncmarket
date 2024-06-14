import Sale from './components/Sale'
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getItems } from './utilities/api';
import CategorySideBar from './components/CatergorySideBar';
import PostItem from './components/PostItem';


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
      <PostItem />
      <Sale items = {items} />
    </>
  </BrowserRouter>
  )
}

export default App
