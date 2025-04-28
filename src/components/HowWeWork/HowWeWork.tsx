import React from 'react';
import styles from './HowWeWork.module.css';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Intake Form",
      description: ""
    },
    {
      id: 2,
      title: "We do the search and curation for list of jobs",
      description: ""
    },
    {
      id: 3,
      title: "You approve, we do the tedious part (applying)",
      description: ""
    },
    {
      id: 4,
      title: "You get the interviews",
      description: ""
    }
  ];

  return (
    <section className={styles.howWeWork} id="how-we-work">
      <div className="container">
        <h2 className={styles.title}>How we work?</h2>
        
        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div className={styles.step} key={step.id}>
              <div className={styles.stepNumber}>
                <span>{step.id}</span>
              </div>
              <div className={styles.stepLine}></div>
              <p className={styles.stepTitle}>{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
