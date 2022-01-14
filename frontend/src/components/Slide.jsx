import styles from "../styles/Slide.module.scss";
import { IoMdQuote } from "react-icons/io";
const Slide = ({ info }) => {
  return (
    <div className={styles.sliderContent}>
      <div className={styles.person}>
        <img src={info.imageSource} alt="person" />
      </div>
      <p>{info.quote}</p>
      <div className={styles.quote}>
        <div className={styles.name}>
          <h4>{info.name}</h4>
          <h4>{info.company}</h4>
        </div>
        <div className={styles.iconContainer}>
          <IoMdQuote className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

Slide.defaultProps = {
  info: {
    imageSource: "",
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
           assumenda, sequi cum eum autem eaque nihil error debitis rerum
           non!`,
    name: `Robert Watkins`,
    company: `Endicott Shoes`,
  },
};

export default Slide;
