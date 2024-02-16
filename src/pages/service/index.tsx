import * as S from './styles'
import { Button, Loading } from '../../components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
export const Service = () => {
  const nav = useNavigate();
  const {SignOut,user,isAuthenticated} = useContext(AuthContext)
  const [loadingDiv,setLoadingDiv] = useState(true)

const exit = ()=>{
  toast.success('🦄 Até mais!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    SignOut()
    nav('/');  
}
useEffect(()=>{
  window.scrollTo(0, 0);

  if (isAuthenticated===false){
    if (user.name===undefined){
      toast.warning('Favor entrar novamente!', {autoClose: 1000})
      return nav('/')
     }
    return nav('/')
   }
  const  LoadingNow = ()=>{
    setTimeout(() => {
      setLoadingDiv(false)
    }, 2000);
    }
    LoadingNow()

  
},[user, nav, isAuthenticated])



  return (
    <>{loadingDiv ?<Loading/>:<S.Container>
      <Button onClick={()=>nav('/pool')} text='ÁREA DE LAZER' bg='#85edf5'/>
      <Button text='CONSULTAR REGRAS'onClick={()=>nav('/consult')} bg='#eef585'/>
      <Button text='SOLICITAÇÃO DE APOIO' bg='#f5d785'/>
      <S.Exit>
      <Button onClick={exit}text='X' bg='#f04a179b' color='#201e1d'/>
      </S.Exit>
      </S.Container>
      }
    </>
  )
}

