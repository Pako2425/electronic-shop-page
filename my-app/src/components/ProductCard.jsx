function ProductCard({index, product}) {
    return(
        <div className="
            flex justify-center items-center border h-full
            hover:border-white hover:shadow-2xl hover:scale-105 transition duration-200
            "
        >
            <img src={`./public/newest-products/${product}`} alt={`product${index + 1}`} className="w-32 h-32 object-contain"/>
        </div>
    );
}

export default ProductCard;