function CategoryMenu() {
    return(
        <ul className="flex pl-5 pr-5 h-15 bg-blue-100 items-center justify-center">
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Laptopy</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Komputery</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Tablety</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Telefony</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Smartwatche</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Drukarki</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Konsole</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">RTV</a></li>
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">Sieci</a></li>
        </ul>
    );
}

export default CategoryMenu;