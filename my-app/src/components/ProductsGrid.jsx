import ProductCard from "./ProductCard";

function ProductsGrid() {
    const products = [
        "laptop.png",
        "graphic-card.png",
        "keyboard.png",
        "monitor.png",
        "printer.png",
        "playstation.png",
        "printer.png",
        "playstation.png"
    ];
    
    return(
        <div className="polecamy flex flex-col w-2/3 p-5 border h-full">
            <h1 className="text-3xl font-bold mb-5">Polecamy</h1>
            <div className="grid grid-cols-4 gap-4 border h-full">
                {products.map((product, index) =>
                    <ProductCard key={index} index={index} product={product} />
                )}
            </div>
        </div>
    );
}

export default ProductsGrid;