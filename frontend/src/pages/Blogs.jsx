//COMPONENTS
import { useLazyQuery } from "@apollo/client";
import { GETBLOGS } from "../queries/blogQueries";
import { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";

//STYLES
import styles from "../styles/Blogs.module.scss";
import { motion } from "framer-motion";
import { opacityAnimation } from "../settings/animations";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [getBlogs, { loading, data, error, fetchMore }] =
    useLazyQuery(GETBLOGS);

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    if (data) setBlogs(data.blogs.data);
  }, [data]);

  const BlogCard = ({ imageSource, title, url }) => {
    return (
      <motion.div
        className={styles.blogContainer}
        variants={opacityAnimation}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className={styles.blogTitle}>
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
      <BigTitle>Blog</BigTitle>
      <div className={styles.blogs}>
        {loading || error ? (
          <SmallTitle>LOADING...</SmallTitle>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.attributes.Title}
              imageSource={`http://localhost:1337${blog.attributes.Preview_Image.data.attributes.url}`}
              url={`/blog/${blog.id}`}
            />
          ))
        )}
      </div>
    </PageContainer>
  );
};

export default Blogs;
