import React from 'react';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  isChecked: boolean;
  label?: string;
}


const ToggleButton: React.FC<ToggleButtonProps> = ({onClick, isChecked, label}: ToggleButtonProps) => (
  <div className={styles.wrapper}>
    <button
      className={`${styles.ToggleButton} ${isChecked ? styles.checked : ''}`}
      onClick={onClick}
      title={label}
    >
      <div className={styles.knobs} />
      <div className={styles.layer} />
    </button>
  </div>
);

export default ToggleButton;
