import styles from "../styles/Home.module.scss";
import { opacityAnimation } from "../settings/animations";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      variants={opacityAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <h1>My Name</h1>
      <h3>FrontEnd-developer</h3>
    </motion.div>
  );
};

export default Home;
