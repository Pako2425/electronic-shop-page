function CategoryMenu() {
    const categories = ['Laptopy', 'Komputery', 'Tablety', 'Telefony', 'Smartwatche', 'Drukarki', 'Konsole', 'RTV', 'Sieci'];
    
    return(
        <ul className="flex mb-5 pl-5 pr-5 h-15 items-center justify-center">
            {categories.map(category => categoryButton(category))}
        </ul>
    );

    function categoryButton(category) {
        return(
            <li className="hover:bg-white h-full flex items-center p-5"><a href="#">{category}</a></li>
        );
    }
}

export default CategoryMenu;