function SpecialOfferCard({img_src, title}) {
    return(
        <div className="flex max-w-3xs aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
            <img className="w-1/2 h-full object-cover" src={img_src} alt="promocja"/>
            <div className="flex h-full w-full justify-center items-center p-4">
                <p className="text-center">{title}</p>
            </div>
        </div>
    );
}

export default SpecialOfferCard;