import { ReactNode, useState } from 'react';
import { Spinner } from 'components';
import styles from './style.module.scss';

type ButtonProps = {
  isLoading?: boolean;
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ isLoading, children, onClick }: ButtonProps) {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button
      type="submit"
      className={styles.Button}
      onClick={onButtonClick}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : null}
      {children}
    </button>
  );
}

Button.defaultProps = {
  isLoading: false,
};
