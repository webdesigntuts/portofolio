//STYLES
import styles from "../styles/Resume.module.scss";
import { motion } from "framer-motion";

//COMPONENTS
import Path from "../components/Path";
import Bar from "../components/Bar";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";

const Resume = () => {
  const container = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <PageContainer>
      <BigTitle>Resume</BigTitle>
      <div className={styles.resume}>
        {/* PATH */}
        <div className={styles.path}>
          <div className={styles.education}>
            <SmallTitle>Education</SmallTitle>
            <Path extraPadding="2rem" descriptionTitle="Frontend Development" />
            <Path descriptionTitle="Graphic Design" />
          </div>
          <div className={styles.experience}>
            <SmallTitle>Experience</SmallTitle>
            <Path extraPadding="2rem" />
            <Path extraPadding="2rem" />
            <Path />
          </div>
        </div>

        {/* SKILLS */}
        <div className={styles.skills}>
          <div className={styles.designSkills}>
            <SmallTitle>Design Skills</SmallTitle>
            <motion.div
              className={styles.bars}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <Bar title="Web Design" percentage={95} />
              <Bar title="Print Design" percentage={85} />
              <Bar title="Logo Design" percentage={95} />
              <Bar title="Graphic Design" percentage={90} />
            </motion.div>
          </div>

          <div className={styles.programmingSkills}>
            <SmallTitle>Coding Skills</SmallTitle>

            <motion.div
              className={styles.bars}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <Bar title="Javascript" percentage={99} />
              <Bar title="PHP" percentage={90} />
              <Bar title="HTML/CSS" percentage={95} />
              <Bar title="Smarty/Twig" percentage={75} />
              <Bar title="Perl" percentage={95} />
            </motion.div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Resume;
