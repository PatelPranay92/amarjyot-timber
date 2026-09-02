'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function ProductsPage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        <Products />
      </main>
      <Footer />
    </>
  );
}
