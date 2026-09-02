import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Quality materials. Reliable service. Professional results. Amarjyot Timber has been our go-to supplier for years.',
    name: 'Valued Client',
    role: 'Construction Industry',
  },
  {
    text: 'Their consistency in quality and timely delivery makes them an excellent partner for our manufacturing needs.',
    name: 'Valued Client',
    role: 'Furniture Manufacturing',
  },
  {
    text: 'Professional wood processing with attention to detail. Their team understands industrial requirements perfectly.',
    name: 'Valued Client',
    role: 'Industrial Applications',
  },
];

export default function Testimonials() {
  return (
    <section className={`${styles.testimonials} section`} id="testimonials">
      <div className="container">
        <div className={`${styles.testimonialsHeader} reveal`}>
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} reveal reveal-delay-${index + 1}`}
            >
              <div className={styles.testimonialQuote}>&ldquo;</div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialName}>{testimonial.name}</div>
                <div className={styles.testimonialRole}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
