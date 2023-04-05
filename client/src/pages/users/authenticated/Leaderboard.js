import React from 'react'
import Text from '../../../components/Text'
import {useGetLeaderboard} from '../../../hooks/api/users/useGetLeaderboard'
import Loading from '../../../components/Loading'
import Border from '../../../components/Border'
import Tag from '../../../components/Tag'
import Container from '../../../components/containers/Container'
import { Link } from 'react-router-dom'


const Leaderboard = (props) => {
  let usersLeaderboard;
  let customTextStyles = {
    marginBottom: "1em",
  }
  let customDivStyles = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "1.5em",
      marginBottom: "1em",
  }
  let customLinkStyles = {
      width: "60%",
      margin: "auto",
  }

  const {isLoading, isError, error, data } = useGetLeaderboard() 
  
  if(isLoading){
    return <Loading />
  }
  if(!isLoading){
    usersLeaderboard = data.data.leaderboard
  }
  return (
        <>
            <Text position="center" style={customTextStyles} type="title" size="medium">المتصدرين</Text>
            <div style={customDivStyles}>
              {
                usersLeaderboard?.map(user => (
                  <Link style={customLinkStyles} to={`/users/${user._id}`}>
                    <Container>
                      <Text style={customTextStyles} type="title" size="small">{user.personalInformation.name}</Text>
                      <Text style={customTextStyles} type="description" size="small">{user.score}</Text>
                    </Container>
                  </Link>
                ))
              }
            </div>
            {/* <Border />Maybe Show Here All Users Down */}

        </>
  )
}

export default Leaderboard