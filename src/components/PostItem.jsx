function PostItem() {
    return(
        <>
        <div className="postItem">
        <form action="">
            <label htmlFor="Item-id">Item Id</label>
            <input type="text" name="item-id" /><br />
            <label htmlFor="Item-name">Item Name</label>
            <input type="text" name="item-name" /><br />
            <label htmlFor="Item-id">Description</label>
            <input type="text" name="item-description" /><br />
            <label htmlFor="Image">Image</label>
            <img src="" alt="Image Required" />
            <button>browse</button>
            <br />
            <label htmlFor="Item-price">Price</label>
            <input type="text" name="item-price" />
            <label htmlFor="Item-category">Category</label>
            <input type="text" name="item-category-name" />
             <br />

            <br />
            <button>Submit</button>
        </form>
        </div>        
        </>
    )
    
}
export default PostItem;