import FeaturedOffer from "./FeaturedOffer";
import ProductCard from "./ProductCard";
import ProductsGrid from "./ProductsGrid";

function ListOfProducts() {
    return (
        <div className="produkty m-15">
            <h1 className="text-center text-3xl font-bold m-15">Produkty</h1>
            
            <div className="flex justify-center items-start p-6 space-x-6 border min-h-[400px] h-full">
                {/* 🖱️ Okazja */}
                <FeaturedOffer />

                {/* 📦 Polecamy */}
                <ProductsGrid />
            </div>
        </div>
    );
}

export default ListOfProducts;
