import styles from "../styles/Bar.module.scss";
import { motion } from "framer-motion";

const Bar = ({ title, percentage }) => {
  const barContainer = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    hidden: {
      opacity: 0.5,
    },
  };

  const bar = {
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: { width: "0%" },
  };
  return (
    <motion.div className={styles.barContainer} variants={barContainer}>
      {/* bar title */}
      <div className={styles.barTitle}>
        <h4>{`${title}`}</h4>
        <h5>{`${percentage}%`}</h5>
      </div>

      <div className={styles.bar}>
        <motion.div
          className={styles.barPercentage}
          variants={bar}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Bar;
