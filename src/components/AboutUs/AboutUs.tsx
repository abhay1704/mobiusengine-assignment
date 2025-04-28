import React from 'react';
import nicoleImage from '../../assets/images/nicole.png';
import ashwinImage from '../../assets/images/ashwin.png';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ashwin',
      image: ashwinImage,
      bio: 'is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.',
      vision: 'Ashwin\'s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.',
      linkedinUrl: 'https://www.linkedin.com/in/ashwin/'
    },
    {
      id: 2,
      name: 'Nicole',
      image: nicoleImage,
      bio: 'is an Executive coach at Mobius specializing in resume builds and career advisory.',
      vision: 'With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.',
      linkedinUrl: 'https://www.linkedin.com/in/nicole/'
    }
  ];

  return (
    <section className={styles.aboutUs} id="about">
      <div className="container">
        <h2 className={styles.title}>About Us</h2>
        
        <div className={styles.content}>
          {teamMembers.map(member => (
            <div className={styles.personContainer} key={member.id}>
              <div className={styles.imageContainer}>
                <img 
                  src={member.image} 
                  alt={`${member.name} profile`} 
                  className={styles.profileImage}
                />
                <a 
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinIcon}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              
              <div className={styles.bioContent}>
                <p className={styles.personBio}>
                  <span className={styles.personName}>{member.name}</span> {member.bio}
                </p>
                <p className={styles.personVision}>{member.vision}</p>
              </div>
            </div>
          ))}
          
          <div className={styles.linksContainer}>
            <a href="/board" className={styles.linkText}>
              Learn more about our Board of Advisors 
              <span className={styles.arrowIcon}>↗</span>
            </a>
            
            <a href="https://www.linkedin.com/company/mobiusengine/" target="_blank" rel="noopener noreferrer" className={styles.linkText}>
              Follow us on our LinkedIn page
              <span className={styles.arrowIcon}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
