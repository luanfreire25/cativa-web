import styles from "@/components/styles_components/Logo.module.css";

const Word = ({ size, color, colorShadow }) => {
  return (
    <>
      <span
        style={{
          fontSize: `${size}`,
          color: `${color}`,
          textShadow: `0px 1px 1px ${colorShadow}`,
        }}
        className={styles.logo}
      >
        cativaweb.
      </span>
    </>
  );
};

export default Word;
