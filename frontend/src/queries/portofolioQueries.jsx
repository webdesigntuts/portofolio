import { gql } from "@apollo/client";

const GETPORTOFOLIOS = gql`
  query {
    portofolios {
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

const GETPORTOFOLIO = gql`
  query GET_POROTOFOLIO($id: ID) {
    portofolios(filters: { id: { eq: $id } }) {
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

export { GETPORTOFOLIOS, GETPORTOFOLIO };
