import axios from "axios";

export const getItems = () => {
    return axios.get("https://nc-marketplace-sem-1.onrender.com/api/items")
    .then((response)=>{
        // console.log(response.data.items)
        return response.data.items
    })
}