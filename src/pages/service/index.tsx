import * as S from './styles'
import * as GS from '../globalStyles';
import { Button, Loading } from '../../components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
export const Service = () => {
  const nav = useNavigate();
  const {SignOut} = useContext(AuthContext)
  const [loadingDiv,setLoadingDiv] = useState(true)
const exit =()=>{
    toast.success('🦄 Até mais!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
     SignOut();

return nav('/')
}
useEffect(()=>{
  window.scrollTo(0, 0);

  const  LoadingNow = ()=>{
    setTimeout(() => {
      setLoadingDiv(false)
    }, 2000);
    }
    LoadingNow()
        if(localStorage.getItem('auth')==='false'|| localStorage.getItem('auth')===null ){
          nav('/')
        }

},[nav])
  return (
    <>{loadingDiv ?<Loading/>:
    <S.Container>
          <Button onClick={()=>nav('/pool')} text='ÁREA DE LAZER' bg='#85edf5'/>
          <Button text='CONSULTAR REGRAS'onClick={()=>nav('/consult')} bg='#eef585'/>
          <Button text='SOLICITAÇÃO DE APOIO' onClick={()=>nav('/contact')}bg='#f5d785'/>
          <GS.Exit>
          <Button onClick={exit}text='X' bg='#f04a179b' color='#201e1d'/>
          </GS.Exit>
      </S.Container>
      }
    </>
  )
}

