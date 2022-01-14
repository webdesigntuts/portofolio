import styles from "../styles/Path.module.scss";
const Path = ({ title, descriptionTitle, description, extraPadding }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.divider}></div>
      <div
        className={styles.description}
        style={{ paddingBottom: extraPadding }}
      >
        <h2 className={styles.descriptionTitle}>{descriptionTitle}</h2>
        <p className={styles.content}>{description}</p>
      </div>
    </div>
  );
};

Path.defaultProps = {
  title: "2008 Univercity of Lorem",
  descriptionTitle: "Frontend Development",
  description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Aut doloribus distinctio dolorum! Tempore voluptatibus, 
  minima impedit nulla placeat hic eligendi?`,
  extraPadding: "0rem",
};

export default Path;
