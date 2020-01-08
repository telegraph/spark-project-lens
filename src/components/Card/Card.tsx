import React from 'react';
import styles from './Card.module.css';


interface CardProps {
  clientName: string;
};

const Card = ({ clientName }: CardProps) => (
  <div className={styles.wrapper}>
    <div>
      <h2>{ clientName }</h2>
      <h3>Plan your perfect getaway longform</h3>
    </div>

    <div>
      Development Build
    </div>

    <div>
      <img />
      <h4>Richard Young</h4>
      <ul>
        <li>Campaign ID: asdasd</li>
        <li>Test link: https://www.google.com</li>
      </ul>
    </div>

    <div>
      <h4>Task Due date:</h4>
      <h3>12th January</h3>
    </div>
  </div>
);

export default Card;
