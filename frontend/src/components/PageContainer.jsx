import styles from "../styles/PageContainer.module.scss";
import { motion } from "framer-motion";
import { opacityAnimation } from "../settings/animations";

const PageContainer = ({ children, classOption }) => {
  return (
    <motion.div
      className={styles.container}
      variants={opacityAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div className={`styles.content ${classOption}`}>{children}</div>
    </motion.div>
  );
};

PageContainer.defaultProps = {
  classOption: undefined,
};

export default PageContainer;
