import styles from "../styles/PageContainer.module.scss";
import { motion } from "framer-motion";
import { opacityAnimation } from "../settings/animations";

const PageContainer = ({ children }) => {
  return (
    <motion.div
      className={styles.container}
      variants={opacityAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
};

export default PageContainer;
