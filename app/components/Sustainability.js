import Image from 'next/image';
import styles from './Sustainability.module.css';

const practices = [
  {
    title: 'Responsible Sourcing',
    desc: 'Timber sourced from managed and responsible supply chains.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Efficient Utilization',
    desc: 'Maximum material yield from every log through precision processing.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Waste Reduction',
    desc: 'Minimizing waste at every production stage through efficient processes.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Practices',
    desc: 'Long-term commitment to responsible manufacturing and resource management.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Sustainability() {
  return (
    <section className={`${styles.sustainability} section`} id="sustainability">
      <div className="container">
        <div className={styles.sustainGrid}>
          <div className={`${styles.sustainContent} reveal`}>
            <span className="eyebrow">Sustainability</span>
            <h2 className="section-heading">Responsible Wood Processing</h2>
            <p className={styles.sustainDesc}>
              We believe responsible manufacturing begins with careful resource
              management, efficient processes, and a long-term commitment to
              quality.
            </p>

            <div className={styles.sustainPractices}>
              {practices.map((practice, index) => (
                <div key={index} className={styles.sustainPractice}>
                  <div className={styles.sustainIcon}>{practice.icon}</div>
                  <div>
                    <div className={styles.sustainPracticeTitle}>{practice.title}</div>
                    <div className={styles.sustainPracticeDesc}>{practice.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.sustainImage} reveal reveal-delay-2`}>
            <Image
              src="/images/sustainability.jpg"
              alt="Sustainably managed forest with sunlight"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
