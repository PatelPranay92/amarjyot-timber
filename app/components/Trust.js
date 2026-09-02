import styles from './Trust.module.css';

const categories = [
  'Manufacturing',
  'Construction',
  'Furniture',
  'Interior',
  'Packaging',
  'Industrial',
];

export default function Trust() {
  return (
    <section className={`${styles.trust} reveal`} id="trust">
      <div className="container">
        <div className={styles.trustInner}>
          <div className={styles.trustHeading}>Trusted by Professionals</div>
          <div className={styles.trustCategories}>
            {categories.map((cat, index) => (
              <span key={index} className={styles.trustCategory}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
