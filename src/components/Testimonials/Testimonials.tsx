import React from 'react';
import styles from './Testimonials.module.css';
import { ArrowUpRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Holly',
      title: 'senior executive',
      description: 'who got over 10 job interviews and an offer she accepted',
      videoUrl: '#'
    },
    {
      id: 2,
      name: 'Holly',
      title: 'senior executive',
      description: 'who got over 10 job interviews and an offer she accepted',
      videoUrl: '#'
    },
    {
      id: 3,
      name: 'Holly',
      title: 'senior executive',
      description: 'who got over 10 job interviews and an offer she accepted',
      videoUrl: '#'
    }
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <h2 className={styles.title}>What our clients have to say</h2>
        
        <div className={styles.cardsContainer}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.videoPreview}>
                <button className={styles.playButton} aria-label="Play video">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18V6L21 12L9 18Z" fill="#0055FF"/>
                  </svg>
                </button>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.testimonialText}>
                  {testimonial.name} is a <span className={styles.highlight}>{testimonial.title}</span> {testimonial.description}
                </p>
                
                <button className={styles.arrowButton} aria-label="View more">
                <ArrowUpRight className={styles.btnArrow}/>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.actionsContainer}>
          <a href="/testimonials" className={styles.moreLink}>
            More customer testimonials
            <span className={styles.arrowIcon}>↗</span>
          </a>
          
          <a href="#get-started" className={styles.getStartedBtn}>
            Get Started
            <span className={styles.arrowIcon}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
