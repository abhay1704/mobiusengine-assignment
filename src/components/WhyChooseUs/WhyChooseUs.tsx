import React from 'react';
import styles from './WhyChooseUs.module.css';
import { HeartHandshake, UserRound, Star } from 'lucide-react';

/**
 * WhyChooseUs component displays the unique selling points of the service.
 * 
 * @component
 * @returns {JSX.Element} A section showcasing three key features with icons and descriptions
 */
const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <HeartHandshake size={48} color="var(--primary-dark)"  />,
      title: "Tried, Tested, Trusted",
      description: "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back."
    },
    {
      id: 2,
      icon: <UserRound size={48} color="var(--primary-dark)" />,
      title: "Real People, Real Help",
      description: "A hands-on team that actually cares — guiding you through every twist in your career path."
    },
    {
      id: 3,
      icon: <Star size={48} color="var(--primary-dark)" />,
      title: "Beat the Line",
      description: "We search, shortlist, and apply for you, so your name shows up first — every single day."
    }
  ];

  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className="container">
        <h2 className={styles.title}>Why Choose Us?</h2>
        
        <div className={styles.featuresContainer}>
          {features.map(feature => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
