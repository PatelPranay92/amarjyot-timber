import styles from './WhyChooseUs.module.css';

const advantages = [
  {
    number: '01',
    title: 'Consistent Quality',
    desc: 'Careful processing and quality control at every stage ensures reliable, predictable results.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Precision',
    desc: 'Accurate processing according to required specifications using modern technology and equipment.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Reliable Supply',
    desc: 'Professional production and dependable business operations you can count on every time.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Experienced Team',
    desc: 'Deep knowledge and expertise across all wood processing operations built over decades.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className={`${styles.whyUs} section`} id="why-us">
      <div className="container">
        <div className={`${styles.whyUsHeader} reveal`}>
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-heading">
            Why Choose Shree Amarjyot Timber Mart?
          </h2>
        </div>

        <div className={styles.whyUsGrid}>
          {advantages.map((adv, index) => (
            <div
              key={index}
              className={`${styles.whyUsCard} reveal reveal-delay-${index + 1}`}
            >
              <div className={styles.whyUsIcon}>{adv.icon}</div>
              <div className={styles.whyUsNumber}>{adv.number}</div>
              <h3 className={styles.whyUsTitle}>{adv.title}</h3>
              <p className={styles.whyUsDesc}>{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
