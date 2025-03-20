import FeaturedOffer from "./FeaturedOffer";
import ProductCard from "./ProductCard";
import ProductsGrid from "./ProductsGrid";

function ListOfProducts() {
    return (
        <div className="produkty flex flex-col items-center justify-center mt-5">
            <div className="flex justify-center items-stretch p-6 space-x-6 min-h-100 max-w-300 w-full">
                {/* 🖱️ Okazja */}
                <FeaturedOffer />

                {/* 📦 Polecamy */}
                <ProductsGrid />
            </div>
        </div>
    );
}

export default ListOfProducts;
