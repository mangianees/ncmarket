import ItemCard from "./ItemCard";

function Sale({items}) {
    // console.log(items, "from sale")
    return(
        <ul>
            {items.map((item)=>{
                return( <ItemCard item = {item} key={item.item_id} />)
            })}
        </ul>
    )
}

export default Sale;