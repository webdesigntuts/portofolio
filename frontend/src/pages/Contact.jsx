//COMPONENTS
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";

//STYLES
import styles from "../styles/Contact.module.scss";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineEventAvailable } from "react-icons/md";

const Contact = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const cardContainer = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.2,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <PageContainer>
      <BigTitle>Contact</BigTitle>

      {/* CONTACT CONTENT */}
      <div className={styles.contactContent}>
        <motion.div
          className={styles.contactInfo}
          variants={cardContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div className={styles.card} variants={card}>
            <IoLocationOutline />
            <span>Thessaloniki</span>
          </motion.div>
          <motion.div className={styles.card} variants={card}>
            <BsTelephone />
            <span>123-456-7890</span>
          </motion.div>
          <motion.div className={styles.card} variants={card}>
            <AiOutlineMail />
            <span>me@example.com</span>
          </motion.div>
          <motion.div className={styles.card} variants={card}>
            <MdOutlineEventAvailable />
            <span>Availability</span>
          </motion.div>
        </motion.div>

        {/* FORM */}
        <form className={styles.contactForm}>
          <SmallTitle>Form :</SmallTitle>
          {/* INPUT NAME*/}
          <div className={styles.formName}>
            <label
              htmlFor="name"
              className={nameInput ? styles.labelSm : undefined}
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={nameInput}
              onInput={(e) => setNameInput(e.target.value)}
            ></input>
          </div>

          {/* INPUT EMAIL*/}
          <div className={styles.formEmail}>
            <label
              htmlFor="email"
              className={emailInput ? styles.labelSm : undefined}
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={emailInput}
              onInput={(e) => setEmailInput(e.target.value)}
            ></input>
          </div>

          {/* INPUT SUBJECT*/}
          <div className={styles.formSubject}>
            <label
              htmlFor="subject"
              className={subjectInput ? styles.labelSm : undefined}
            >
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              value={subjectInput}
              onInput={(e) => setSubjectInput(e.target.value)}
            ></input>
          </div>

          {/* INPUT MESSAGE*/}
          <div className={styles.formMessage}>
            <label
              htmlFor="message"
              className={messageInput ? styles.labelSm : undefined}
            >
              Message:
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={messageInput}
              onInput={(e) => setMessageInput(e.target.value)}
            ></textarea>
          </div>

          {/* SUBMIT */}
          <div className={styles.submit}>
            <input type="submit" value="Send Message"></input>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Contact;
