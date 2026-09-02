import styles from './QuoteCTA.module.css';

export default function QuoteCTA() {
  return (
    <section className={`${styles.quoteCta} section`}>
      <div className="container">
        <div className={`${styles.quoteInner} reveal`}>
          <h2 className={`section-heading ${styles.quoteHeading}`}>
            Looking for the Right Wood Processing Solution?
          </h2>
          <p className={styles.quoteDesc}>
            Tell us what you need. Our team will help you find the right
            processing or material solution for your requirements.
          </p>
          <div className={styles.quoteCtas}>
            <a href="#contact" className="btn btn-wood">
              Request a Quote →
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
