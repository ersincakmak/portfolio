import { useQuery } from '@apollo/client'
import React from 'react'
import NavBar from '../components/navbar'
import Profile from '../components/profile'
import { getProfile } from '../graphql/queries/getProfile'

const Home = () => {
  const { data, loading, called } = useQuery(getProfile)

  if (loading) {
    return 'Loading...'
  }

  if (called && !data) {
    return 'There is error with fetching profile.'
  }

  return (
    <>
      <NavBar name={data.profile.name} />
      <Profile profile={data.profile} />
    </>
  )
}

export default Home
