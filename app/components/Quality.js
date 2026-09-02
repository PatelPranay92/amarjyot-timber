import Image from 'next/image';
import styles from './Quality.module.css';

const qualityPoints = [
  'Raw material inspection',
  'Precision processing',
  'Dimensional consistency',
  'Moisture control',
  'Surface quality',
  'Final inspection',
];

export default function Quality() {
  return (
    <section className={`${styles.quality} section`} id="quality">
      <div className="container">
        <div className={styles.qualityGrid}>
          <div className={`${styles.qualityContent} reveal`}>
            <span className={`eyebrow ${styles.qualityEyebrow}`}>Quality Assurance</span>
            <h2 className={`section-heading ${styles.qualityHeading}`}>
              Quality Is Built Into Every Stage
            </h2>
            <p className={styles.qualityDesc}>
              Our commitment to quality isn&apos;t just a promise — it&apos;s embedded in
              every process, from raw material selection to final delivery. Each
              piece of wood undergoes rigorous inspection and processing to meet
              the highest standards.
            </p>

            <div className={styles.qualityPoints}>
              {qualityPoints.map((point, index) => (
                <div key={index} className={styles.qualityPoint}>
                  <div className={styles.qualityPointDot} />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.qualityImage} reveal reveal-delay-2`}>
            <Image
              src="/images/quality-updated.jpg"
              alt="Close-up of premium wood grain texture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
