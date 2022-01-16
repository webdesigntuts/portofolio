import styles from "../styles/Home.module.scss";
import PageContainer from "../components/PageContainer";

const Home = () => {
  return (
    <PageContainer classOption={styles.home}>
      <h1>My Name</h1>
      <h3>FrontEnd-developer</h3>
    </PageContainer>
  );
};

export default Home;
