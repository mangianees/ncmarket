import Home from './components/Home'
import Sale from './components/Sale'
import ItemCard from './components/ItemCard'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    
    <BrowserRouter>
    <>
      <Home />
      <Sale />
      <ItemCard />
    </>
  </BrowserRouter>
  )
}

export default App
