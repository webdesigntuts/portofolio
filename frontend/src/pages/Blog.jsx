import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { BigTitle } from "../components/Titles";
import { GETBLOG } from "../queries/blogQueries";
import { SmallTitle } from "../components/Titles";
import styles from "../styles/Blog.module.scss";

const Blog = () => {
  let params = useParams();
  const { loading, data, error } = useQuery(GETBLOG, {
    variables: { id: params.blogId },
  });

  const queryHandler = () => {
    if (loading) return <BigTitle>LOADING</BigTitle>;
    if (error) return <BigTitle>ERROR</BigTitle>;
    if (data.blogs.data.length) {
      const blog = data.blogs.data[0];
      return (
        <div className={styles.container}>
          <BigTitle>{blog.attributes.Title}</BigTitle>
          <div className={styles.imageContainer}>
            <img
              src={`http://localhost:1337${blog.attributes.Preview_Image.data.attributes.url}`}
              alt=""
            />
          </div>
          <p>{blog.attributes.Content}</p>
        </div>
      );
    } else return <SmallTitle>Blog NOT FOUND</SmallTitle>;
  };

  return <PageContainer>{queryHandler()}</PageContainer>;
};

export default Blog;
