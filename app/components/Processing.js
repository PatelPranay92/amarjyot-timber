import styles from './Processing.module.css';

const capabilities = [
  {
    number: '01',
    title: 'Timber Preparation',
    desc: 'Processing and preparing raw wood for further production, ensuring optimal material quality from the start.',
  },
  {
    number: '02',
    title: 'Cutting & Sizing',
    desc: 'Precision cutting and sizing according to required specifications using modern industrial equipment.',
  },
  {
    number: '03',
    title: 'Drying',
    desc: 'Controlled drying processes designed to achieve consistent material quality and dimensional stability.',
  },
  {
    number: '04',
    title: 'Surface Processing',
    desc: 'Professional finishing and surface preparation to meet product standards and client requirements.',
  },
  {
    number: '05',
    title: 'Treatment',
    desc: 'Wood treatment solutions to enhance durability, resistance, and longevity of processed materials.',
  },
  {
    number: '06',
    title: 'Custom Processing',
    desc: 'Tailored processing according to customer specifications and unique project requirements.',
  },
];

export default function Processing() {
  return (
    <section className={`${styles.processing} section`} id="processing">
      <div className="container">
        <div className={`${styles.processingHeader} reveal`}>
          <span className="eyebrow">Our Capabilities</span>
          <h2 className="section-heading">Our Wood Processing Capabilities</h2>
          <p className="section-subtext">
            From raw timber preparation to precision processing, every stage is
            handled with care, accuracy, and quality control.
          </p>
        </div>

        <div className={styles.processingGrid}>
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`${styles.processingCard} reveal reveal-delay-${index + 1}`}
            >
              <div className={styles.cardNumber}>{cap.number}</div>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
