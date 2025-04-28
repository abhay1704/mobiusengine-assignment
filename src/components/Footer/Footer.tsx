import React from 'react';
import styles from './Footer.module.css';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../../assets/images/logo.svg';

/**
 * Footer component displays company information, contact details, and legal links.
 * 
 * @component
 * @returns {JSX.Element} A footer section with company logo, address, contact information, 
 * social media links, and copyright/legal notices
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top Part - Transparent with primary color text */}
            {/* Logo & Description Column */}
            <div className={styles.columnLogo}>
              <img src={logo} alt="MobiusEngine Logo" width={160} height={30} className={styles.logo} />
              <p className={styles.tagline}>
                Accelerating your career success through intelligent job applications
              </p>
            </div>
        <div className={styles.footerTop}>
          <div className={styles.gridContainer}>
            
            {/* Contact Info Column */}
            <div className={styles.columnContact}>
              <div className={styles.contactGroup}>
                <h3 className={styles.contactTitle}>Address</h3>
                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} size={18} />
                  <p>1875 Mission St Ste 103 #420<br />San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className={styles.contactGroup}>
                <h3 className={styles.contactTitle}>Email</h3>
                <a href="mailto:finance@mobiusengine.ai" className={styles.contactLink}>
                  <Mail className={styles.contactIcon} size={18} />
                  <span>finance@mobiusengine.ai</span>
                </a>
              </div>
              
              <div className={styles.contactGroup}>
                <h3 className={styles.contactTitle}>Telephone</h3>
                <a href="tel:650-889-6026" className={styles.contactLink}>
                  <Phone className={styles.contactIcon} size={18} />
                  <span>650-889-6026</span>
                </a>
              </div>
            </div>
            
            {/* Social Links Column */}
            <div className={styles.columnSocial}>
              <h3 className={styles.contactTitle}>Socials</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Part - Primary background with white text */}
        <div className={styles.footerBottomContainer}>
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {currentYear} Mobiuservices LLC. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
            </div>
          </div>
                </div>
        </div>
    </footer>
  );
};

export default Footer;
