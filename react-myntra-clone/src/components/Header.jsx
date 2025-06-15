import { IoMdPerson } from 'react-icons/io';
import { FaGrinHearts } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const bagItems = useSelector((store) => store.bag);

  console.log('bag contains:', bagItems);
  return (
    <header>
      <div className='logo_container'>
        <Link href='/'>
          <img className='myntra_logo' src='images/myntra_logo.webp' alt='' />
        </Link>
      </div>
      <nav className='nav_bar'>
        <a href='#'>MEN</a>
        <a href='#'>WOMEN</a>
        <a href='#'>KIDS</a>
        <a href='#'>HOME</a>
        <a href='#'>BEAUTY</a>
        <a href='#'>GENZ</a>
        <a href='#'>
          STUDIO <sup>NEW</sup>
        </a>
      </nav>
      <div className='search_bar'>
        <span className='search_icon'>
          <IoIosSearch />
        </span>
        <input
          className='search_input'
          placeholder='Search for products, brands and more'
        />
      </div>
      <div className='action_bar'>
        <div className='action_container'>
          <IoMdPerson />
          <span>Profile</span>
        </div>
        <div className='action_container'>
          <FaGrinHearts />
          <span>Wishlist</span>
        </div>
        <Link to='/bag' className='action_container'>
          <FaShoppingBag />
          <span>Bag</span>
          <span className='bag_item_count'>{bagItems.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
