import { Link } from "react-router-dom";
import { useState } from "react";
import Sale from "./Sale";


function CategorySideBar({items}) {
const [filteredItems,setFilteredItems] = useState('');

    function handleElectronics(){
        const electronicItems = items.filter((item)=>{
          if(item.category_name=== 'Electronics'){
            return item
          }
        })
        setFilteredItems(electronicItems);
      }
    
      function handleRelic(){
        const relicItems = items.filter((item)=>{
          if(item.category_name=== 'Relics'){
            return item
          }
        })
    
        setFilteredItems(relicItems);
      }
    
      function handleHousehold(){
        const householdItems = items.filter((item)=>{
          if(item.category_name=== 'Household'){
            return item
          }
        })
        setFilteredItems(householdItems);
      }

     
      
    return (
        <>
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

    {
    filteredItems ? <Sale items ={filteredItems} /> : null
    }
        </>
    )
    
}

export default CategorySideBar