'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      product: formData.get('product'),
      quantity: formData.get('quantity'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus({ loading: false, error: null, success: true });
      e.target.reset(); // Clear the form
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      setStatus({ loading: false, error: 'Something went wrong. Please try again.', success: false });
    }
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-heading">Let&apos;s Discuss Your Requirements</h2>
        </div>

        <div className={styles.contactGrid}>
          <form className={`${styles.contactForm} reveal`} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className={styles.formInput}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-company">Company</label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  className={styles.formInput}
                  placeholder="Company name"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-phone">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  className={styles.formInput}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label className={styles.formLabel} htmlFor="contact-product">Product / Service Required</label>
                <select id="contact-product" name="product" className={styles.formSelect}>
                  <option value="">Select a product or service</option>
                  <option value="2-Way Pallet">2-Way Pallet</option>
                  <option value="4-Way Pallet">4-Way Pallet</option>
                  <option value="CP2 Pallet">CP2 Pallet</option>
                  <option value="CP4 Pallet">CP4 Pallet</option>
                  <option value="CP5 Pallet">CP5 Pallet</option>
                  <option value="CP6 Pallet">CP6 Pallet</option>
                  <option value="CP7 Pallet">CP7 Pallet</option>
                  <option value="CP8 Pallet">CP8 Pallet</option>
                  <option value="GMA Pallet">GMA Pallet</option>
                  <option value="Non-Reversible Pallet">Non-Reversible Pallet</option>
                  <option value="Reversible Pallet">Reversible Pallet</option>
                  <option value="Custom Processing">Custom Processing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label className={styles.formLabel} htmlFor="contact-quantity">Quantity / Requirement</label>
                <input
                  type="text"
                  id="contact-quantity"
                  name="quantity"
                  className={styles.formInput}
                  placeholder="Describe your quantity or requirement"
                />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label className={styles.formLabel} htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                />
              </div>
              
              {status.error && (
                <div className={styles.formGroupFull} style={{ color: 'red', fontSize: '14px', marginTop: '8px' }}>
                  {status.error}
                </div>
              )}
              
              {status.success && (
                <div className={styles.formGroupFull} style={{ color: 'green', fontSize: '14px', marginTop: '8px' }}>
                  Thank you for your inquiry! We will get back to you soon.
                </div>
              )}

              <div className={`${styles.formGroupFull} ${styles.formSubmit}`}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status.loading}>
                  {status.loading ? 'Submitting...' : 'Submit Inquiry →'}
                </button>
              </div>
            </div>
          </form>

          <div className={`${styles.contactInfo} reveal reveal-delay-2`}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>
                  <a href="tel:+919898027053">+91 9898027053</a> / <a href="tel:+919099936345">+91 9099936345</a>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>
                  <a href="mailto:amarjyottimber@gmail.com">amarjyottimber@gmail.com</a>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Address</div>
                <div className={styles.infoValue}>
                  Shree Amarjyot Timber Mart, Navsari - Bardoli Rd,<br />
                  GIDC Kabilpore, Navsari, Gujarat 396427
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Business Hours</div>
                <div className={styles.infoValue}>
                  Tuesday – Sunday: 8:00 AM – 6:00 PM<br />
                  Monday: Closed
                </div>
              </div>
            </div>

            <div className={styles.contactMap}>
              <iframe
                src="https://maps.google.com/maps?q=Shree%20Amarjyot%20Timber%20Mart,%20Navsari%20-%20Bardoli%20Rd,%20GIDC%20Kabilpore,%20Navsari,%20Gujarat%20396427&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Amarjyot Timber Mart Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
