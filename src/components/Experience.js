import styles from "../styles/Experience.module.css";
import data from "@/data/data";
export default function Experience() {

  return (
    <section id="experience" className={styles.experience}>
      <div className={`${styles.container} container mx-auto`}>
        <h2>Experience</h2>
        <div className={styles.timeline}>
          {data.workExperience.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.timelineDate}>{exp.period}</span>
                <h3>{exp.title}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className="large-text text-justify">{exp.description_large}</p>
                <p className="small-text text-justify">{exp.description_short}</p>
                <p className="xs-text text-justify">{exp.description_xs}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}