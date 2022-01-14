import styles from "../styles/Titles.module.scss";

const BigTitle = ({ children }) => {
  const firstWord = children.split(" ")[0];
  const restOfStr = children.split(" ").slice(1).join(" ");
  return (
    <div className={styles.bigTitle}>
      <h2>
        {firstWord}
        <span>{restOfStr}</span>
      </h2>
    </div>
  );
};

const SmallTitle = ({ children }) => {
  const firstWord = children.split(" ")[0];
  const restOfStr = children.split(" ").slice(1).join(" ");
  return (
    <div className={styles.smallTitle}>
      <h3>
        {firstWord}
        <span>{restOfStr}</span>
      </h3>
    </div>
  );
};

export { BigTitle, SmallTitle };
