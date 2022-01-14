//COMPONENTS
import Slider from "react-slick";
import Slide from "../components/Slide";
import {
  People,
  Logos,
  TestimonialsSliderSettings,
  ClientSliderSetting,
} from "../settings/sliderConfig";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";

//STYLES
import { BsShop, BsPencil, BsLaptop, BsFlag } from "react-icons/bs";
import { BsHeart, BsClock, BsStar } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <PageContainer>
      {/* SECTION1 */}
      <section className={styles.section1}>
        <BigTitle>About Me</BigTitle>

        <div className={styles.info}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            rerum dignissimos fuga obcaecati placeat hic aliquid qui veniam
            perspiciatis possimus doloribus, nemo reiciendis? Atque ipsa
            cupiditate eos impedit quo quis?
          </p>

          <div className={styles.moreInfo}>
            <ul>
              <li>
                <span>Age</span>
                <span>22</span>
              </li>

              <li>
                <span>Residence</span>
                <span>Greece</span>
              </li>

              <li>
                <span>Address</span>
                <span>88 Some Street, Some Town</span>
              </li>

              <li>
                <span>E-mail</span>
                <span>mymail@mymail.com</span>
              </li>

              <li>
                <span>Phone</span>
                <span>+0123 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION2 */}
      <section className={styles.section2}>
        <SmallTitle>What I Do</SmallTitle>

        <div className={styles.moreInfoContainer}>
          <div className={styles.moreInfoContainerLeft}>
            <div className={styles.info}>
              <BsShop className={styles.icon} />
              <h4>Ecommerce</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci rem aliquam commodi expedita optio perferendis totam,
                magnam sit quasi ad?
              </p>
            </div>

            <div className={styles.info}>
              <BsLaptop className={styles.icon} />
              <h4>Web Design</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                quam sunt vel deserunt ex fugit maxime accusantium neque
                molestiae perferendis.
              </p>
            </div>
          </div>

          <div className={styles.moreInfoContainerRight}>
            <div className={styles.info}>
              <BsPencil className={styles.icon} />
              <h4>Copywriting</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci rem aliquam commodi expedita optio perferendis totam,
                magnam sit quasi ad?
              </p>
            </div>

            <div className={styles.info}>
              <BsFlag className={styles.icon} />
              <h4>Management</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                quam sunt vel deserunt ex fugit maxime accusantium neque
                molestiae perferendis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION3 */}
      <section className={styles.section3}>
        <SmallTitle>Testimonials</SmallTitle>
        <Slider {...TestimonialsSliderSettings}>
          {People.map((person, index) => (
            <div key={index}>
              <Slide
                info={{
                  imageSource: person,
                  quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                  assumenda, sequi cum eum autem eaque nihil error`,
                  name: `Robert Watkins`,
                  company: `Endicott Shoes`,
                }}
              />
            </div>
          ))}
        </Slider>
      </section>

      <section className={styles.section4}>
        <SmallTitle>Clients</SmallTitle>
        <Slider {...ClientSliderSetting}>
          {Logos.map((brand, index) => {
            return (
              <div key={index}>
                <div className={styles.brandContainer}>
                  <img src={brand} alt={`brand`} />
                </div>
              </div>
            );
          })}
        </Slider>
      </section>

      <section className={styles.section5}>
        <SmallTitle>Fun Facts</SmallTitle>

        <div className={styles.factsContainer}>
          <div className={styles.factContainer}>
            <BsHeart className={styles.icon} />
            <h2>Happy Clients</h2>
            <h3>578</h3>
          </div>

          <div className={styles.factContainer}>
            <BsClock className={styles.icon} />
            <h2>Working Hours</h2>
            <h3>4780</h3>
          </div>

          <div className={styles.factContainer}>
            <BsStar className={styles.icon} />
            <h2>Awards Won</h2>
            <h3>15</h3>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
