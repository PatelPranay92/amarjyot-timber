import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Source',
    desc: 'Carefully selected raw wood and timber from reliable sources.',
  },
  {
    number: '02',
    title: 'Prepare',
    desc: 'Initial preparation, inspection, and grading of materials.',
  },
  {
    number: '03',
    title: 'Process',
    desc: 'Cutting, sizing, drying, treatment, or other required processes.',
  },
  {
    number: '04',
    title: 'Quality Check',
    desc: 'Thorough inspection and quality control at every stage.',
  },
  {
    number: '05',
    title: 'Deliver',
    desc: 'Professionally prepared materials ready for the customer.',
  },
];

export default function Process() {
  return (
    <section className={`${styles.process} section`} id="process">
      <div className="container">
        <div className={`${styles.processHeader} reveal`}>
          <span className="eyebrow">Our Process</span>
          <h2 className="section-heading">From Timber to Finished Material</h2>
          <p className="section-subtext">
            A systematic approach ensuring quality at every stage of wood processing.
          </p>
        </div>

        <div className={`${styles.timeline} reveal`}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineStep}>
              <div className={styles.timelineDot}>
                <span>{step.number}</span>
              </div>
              <div className={styles.timelineText}>
                <h3 className={styles.timelineTitle}>{step.title}</h3>
                <p className={styles.timelineDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
