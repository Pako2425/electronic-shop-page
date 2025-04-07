import { useState } from "react";

function MainAdvertisement() {
    const mainAdvsImgSources = ['main-adv-1.png', 'main-adv-2.png'];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImg = () => {
        if( currentIndex < (mainAdvsImgSources.length - 1) ) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const prevImg = () => {
        if( currentIndex > 0 ) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return(
        <div className="reklama-sklepowa flex justify-center items-center h-80">
            <div className="flex h-full p-3 justify-center items-center hover:bg-gray-100"
                onClick={prevImg}>
                <img src="./public/arrow-left.png" />
            </div>
            <div className="flex h-full">
                {/*<img src="./public/main-adv-1.png" alt="reklama" className="h-full object-contain"/>*/}
                <img src={mainAdvsImgSources[currentIndex]} alt="reklama" className="h-full object-contain"/>
            </div>
            <div className="flex h-full p-3 justify-center items-center hover:bg-gray-100"
                onClick={nextImg}>
                <img src="./public/arrow-right.png" />
            </div>
        </div>
    );
}

export default MainAdvertisement;