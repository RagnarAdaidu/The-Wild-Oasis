/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { styled } from "styled-components"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ProtectedRoute({ children }) {

  const navigate = useNavigate()

  // load the authenticated user
  const {isAuthenticated, isLoading} = useUser()
  
  //3 if there is no authenticated user redirect to login
  useEffect(function(){
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [isAuthenticated, isLoading, navigate])
  
  // 2 while loading display a spinner
  if (isLoading) return <FullPage> <Spinner /></FullPage>
  

  if(isAuthenticated) return children
}
