function SpecialOffers() {
    return(
        <div className="promocje flex flex-col justify-center items-center border">
            <h2>Promocje</h2>
            <p>Sprawdź co dla ciebie mamy</p>
            <div className="flex w-full max-w-300 border">
                <div className="flex grow-1 bg-amber-300">
                    <p>Big offer</p>
                </div>
                <div className="flex grow-2 bg-blue-500">
                    <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                        <p1 className="border">Small offer</p1>
                        <p1 className="border">Small offer</p1>
                        <p1 className="border">Small offer</p1>
                        <p1 className="border">Small offer</p1>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default SpecialOffers;