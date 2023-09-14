import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/nunito/500.css';
import MenuList from '../components/MenuList';
import Search from '../components/Search';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="z-50 md:p-4 fixed inset-x-0 bg-white shadow-md ">
        <div className="md:flex md:items-center md:justify-between absolute md:static md:z-auto  bg-white w-full">
          {/* Logo */}
          <div className="md:flex md:p-0 p-5 md:items-center md:ml-16 my-0 ">
            <FontAwesomeIcon icon={faUtensils} style={{ color: '#1dc967' }} size="xl" />
            <span className="text-brown-500 font-semibold text-xl ml-auto">MaQaan</span>
          </div>

          <div onClick={() => setOpen(!open)}>
            <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>

            {/* Navigation */}
            <div className={`md:flex md:space-x-4 md:static bg-white absolute z-[-1] right-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
              <MenuList href="#home">Home</MenuList>
              <MenuList href="#about">About</MenuList>
              <MenuList href="#menu">Menu</MenuList>
              <MenuList href="#review">Review</MenuList>
              <MenuList href="#order">Order</MenuList>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
