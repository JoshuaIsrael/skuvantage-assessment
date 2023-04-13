import { ReactNode } from 'react';
import styles from './style.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button className={styles.Button} type="submit" onClick={onButtonClick}>
      {children}
    </button>
  );
}
