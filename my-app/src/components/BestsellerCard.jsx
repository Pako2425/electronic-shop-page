function BestSellerCard() {
    return(
        <div className="
            card flex flex-col w-1/6 min-h-fit mx-2 my-4 py-2 items-center justify-between rounded-xl
            border border-gray-400 hover:border-white hover:shadow-md shadow-gray-700 
            transition duration-100">
            <img src="./public/newest-products/laptop.png" alt="fota produktu" className="flex h-1/2 object-cover" />
            <div className="flex flex-col text-center">
                <p className="category text-xs text-gray-600">Kategoria</p>
                <p className="name text-lg">Nazwa</p>
                <p className="price text-lg font-bold">Cena</p>
                <p className="text-xs text-gray-600">Najniższa cena z 30dni przed obniżką</p>
            </div>
        </div>
    );
}

export default BestSellerCard;