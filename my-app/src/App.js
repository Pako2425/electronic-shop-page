import './App.css';
import ShopLogo from './components/ShopLogo';
import SearchInput from './components/SearchInput';
import CategorySelect from './components/CategorySelect';
import SearchButton from './components/SearchButton';
import UserMenu from './components/UserMenu';
import CategoryMenu from './components/CategoryMenu';
import MainAdvertisement from './components/MainAdvertisement.js';
import ListOfProducts from './components/ListOfProducts.js';
import PCConfiguration from './components/PCConfiguration.js';
import SpecialOffers from './components/SpecialOffers.js';
import BestSellers from './components/Bestsellers.js';
import Accesories from './components/Accesories.js';
import Newsletter from './components/Newsletter.js';
import Footer from './components/Footer.js';

function App() {
  
  return (
    <>
      <ShopLogo />
      <SearchInput />
      <CategorySelect />
      <SearchButton />
      <UserMenu />
      <CategoryMenu />
      <MainAdvertisement />
      <ListOfProducts />
      <PCConfiguration />
      <SpecialOffers />
      <BestSellers />
      <Accesories />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
