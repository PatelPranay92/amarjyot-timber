import Image from 'next/image';
import styles from './Facility.module.css';

const facilityImages = [
  { src: '/images/facility-machinery.jpg', label: 'Processing Machinery', alt: 'Wood processing machinery' },
  { src: '/images/facility-stacks.jpg', label: 'Timber Storage', alt: 'Timber stacks in warehouse' },
  { src: '/images/facility-drying.jpg', label: 'Drying Facility', alt: 'Wood drying kiln' },
  { src: '/images/hero.jpg', label: 'Production Line', alt: 'Factory production line' },
  { src: '/images/about.jpg', label: 'Workshop', alt: 'Wood processing workshop' },
];

export default function Facility() {
  return (
    <section className={`${styles.facility} section`} id="facility">
      <div className="container">
        <div className={`${styles.facilityHeader} reveal`}>
          <span className="eyebrow">Our Facility</span>
          <h2 className="section-heading">Our Facility &amp; Technology</h2>
          <p className="section-subtext">
            Modern equipment and organized facilities designed for efficient, 
            high-quality wood processing operations.
          </p>
        </div>

        <div className={`${styles.facilityGrid} reveal`}>
          {facilityImages.map((item, index) => (
            <div key={index} className={styles.facilityItem}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                quality={80}
              />
              <div className={styles.facilityOverlay}>
                <span className={styles.facilityLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
