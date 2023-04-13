import { ReactNode, useState } from 'react';
import { Spinner } from 'components';
import styles from './style.module.scss';

type ButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
  onClick: () => void;
};

export default function Button({
  disabled,
  isLoading,
  children,
  onClick,
}: ButtonProps) {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button
      type="submit"
      className={styles.Button}
      onClick={onButtonClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner /> : null}
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
};
