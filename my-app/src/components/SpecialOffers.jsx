import SpecialOfferCard from "./SpecialOfferCard";

function SpecialOffers() {
    return(
        <div className="promocje">
            <div>Promocje</div>
            <p>Sprawdź co dla ciebie mamy</p>
            <div className="flex flex-row">
                <div className="flex flex-1/2 bg-amber-200">
                    <p>aa</p>
                </div>
                <div className="flex w-1/2 gap-4 flex-wrap items-center justify-center">
                    <SpecialOfferCard img_src={"./public/special-offers/promocja1.png"} title={"#CYBER PONIEDZIAŁEK"} />
                    <SpecialOfferCard img_src={"./public/special-offers/promocja2.png"} title={"2+1"} />
                    <SpecialOfferCard img_src={"./public/special-offers/promocja3.png"} title={"CASHBACK"} />
                    <SpecialOfferCard img_src={"./public/special-offers/promocja4.png"} title={"WYMIEŃ STARE NA NOWE"} />
                </div>
            </div>
        </div>
    );
}

export default SpecialOffers;