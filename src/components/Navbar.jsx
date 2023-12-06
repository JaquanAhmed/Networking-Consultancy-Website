import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "expertise",
      title: "Expertise",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className = {`sm:px-16 px-6 w-full flex items-center py-0 fixed top-0 z-20`}>
      <div className = 'w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/" 
          className = 'flex items-center gap-2' 
          onclick = {() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img 
              src = {logo} 
              alt = 'logo' 
              className = 'w-[80px] h-[80px] object-contain'
              onClick= { 'window.scrollTo(0, 0)' }/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key = {link.id}
              className = {`${
                active === link.title
                  ? 'text-[#f5e5b1]'
                  : 'text-[#b1c1f5]' 
                } hover:text-[#f5e5b1] text-[18px] font-medium cursor-pointer`}
                onClick = {() => setActive(link.title)}
              >
                <a href = {`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* navigation bar for small devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src = {toggle ? close : menu}
            alt = 'menu'
            className = 'w-[28px] h-[28px] object-contain cursor-pointer'
            onClick = {() => setToggle(!toggle)} 
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4'>
            {navLinks.map((link) => (
              <li 
                key = {link.id}
                className = {`${
                  active === link.title
                    ? 'text-[#f5e5b1]'
                    : 'text-[#b1c1f5]' 
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick = {() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href = {`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar