import ItemCard from "./ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sale({items}) {

    return(

        <ul>   
            <li>
            {items.map((item)=>{
                return( <ItemCard item = {item} key={item.item_id} />)
            })}
            </li>
        </ul>
        



        
    
    )
}

export default Sale;