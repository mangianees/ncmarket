import { postItemsForSale } from "../utilities/api";
import { useState } from "react";

function PostItem() {

    const [newItem, setNewItem] = useState({
        item_name: '',
        description: '',
        image: '',
        price: '',
        category_name: ''
    })

    const handleAddItem = (event) => {
        event.preventDefault();

        

        console.log(newItem)
        postItemsForSale(newItem).then((newItemFromAPI) =>{
            setNewItem({
                item_name: newItemFromAPI.item_name,
                description: newItemFromAPI.description,
                image: newItemFromAPI.image,
                price: newItemFromAPI.price,
                category_name: newItemFromAPI.category_name
            });
            set
        })
    }
//set state before post
//input tag has a 'value attribute'
    return(
        <>
        <div className="postItem">
        <form action="onSubmit" >
            {/* <label htmlFor="Item-id">Item Id</label>
            <input type="text" name="item-id" /><br /> */}
            <label htmlFor="Item-name">Item Name</label><br />

            <input type="text" name="item-name" onChange={handleAddItem}/>

            <br /><label htmlFor="Item-id">Description</label><br />
            <input type="text" name="item-description" />


            <br /><label htmlFor="Image">Image</label><br />
            <img src="" alt="Image Required" />
            <button>browse</button>

            <br /><label htmlFor="Item-price">Price</label><br />
            <input type="text" name="item-price" />

            <br /><label htmlFor="Item-category">Category</label><br />
            <input type="text" name="item-category-name" /><br />
         
            <br /><button onClick={handleAddItem}>Submit</button>
        </form>
        </div>        
        </>
    )
    
}
export default PostItem;