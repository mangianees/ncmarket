import ItemCard from "./ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sale({items}) {

    return(
        
          
            <div className="container">
            
              
            {items.map((item)=>{
                return( 
                    <div className="item">
                <ItemCard item = {item} key={item.item_id} />
                </div>)
            })}
            
            
        </div>
    



        
    
    )
}

export default Sale;