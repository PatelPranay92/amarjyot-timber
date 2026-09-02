import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/logo.png"
                alt="Shree Amarjyot Timber Mart"
                width={40}
                height={40}
                className={styles.footerLogoImg}
                style={{ width: 'auto' }}
              />
              <span className={styles.footerLogoName}>Shree Amarjyot Timber Mart</span>
            </div>
            <p className={styles.footerDesc}>
              Professional wood processing and manufacturing solutions focused on
              quality, precision, and reliability.
            </p>
          </div>

          <div>
            <h4 className={styles.footerColTitle}>Company</h4>
            <div className={styles.footerLinks}>
              <a href="/#about" className={styles.footerLink}>About Us</a>
              <a href="/#process" className={styles.footerLink}>Our Process</a>
              <a href="/#quality" className={styles.footerLink}>Quality</a>
              <a href="/#contact" className={styles.footerLink}>Contact</a>
            </div>
          </div>

          <div>
            <h4 className={styles.footerColTitle}>Products</h4>
            <div className={styles.footerLinks}>
              <a href="/products" className={styles.footerLink}>Pine Wood Pallets</a>
              <a href="/products" className={styles.footerLink}>Jungle Wood Pallets</a>
            </div>
          </div>

          <div>
            <h4 className={styles.footerColTitle}>Contact</h4>
            <div className={styles.footerContact}>
              <div className={styles.footerContactItem}>
                <a href="tel:+919898027053">+91 9898027053</a> / <a href="tel:+919099936345">+91 9099936345</a>
              </div>
              <div className={styles.footerContactItem}>
                <a href="mailto:amarjyottimber@gmail.com">amarjyottimber@gmail.com</a>
              </div>
              <div className={styles.footerContactItem}>
                Shree Amarjyot Timber Mart, Navsari - Bardoli Rd,<br />
                GIDC Kabilpore, Navsari, Gujarat 396427
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopy}>
            © 2026 Shree Amarjyot Timber Mart. All Rights Reserved.
          </div>
          <a href="/#home" className={styles.footerBackToTop}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
