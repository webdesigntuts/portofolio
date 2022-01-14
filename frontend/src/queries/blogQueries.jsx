import { gql } from "@apollo/client";

const GETBLOGS = gql`
  query {
    blogs {
      data {
        id
        attributes {
          Title
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GETBLOG = gql`
  query GET_BLOG($id: ID) {
    blogs(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          Title
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          Content
        }
      }
    }
  }
`;

export { GETBLOGS, GETBLOG };
