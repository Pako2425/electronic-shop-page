function MainSpecialOfferCard() {
    return(
        <div className="flex text-center aspect-[3/2] p-4 border border-gray-200 rounded-xl">
            <img className="h-9/10" src="./special-offers/promocja5.png" alt="main-promocja"/>
            <div className="flex flex-col justify-center p-4">
                <p className="mb-4 text-2xl font-bold">Darmowa dostawa</p>
                <p>Kup rzeczy za minimum 300zł a dostaniesz darmową dostawę</p>
            </div>
            
        </div>
    );
}

export default MainSpecialOfferCard;