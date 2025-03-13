import './App.css';
import ShopLogo from './components/ShopLogo';
import SearchInput from './components/SearchInput';
import CategorySelect from './components/CategorySelect';
import SearchButton from './components/SearchButton';
import UserMenu from './components/UserMenu';
import CategoryMenu from './components/CategoryMenu';

function App() {
  
  return (
    <>
      <ShopLogo />
      <SearchInput />
      <CategorySelect />
      <SearchButton />
      <UserMenu />
      <CategoryMenu />
    </>
  );
}

export default App;
