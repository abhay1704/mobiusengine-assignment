import React from 'react';
import styles from './ContactCTA.module.css';
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className={styles.contactCTA}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.prompt}>STILL HAVE DOUBTS?</div>
          <h2 className={styles.title}>Contact us</h2>
          <button className={styles.ctaButton} aria-label="Contact us">
            <ArrowRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
