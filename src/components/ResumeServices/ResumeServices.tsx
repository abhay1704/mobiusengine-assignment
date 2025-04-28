import React from 'react';
import styles from './ResumeServices.module.css';
import { Check } from 'lucide-react';

/**
 * ResumeServices component displays premium resume building and coaching services.
 * 
 * @component
 * @returns {JSX.Element} A section with two service cards for Resume Rebuild and Interview Prep,
 * each with pricing information and feature lists
 */
const ResumeServices: React.FC = () => {
  return (
    <section className={styles.resumeServices} id="resume-services">
        <div className={styles.horizontalDivider}></div>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Resume Building & Coaching</h2>
          <p className={styles.subtitle}>
            Let's talk about where you're headed — and how your resume can get you there.
            <br />Schedule a call to get started.
          </p>
        </div>
        
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceName}>Resume Rebuild</h3>
            <p className={styles.serviceDescription}>
              Crafted for senior to VP-level professionals ready for their next big step.
            </p>
            
            <div className={styles.pricing}>
              <span className={styles.amount}>$1000</span>
              <span className={styles.period}>one time</span>
            </div>
            
            <div className={styles.divider}></div>
            
            <ul className={styles.featuresList}>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>3x 30-min coaching</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Focused on storytelling, not just formatting</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Analyst + full application team on Pacific hours</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Tailored to your target industry, company, or role</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Direct work with our co-founder (ex-Google, JP Morgan)</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Executive coaching from UC Berkeley alum with 10+ yrs experience</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Resume Rebuild portfolio available upon request</span>
              </li>
            </ul>
            
            <button className={styles.ctaButton}>Get Started →</button>
          </div>
          
          
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceName}>Interview Prep</h3>
            <p className={styles.serviceDescription}>
              Two sessions to sharpen your story, confidence, and clarity — fast.
            </p>
            
            <div className={styles.pricing}>
              <span className={styles.amount}>$500</span>
              <span className={styles.period}>one time</span>
            </div>
            
            <div className={styles.divider}></div>
            
            <ul className={styles.featuresList}>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>2x 45-min live coaching with our co-founder</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Real-time, practical feedback</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>Build clarity, empathy & executive presence</span>
              </li>
              <li>
                <Check size={20} className={styles.checkIcon} />
                <span>For senior and leadership roles — technical & non-technical</span>
              </li>
            </ul>
            
            <button className={styles.ctaButton}>Get Started →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeServices;
