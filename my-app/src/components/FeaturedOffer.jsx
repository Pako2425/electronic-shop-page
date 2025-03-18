function FeaturedOffer() {
    return(
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
    );
}

export default FeaturedOffer;