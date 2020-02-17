import React from 'react';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  currentState: boolean;
  label?: string;
}


const ToggleButton: React.FC<ToggleButtonProps> = ({onClick, currentState, label}: ToggleButtonProps) => (
  <div className={styles.wrapper}>
    <button
      className={`${styles.ToggleButton} ${currentState ? styles.checked : ''}`}
      onClick={onClick}
      title={label}
    >
      <div className={styles.knobs} />
      <div className={styles.layer} />
    </button>
  </div>
);

export default ToggleButton;
