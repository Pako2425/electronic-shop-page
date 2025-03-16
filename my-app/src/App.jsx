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
      <header className='flex h-10 justify-between'>
        <ShopLogo />
        <div className='search-bar flex border border-white rounded-xl overflow-hidden'>
          <SearchInput />
          <CategoryInputSelect />
          <SearchButton />
        </div>
        <UserMenu />
      </header>
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
