//STYLESS
import styles from "../styles/Portofolios.module.scss";

//COMPONENTS
import { BigTitle, SmallTitle } from "../components/Titles";
import PageContainer from "../components/PageContainer";
import { GETPORTOFOLIOS } from "../queries/portofolioQueries";
import { useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { opacityAnimation } from "../settings/animations";
import { Link } from "react-router-dom";

const Portofolios = () => {
  const [portofolios, setPortofolios] = useState([]);
  const [getPortofolios, { loading, data, error, fetchMore }] =
    useLazyQuery(GETPORTOFOLIOS);

  useEffect(() => {
    getPortofolios();
  }, []);

  useEffect(() => {
    if (data) setPortofolios(data.portofolios.data);
  }, [data]);

  const PortofolioCard = ({ imageSource, title, url }) => {
    return (
      <motion.div
        className={styles.portofolioContainer}
        variants={opacityAnimation}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className={styles.portofolioTitle}>
          <SmallTitle>{title}</SmallTitle>
        </div>
        <div className={styles.imageContainer}>
          <Link to={url}>
            <img src={imageSource} alt="image" />
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <PageContainer>
      <BigTitle>Portofolio</BigTitle>
      <div className={styles.portofolios}>
        {loading || error ? (
          <SmallTitle>LOADING...</SmallTitle>
        ) : (
          portofolios.map((portofolio) => (
            <PortofolioCard
              key={portofolio.id}
              title={portofolio.attributes.Title}
              imageSource={`http://localhost:1337${portofolio.attributes.Preview_Image.data.attributes.url}`}
              url={`/portofolio/${portofolio.id}`}
            />
          ))
        )}
      </div>
    </PageContainer>
  );
};

export default Portofolios;
