import styles from './IconInfo.module.css';

interface IconInfoProps {
  src: string;
  alt: string;
  text: string;
}

function IconInfo({ src, alt, text }: IconInfoProps) {
  return (
    <div className={styles.div2}>
      <div className={styles.icon}>
        <img className={styles.vector} alt={alt} src={src} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default IconInfo;
