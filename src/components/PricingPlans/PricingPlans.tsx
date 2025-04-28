import React from 'react';
import styles from './PricingPlans.module.css';
import { Check } from 'lucide-react';

/**
 * PricingPlans component displays various pricing tiers for job application services.
 * 
 * @component
 * @returns {JSX.Element} A section with pricing cards for different service levels, including
 * a special "Advance" tier with premium features
 */
const PricingPlans: React.FC = () => {
  return (
    <section className={styles.pricingPlans} id="pricing-plans">
      <div className="container">
        <h2 className={styles.title}>Job Application Service Plans</h2>
        
        <div className={styles.plansLayout}>
          <div className={styles.standardPlansContainer}>
            {/* April Promo Plan */}
            <div className={styles.planCard}>
              <h3 className={styles.planName}>April Promo</h3>
              <div className={styles.price}>
                <span className={styles.amount}>$35</span>
                <span className={styles.period}>/week</span>
              </div>
              <div className={styles.divider}></div>
              <ul className={styles.featuresList}>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Curated jobs from 10+ listings, refreshed every 48 hours</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Need more? Add extra apps for just $15 each</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Your own dedicated application analyst</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Personalized with up to 10 filters & 5 job titles</span>
                </li>
              </ul>
              <button className={styles.ctaButton}>Get Started →</button>
            </div>
            
            {/* Starter Plan */}
            <div className={styles.planCard}>
              <div className={styles.popularTag}>Popular</div>
              <h3 className={styles.planName}>Starter</h3>
              <div className={styles.price}>
                <span className={styles.amount}>$50</span>
                <span className={styles.period}>/week</span>
              </div>
              <div className={styles.divider}></div>
              <ul className={styles.featuresList}>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>All the perks of the Promo Plan, plus:</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Resume review & story-focused feedback</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Dedicated search specialist</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Up to 50 job apps/week</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Extra apps at $15 each</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Analyst support within 6 hours (SLA/PST hours)</span>
                </li>
              </ul>
              <button className={styles.ctaButton}>Get Started →</button>
            </div>
            
            {/* Plus Plan */}
            <div className={styles.planCard}>
              <h3 className={styles.planName}>Plus</h3>
              <div className={styles.price}>
                <span className={styles.amount}>$100</span>
                <span className={styles.period}>/week</span>
              </div>
              <div className={styles.divider}></div>
              <ul className={styles.featuresList}>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Everything in Starter, with more muscle:</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Up to 75 apps/week</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Apply to 15 job titles</span>
                </li>
                <li>
                  <Check size={20} className={styles.checkIcon} />
                  <span>Analyst + full application team on Pacific hours</span>
                </li>
              </ul>
              <button className={styles.ctaButton}>Get Started →</button>
            </div>
          </div>
          
          {/* Advance Plan */}
          <div className={`${styles.planCard} ${styles.advancePlan}`}>
            <div className={styles.advanceContent}>
              <div className={styles.advanceHeaderWrapper}>
              <div className={styles.advanceHeader}>
                <h3 className={styles.planName}>Advance</h3>
                <p className={styles.planSubtitle}>Top-tier support for serious job hunters:</p>
              </div>
              <div className={styles.advancePricing}>
              <div className={styles.price}>
                <span className={styles.amount}>$150</span>
                <span className={styles.period}>/week</span>
              </div>
            </div>
            </div>
              
              <div className={styles.advanceFeatures}>
                <ul className={styles.featuresList}>
                  <li>
                    <Check size={20} className={styles.checkIcon} />
                    <span>Everything in Plus</span>
                  </li>
                  <li>
                    <Check size={20} className={styles.checkIcon} />
                    <span>Custom Resumes & Cover Letters</span>
                  </li>
                </ul>
                
                <ul className={styles.featuresList}>
                  <li>
                    <Check size={20} className={styles.checkIcon} />
                    <span>20 fully customized applications/week</span>
                  </li>
                  <li>
                    <Check size={20} className={styles.checkIcon} />
                    <span>Help with complex job searches</span>
                  </li>
                </ul>
              </div>
              
              <button className={styles.ctaButton}>Get Started →</button>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
