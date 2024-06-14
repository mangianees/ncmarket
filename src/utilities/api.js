import axios from "axios";

const ncMarketPlace = axios.create({baseURL:"https://nc-marketplace-sem-1.onrender.com/api/"})


export const getItems = () => {
    return ncMarketPlace.get("/items")
    .then((response)=>{
        // console.log(response.data.items)
        return response.data.items
    })
}

export const postItemsForSale = (newItem) => {
    const postBody = {
        // item_id = newItem.id,
        item_name: newItem.item_name,
        description: newItem.description,
        image: newItem.image,
        price: newItem.price,
        category_name: newItem.category_name
    }
}