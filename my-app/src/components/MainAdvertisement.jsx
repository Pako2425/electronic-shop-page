function MainAdvertisement() {
    return(
        <div className="reklama-sklepowa flex justify-center items-center h-80">
            <div className="flex h-full p-3 justify-center items-center hover:bg-gray-100">
                <img src="./public/arrow-left.png" />
            </div>
            <div className="flex h-full">
                <img src="./public/main-adv-1.png" alt="reklama" className="h-full object-contain"/>
            </div>
            <div className="flex h-full p-3 justify-center items-center hover:bg-gray-100">
                <img src="./public/arrow-right.png" />
            </div>
        </div>
    );
}

export default MainAdvertisement;