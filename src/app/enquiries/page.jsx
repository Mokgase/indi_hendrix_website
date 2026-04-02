'use client';
import NavBar from '../Components/NavBar';
import Enquiries from '../Enquiries/Enquiries';
import Footer from '../Footer/Footer';

export default function EnquiriesPage() {
  return (
    <div className='w-full bg-gradient-white'>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>
        <Enquiries />
      </div>
      <Footer />
    </div>
  );
}
