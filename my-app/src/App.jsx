import { useState } from 'react'
import './App.css'
import ShopLogo from './components/ShopLogo.jsx';
import SearchBar from './components/SearchBar.jsx';
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
    <div className="min-h-screen flex flex-col">
      
      <header className='flex w-full'>
        <div className='max-w-7xl mx-auto flex justify-between px-6 py-4'>
          <ShopLogo />
          <SearchBar />
          <UserMenu />
        </div>
      </header>
      
      <div className='category-menu flex w-full justify-center items-center bg-blue-100'>
        <CategoryMenu />
      </div>

      <main className="flex-1">

        <div className="max-w-7xl mx-auto px-6 py-8 border">
          <MainAdvertisement />
          <ListOfProducts />
          <PCConfiguration />
          <BestSellers />
          <SpecialOffers />
          <Accesories />
          <Newsletter />
        </div>
      </main>
      
      <footer className='flex w-full bg-amber-300'>
        <Footer />
      
      </footer>
    </div>
  );
}

export default App
