import React from 'react';
import { animated } from 'react-spring';
import styles from './Card.module.css';
import sparkLogo from '../../assets/spark-logo.svg';


interface CardProps {
  clientName: string;
  projectName: string;
  campaignID: string;
  dueDate: string;
  style: object;
  key: string;
};

const Card = ({ clientName, projectName, campaignID, dueDate, style, key }: CardProps) => (
  <animated.div style={style} key={key}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="http://via.placeholder.com/30x30" alt="Project" />

        <div className={styles.titles}>
          <h2>{ clientName }</h2>
          <h3>{ projectName }</h3>
        </div>

        <div>
          <img src={sparkLogo} alt="The Telegraph Spark" />
          <span className={styles.monoUpper}>Developer status card</span>
        </div>
      </div>

      <div className={styles.taskType}>
        Development Build
      </div>

      <div className={styles.twoColumn}>
        <div className={styles.developer}>
          <img src="http://via.placeholder.com/100x100" alt="img" />
          <div>
            <h4>Richard Young</h4>
            <ul>
              <li>Campaign ID: {campaignID}</li>
              <li>Test link: https://www.google.com</li>
            </ul>
          </div>
        </div>

        <div className={styles.taskDetails}>
          <h4>Task due date:</h4>
          <h3>{dueDate.split(' ').map(x => <span>{x}</span>)}</h3>
        </div>
      </div>

      <div className={styles.twoColumn}>
        <div className={styles.peopleWrapper}>
          <div className={styles.person}>
            <span className={styles.personTitle}>Project Manager</span>
            <img src="http://via.placeholder.com/50x50" alt="Tom Warner" />
            <span className={styles.personName}>Tom Warner</span>
          </div>

          <div className={styles.person}>
            <span className={styles.personTitle}>Project Manager</span>
            <img src="http://via.placeholder.com/50x50" alt="Tom Warner" />
            <span className={styles.personName}>Tom Warner</span>
          </div>

          <div className={styles.person}>
            <span className={styles.personTitle}>Project Manager</span>
            <img src="http://via.placeholder.com/50x50" alt="Tom Warner" />
            <span className={styles.personName}>Tom Warner</span>
          </div>

          <div className={styles.person}>
            <span className={styles.personTitle}>Project Manager</span>
            <img src="http://via.placeholder.com/50x50" alt="Tom Warner" />
            <span className={styles.personName}>Tom Warner</span>
          </div>
        </div>

        <div className={styles.status}>
          <div>
            <div>Status:</div>
            <span className={styles.statusGreen} />
            Going smoothly
          </div>
        </div>
      </div>
    </div>
  </animated.div>
);

export default Card;
