// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function ItemCard({item}) {

  // console.log();
    
    return(
      <>
            {/* <div className="container">
              <div className="item"> */}

                  <div> <img className="image" src={item.img_url} alt="Missing Image" />
                  </div>
                  
                  <div className="Body">

                    <div className="Title">{item.item_name}</div>

                    <div className="Text">
                    {item.description}
                    </div>

                    <div className="Text">
                    <b>£{item.price}</b>
                    </div>

                    <div className="Text">
                    {item.category_name}
                    </div>

                    <div className="Text">
                    {item.description}
                    </div>

                    <div>
                    <button className='buttons'>Add to Basket</button>
                    </div>

                    <br />
                    
                    <div>
                    <button className='buttons'>Buy Now</button>
                    </div>

                  </div>
              {/* </div>
            </div> */}

           

            </>
    ) 
}

export default ItemCard;