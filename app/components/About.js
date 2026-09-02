import Image from 'next/image';
import styles from './About.module.css';

const features = [
  'Modern processing technology',
  'Skilled & experienced team',
  'Consistent quality output',
  'Reliable supply chain',
];

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutImage} reveal`}>
            <Image
              src="/images/about.jpg"
              alt="Wood processing facility with workers and machinery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className={styles.aboutImageAccent} />
          </div>

          <div className={`${styles.aboutContent} reveal reveal-delay-2`}>
            <span className="eyebrow">About Our Company</span>
            <h2 className="section-heading">
              Experience in Every Grain. Precision in Every Process.
            </h2>
            <p className={styles.aboutDescription}>
              Shree Amarjyot Timber Mart is a professional wood-processing company
              focused on delivering consistent quality through modern processing
              techniques, skilled workmanship, and attention to detail.
            </p>
            <p className={styles.aboutDescription}>
              With decades of experience in the timber industry, we provide
              comprehensive wood processing solutions tailored to meet the diverse
              needs of manufacturers, builders, and contractors.
            </p>

            <div className={styles.aboutFeatures}>
              {features.map((feature, index) => (
                <div key={index} className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <a href="#processing" className={styles.aboutLink}>
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
