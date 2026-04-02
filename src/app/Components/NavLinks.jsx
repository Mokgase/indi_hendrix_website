'use client';
import React from 'react';
import Link from 'next/link';
import "../globals.css";
import { useEnquiry } from '../Context/EnquiryContext';

const NavLinks = () => {
  const { enquiries } = useEnquiry();
  const count = enquiries.length;

  const links = [
    { name: 'About Me', route: '/#about' },
    { name: 'Paintings', route: '/#paintings' },
    { name: 'Contact Me', route: '/#contact' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className='md:cursor-pointer group'>
            <Link href={link.route}>
              <h1 className="navbar-text">{link.name}</h1>
            </Link>
          </div>
        </div>
      ))}
      <div>
        <div className='md:cursor-pointer group'>
          <Link href="/enquiries" style={{ position: 'relative', display: 'inline-block' }}>
            <h1 className="navbar-text">
              Enquiries
              {count > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-18px',
                  backgroundColor: '#de841e',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '11px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}>
                  {count}
                </span>
              )}
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
