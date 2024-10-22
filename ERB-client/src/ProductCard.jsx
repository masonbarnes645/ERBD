


const ProductCard = ({name, description, price, tags, photos, product}) =>{


    return(
        <div>
            <h1>
                {name}
                {description}
                {price}
                {tags}
                {/* {product.photos.length > 0 ? <img src={product.photos[0].file_path}/> : <></>} */}
            </h1>
        </div>
    )
}

export default ProductCard