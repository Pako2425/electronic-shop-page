import { useState } from 'react'
import './App.css'
import ShopLogo from './components/ShopLogo.jsx';
import SearchInput from './components/SearchInput.jsx';
import CategoryInputSelect from './components/CategoryInputSelect.jsx';
import SearchButton from './components/SearchButton.jsx';
import UserMenu from './components/UserMenu.jsx';
import CategoryMenu from './components/CategoryMenu.jsx';
import MainAdvertisement from './components/MainAdvertisement.jsx';
import ListOfProducts from './components/ListOfProducts.jsx';
import PCConfiguration from './components/PCConfiguration.jsx';
import SpecialOffers from './components/SpecialOffers.jsx';
import BestSellers from './components/Bestsellers.jsx';
import Accesories from './components/Accesories.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>aaa</h1>
      <ShopLogo />
      <SearchInput />
      <CategoryInputSelect />
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
  )
}

export default App
