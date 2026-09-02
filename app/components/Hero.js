import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <Image
          src="/images/hero.jpg"
          alt="Pine Wood Pallets"
          fill
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>
            Precision &bull; Quality &bull; Craftsmanship
          </span>
          <h1 className={styles.heroHeading}>
            Processing Wood.<br />Building Quality.
          </h1>
          <p className={styles.heroSubtext}>
            We transform quality wood into carefully processed materials through
            precision, modern technology, and experienced craftsmanship.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className="btn btn-wood">
              Request a Quote →
            </a>
            <a href="#processing" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
              Explore Our Process
            </a>
          </div>
        </div>
      </div>

      <div className={styles.heroDecor}>
        <div className={styles.heroLine} />
        <span className={styles.heroScroll}>Scroll</span>
      </div>
    </section>
  );
}
