import React from 'react';
import { animated } from 'react-spring';
import styles from './Card.module.css';


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
      <div>
        <h2>{clientName}</h2>
        <h3>{projectName}</h3>
      </div>
      <div>
        Development Build
    </div>

      <div>
        <img />
        <h4>Richard Young</h4>
        <ul>
          <li>Campaign ID: {campaignID}</li>
          <li>Test link: https://www.google.com</li>
        </ul>
      </div>

      <div>
        <h4>Task Due date:</h4>
        <h3>{dueDate}</h3>
      </div>
    </div>
  </animated.div>
);

export default Card;
