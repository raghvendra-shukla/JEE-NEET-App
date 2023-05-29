import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    useEffect(()=>{
        navigate('/')
    },[])
  ) 
}