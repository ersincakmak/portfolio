import { gql } from '@apollo/client'

export const getProfile = gql`
query {
  profile(where: { id: "${process.env.REACT_APP_PROFILE_ID}" }) {
    name
    job
    coverLetter
    linkedin
    github
    mail
  }
}
`
