import React from 'react';
import styles from './LandingPage.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import PricingPlans from '../../components/PricingPlans/PricingPlans';
import ResumeServices from '../../components/ResumeServices/ResumeServices';
import Contact from '../../components/ContactCTA/ContactCTA';
import Footer from '../../components/Footer/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <Hero />
      <HowWeWork />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
