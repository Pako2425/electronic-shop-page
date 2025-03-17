function ListOfProducts() {
    return(
        <div className="produkty">
            <h2 className="text-5xl font-bold text-center">Produkty</h2>
            <div className="flex flex-row justify-center items-center">
                <div className="okazja flex flex-col h-64 bg-amber-200">
                    <h1 className="text-3xl">OKAZJA</h1>
                    <img src="./public/newest-products/mouse.png" alt="mouse" className="w-40 object-contain"/>
                </div>
                <div class="polecamy flex-col w-2/3 bg-cyan-400">
                    <h1 className="text-3xl">Polecamy</h1>
                    <div className="grid grid-cols-3 grid-rows-2 w-12">
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/laptop.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/graphic-card.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/keyboard.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/monitor.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/mouse.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/playstation.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="./public/newest-products/printer.png" alt="product1" className="w-full h-full object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListOfProducts;