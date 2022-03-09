import { gql } from '@apollo/client'

export const getProjects = gql`
  query {
    projects {
      id
      title
      image {
        url
      }
      techs
      source
    }
  }
`
