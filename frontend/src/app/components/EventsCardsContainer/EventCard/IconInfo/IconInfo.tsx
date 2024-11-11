import styles from './IconInfo.module.css';

interface IconInfoProps {
  src: string;
  alt: string;
  text: string | Date;
}

function IconInfo({ src, alt, text }: IconInfoProps) {
  // Check if 'text' is a valid Date
  const formattedText =
    text instanceof Date && !isNaN(text.getTime())
      ? text.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }) // Format as needed
      : String(text);

  return (
    <div className={styles.div2}>
      <div className={styles.icon}>
        <img className={styles.vector} alt={alt} src={src} />
      </div>
      <div className={styles.text}>{formattedText}</div>
    </div>
  );
}

export default IconInfo;
