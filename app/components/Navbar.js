'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Wood Processing', href: '/#processing' },
  { label: 'Products', href: '/products' },
  { label: 'Quality', href: '/#quality' },

  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
        <div className={styles.navContainer}>
          <a href="/#home" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Shree Amarjyot Timber Mart"
              width={80}
              height={80}
              className={styles.logoImage}
              style={{ width: 'auto' }}
              priority
            />
            <div className={styles.logoText}>
              <span className={styles.logoName}>Shree Amarjyot Timber Mart</span>
              <span className={styles.logoDescriptor}>Wood Processing &amp; Manufacturing</span>
            </div>
          </a>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <a href="/#contact" className={styles.navCta}>
              Request a Quote
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <button
          className={`${styles.mobileClose}`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
        <a href="/#contact" className={styles.mobileCta} onClick={handleLinkClick}>
          Request a Quote
        </a>
      </div>
    </>
  );
}
