import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({item}) {
    // console.log(item, 'from item card')
    return(
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img_url} />
      <Card.Body>

        <Card.Title>{item.item_name}</Card.Title>

        <Card.Text>
        {item.description}
        </Card.Text>

        <Card.Text>
        <b>£{item.price}</b>
        </Card.Text>

        <Card.Text>
        {item.category_name}
        </Card.Text>

        <Card.Text>
        {item.description}
        </Card.Text>
        <div>
        <Button className='buttons'>Add to Basket</Button>
        </div>
        <br />
        <div>
        <Button className='buttons'>Buy Now</Button>  
        </div>
      </Card.Body>
    </Card>
        </>
    ) 
}

export default ItemCard;