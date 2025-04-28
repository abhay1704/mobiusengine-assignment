import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>MobiusEngine</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#more">More</a></li>
          </ul>
        </nav>
        <div className={styles.cta}>
          <a href="#signup" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
