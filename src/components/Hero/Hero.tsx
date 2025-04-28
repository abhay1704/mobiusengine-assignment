import React from 'react';
import styles from './Hero.module.css';
import jobEbook from '../../assets/images/job-ebook.png';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Land job interviews <br/><span className={styles.highlight}>10x </span> faster
          </h1>
          <p className={styles.subtitle}>
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <div className={styles.cta}>
            <a href="#signup" className="btn btn-primary">Get Started →</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={jobEbook} alt="Job Success Guide" className={styles.image} />
            <div className={styles.imageLabel}>Download FREE E-Book</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
