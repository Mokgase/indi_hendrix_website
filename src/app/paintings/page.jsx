'use client';
import NavBar from '../Components/NavBar';
import Paintings from '../Catalogue/Paintings';
import Footer from '../Footer/Footer';

export default function PaintingsPage() {
  return (
    <div className='w-full bg-gradient-white'>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>
        <Paintings />
      </div>
      <Footer />
    </div>
  );
}
