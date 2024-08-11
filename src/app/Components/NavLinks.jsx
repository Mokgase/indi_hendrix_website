import React from 'react';
import Link from 'next/link'
import "../globals.css";

const NavLinks = () => {

  const Catalogue = [
    {name:'Paintings'},
    {name:'Prints'},
    {name:'Merch'},
  ]

  const links = [
    // { name: 'Home' , route:'/'},
    // { name: 'Catalogue',route:'#catalogue'},
    { name: 'About Me' ,route:'#aboutMe'},
    { name: 'News',route:'#news' },
    { name: 'Catalogue',route:'#', submenu: true, sublinks: Catalogue },
    { name: 'Contact Me',route:'#contact'},
  ];

  return (
    <>
      {
        links.map((link, index) => (
          <div key={index}>
            <div 
              className='md:cursor-pointer group'
            >
              <Link href={link.route}>
                <h1 className="navbar-text">{link.name}</h1>
              </Link>
              {
                link.submenu && (
                  <div 
                    className='w-[70%] md:w-auto absolute top-10 md:top-20 hidden group-hover:block hover:block'
                  >   
                    <div 
                      className='w-full p-1 grid grid-rows gap-1'
                    >
                      {
                        link.sublinks.map((mysublinks, subIndex) => (
                          <div key={subIndex} className='p-1'>
                            <h1 className='navbar-text-options'>{mysublinks.name}</h1>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        ))
      }
    </>
  );
}

export default NavLinks;
