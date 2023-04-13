import styles from './style.module.scss';

type ButtonProps = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }: ButtonProps) {
  return <img className={styles.Image} src={src} alt={alt} />;
}
