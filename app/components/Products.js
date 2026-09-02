'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Products.module.css';

const products = [
  {
    name: '2-Way Pallet',
    desc: 'Cost-effective pallets designed to be lifted by a forklift from two sides.',
    image: '/images/2way-pallet-1-thumb.jpg',
    specs: { size: 'Custom', material: 'Pine / Jungle Wood', load: '1000kg - 1500kg' }
  },
  {
    name: '4-Way Pallet',
    desc: 'Versatile pallets allowing forklift entry from all four sides for easier handling.',
    image: '/images/4way-pallet-1-thumb.jpg',
    specs: { size: 'Custom', material: 'Pine / Jungle Wood', load: '1500kg - 2500kg' }
  },
  {
    name: 'CP2 Pallet',
    desc: 'Chemical industry standard CP2 pallet (800 x 1200 mm) for safe transportation.',
    image: '/images/cp2-pallet-1-thumb.jpg',
    specs: { size: '800 x 1200 mm', material: 'Standard Wood', load: '1000kg' }
  },
  {
    name: 'CP4 Pallet',
    desc: 'Heavy-duty CP4 chemical pallet (1140 x 1140 mm) for bagged goods and bulk materials.',
    image: '/images/cp4-pallet-1-thumb.jpg',
    specs: { size: '1140 x 1140 mm', material: 'Standard Wood', load: '1500kg' }
  },
  {
    name: 'CP5 Pallet',
    desc: 'Standard CP5 pallet (760 x 1140 mm) often used for sea freight containers.',
    image: '/images/cp5-pallet-1-thumb.jpg',
    specs: { size: '760 x 1140 mm', material: 'Standard Wood', load: '1000kg' }
  },
  {
    name: 'CP6 Pallet',
    desc: 'CP6 pallet (1200 x 1000 mm) with perimeter base, ideal for block stacking.',
    image: '/images/cp6-pallet-1-thumb.jpg',
    specs: { size: '1200 x 1000 mm', material: 'Standard Wood', load: '1500kg' }
  },
  {
    name: 'CP7 Pallet',
    desc: 'Chemical pallet CP7 (1300 x 1100 mm) designed for large bags and rigid containers.',
    image: '/images/cp7-pallet-1-thumb.jpg',
    specs: { size: '1300 x 1100 mm', material: 'Standard Wood', load: '1500kg' }
  },
  {
    name: 'CP8 Pallet',
    desc: 'CP8 chemical pallet (1140 x 1140 mm) with a bottom hole for easy emptying of bulk bags.',
    image: '/images/cp8-pallet-1-thumb.jpg',
    specs: { size: '1140 x 1140 mm', material: 'Standard Wood', load: '1500kg' }
  },
  {
    name: 'GMA Pallet',
    desc: 'Standard GMA pallet (48" x 40") widely used in the consumer goods industry.',
    image: '/images/gma-pallet-1-thumb.jpg',
    specs: { size: '48" x 40"', material: 'Hardwood / Softwood', load: '2000kg' }
  },
  {
    name: 'Non-Reversible Pallet',
    desc: 'Standard pallets with a distinct top deck for loading and bottom deck for support.',
    image: '/images/non-reversible-pallet-1-thumb.jpg',
    specs: { size: 'Custom', material: 'Pine / Jungle Wood', load: 'Varies' }
  },
  {
    name: 'Reversible Pallet',
    desc: 'Heavy-duty pallets with identical top and bottom decks, allowing either side to bear a load.',
    image: '/images/reversible-pallet-1-thumb.jpg',
    specs: { size: 'Custom', material: 'Pine / Jungle Wood', load: '2000kg+' }
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProduct]);

  return (
    <section className={`${styles.products} section`} id="products">
      <div className="container">
        <div className={`${styles.productsHeader} reveal`}>
          <span className="eyebrow">Our Products</span>
          <h2 className="section-heading">Our Wood Products</h2>
          <p className="section-subtext">
            Quality wood materials processed with precision and care to meet
            industrial standards and customer specifications.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div
              key={index}
              className={`${styles.productCard} reveal reveal-delay-${(index % 3) + 1}`}
              onClick={() => setSelectedProduct(product)}
            >
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>
              <div className={styles.productOverlay} />
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDesc}>{product.desc}</p>
                <span className={styles.productLink}>View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedProduct(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                priority
              />
            </div>
            
            <div className={styles.modalDetails}>
              <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>
              <p className={styles.modalDesc}>{selectedProduct.desc}</p>
              
              <div className={styles.modalSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Standard Size</span>
                  <span className={styles.specValue}>{selectedProduct.specs.size}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Material Options</span>
                  <span className={styles.specValue}>{selectedProduct.specs.material}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Load Capacity</span>
                  <span className={styles.specValue}>{selectedProduct.specs.load}</span>
                </div>
              </div>
              
              <a href="/#contact" className={`btn btn-primary ${styles.modalCta}`} onClick={() => setSelectedProduct(null)}>
                Inquire About This Product →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
