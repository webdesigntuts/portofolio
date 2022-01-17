import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";
import { GETPORTOFOLIO } from "../queries/portofolioQueries";
import styles from "../styles/Portofolio.module.scss";
const Portofolio = () => {
  let params = useParams();
  const { loading, data, error } = useQuery(GETPORTOFOLIO, {
    variables: { id: params.portofolioId },
  });

  const queryHandler = () => {
    if (loading) return <BigTitle>LOADING</BigTitle>;
    if (error) return <BigTitle>ERROR</BigTitle>;
    if (data.portofolios.data.length) {
      const portofolio = data.portofolios.data[0];
      return (
        <div className={styles.container}>
          <BigTitle>{portofolio.attributes.Title}</BigTitle>
          <div className={styles.imageContainer}>
            <img
              src={`http://localhost:1337${portofolio.attributes.Preview_Image.data.attributes.url}`}
              alt=""
            />
          </div>
          <p>{portofolio.attributes.Content}</p>
        </div>
      );
    } else return <SmallTitle>Portofolio NOT FOUND</SmallTitle>;
  };

  return <PageContainer>{queryHandler()}</PageContainer>;
};

export default Portofolio;
