import BestSellerCard from "./BestsellerCard";

function BestSellers() {
    return(
        <div className="bestsellery flex w-full flex-col my-8 border">
            <h1 className="text-3xl font-bold mb-5">Bestellery</h1>
            <div className="cards flex w-full">
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
            </div>
        </div>
    );
}

export default BestSellers;