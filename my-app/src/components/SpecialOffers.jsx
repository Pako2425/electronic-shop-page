import SpecialOfferCard from "./SpecialOfferCard";

function SpecialOffers() {
    return(
        <div className="promocje flex flex-col justify-center items-center border">
            <div>Promocje</div>
            <p>Sprawdź co dla ciebie mamy</p>
            <div className="flex gap-4">
                <SpecialOfferCard img_src={"./public/special-offers/promocja1.png"} title={"#CYBER PONIEDZIAŁEK"} />
                <SpecialOfferCard img_src={"./public/special-offers/promocja2.png"} title={"2+1"} />
                <SpecialOfferCard img_src={"./public/special-offers/promocja3.png"} title={"CASHBACK"} />
                <SpecialOfferCard img_src={"./public/special-offers/promocja4.png"} title={"WYMIEŃ STARE NA NOWE"} />
            </div>
        </div>
    );
}

export default SpecialOffers;