import styles from '../styles/Awards.module.css';
import data from '@/data/data';

export default function Awards() {

  return (
    <section id="awards" className={styles.awards}>
      <div className={`${styles.container} container mx-auto`}>
        <h2>Awards & Recognition</h2>
        <div className={styles.awardsGrid}>
          {data.awards.map((award, index) => (
            <div key={index} className={`${styles.card} ${styles.awardCard}`}>
              <div className={styles.awardIcon}>{award.icon}</div>
              <h3>{award.title}</h3>
              <p className={styles.awardEvent}>{award.organization}</p>
              <p>{award.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
