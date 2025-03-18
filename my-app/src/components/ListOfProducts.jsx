function ListOfProducts() {
    return (
        <div className="produkty m-15">
            <h1 className="text-center text-3xl font-bold m-15">Produkty</h1>
            
            <div className="flex justify-center items-start p-6 space-x-6 border min-h-[400px] h-full">
                {/* 🖱️ Okazja */}
                <div className="okazja flex flex-col w-1/3 p-5 border h-full">
                    <h1 className="text-3xl font-bold mb-5">Okazja</h1>
                    <div className="flex flex-col border justify-center items-center text-center shadow-lg h-full">
                        <img
                            src="./public/newest-products/mouse.png"
                            alt="mouse" className="w-24 h-24 object-contain"
                        />
                        <div>
                            <p className="test-sm">Myszki</p> 
                            <p className="text-lg font-bold">NeonByte Phantom X9</p> 
                            <p className="text-3xl text-red-500 font-bold my-5">199 zł</p>
                            <p className="text-sm">Czas do końca promocji</p>
                            <div className="flex items-center gap-2 m-5">
                                <div className="flex flex-col justify-center w-13 h-13 border rounded-xs">
                                    <p className="text-lg font-bold">12</p>
                                    <p className="text-xs">godz.</p>
                                </div>
                                <p className="text-4xl relative bottom-1.5">:</p>
                                <div className="flex flex-col justify-center w-13 h-13 border rounded-xs">
                                    <p className="text-lg font-bold">34</p>
                                    <p className="text-xs">min.</p>
                                </div>
                                <p className="text-4xl relative bottom-1.5">:</p>
                                <div className="flex flex-col justify-center w-13 h-13 border rounded-xs">
                                    <p className="text-lg font-bold">57</p>
                                    <p className="text-xs">sec.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📦 Polecamy */}
                <div className="polecamy flex flex-col w-2/3 p-5 border h-full">
                    <h1 className="text-3xl font-bold mb-5">Polecamy</h1>
                    <div className="grid grid-cols-4 gap-4 border h-full">
                        {[
                            "laptop.png",
                            "graphic-card.png",
                            "keyboard.png",
                            "monitor.png",
                            "printer.png",
                            "playstation.png",
                            "printer.png",
                            "playstation.png"
                        ].map((product, index) => (
                            <div key={index} className="flex justify-center items-center border h-full">
                                <img src={`./public/newest-products/${product}`} alt={`product${index + 1}`} className="w-32 h-32 object-contain"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListOfProducts;
