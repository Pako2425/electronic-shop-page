import SearchInput from "./SearchInput";
import CategoryInputSelect from "./CategoryInputSelect";
import SearchButton from "./SearchButton";

function SearchBar() {
    return(
        <div className='search-bar flex border border-white rounded-xl overflow-hidden mx-50 h-10'>
            <SearchInput />
            <CategoryInputSelect />
            <SearchButton />
        </div>
    );
}

export default SearchBar;