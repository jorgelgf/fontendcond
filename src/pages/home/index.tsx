import { Input,Button } from '../../components';
import * as S from './styles';
import userAvatar from '../../img/user.png'
import key from '../../img/key.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext,  useEffect,  useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Footer } from '../../components/footer';
export const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {SigIn,SignOut, user} = useContext(AuthContext)
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const nav = useNavigate();
        const handleClick = async()=>{

    if(email==='' || password ===''){
     toast.error("Campo(s) vazio(s)!!!",{autoClose: 1000})
 }
        try{ 
          const data = {
            email,password
          }
          await SigIn(data)

        }catch(e){
          toast.warning("Errou sua credencial",{autoClose: 1000})
            console.log('erro:', e)
            SignOut();
          }finally{
    }
  }

  //validation private router
  useEffect(()=>{
        if (localStorage.getItem("token")===null){
            localStorage.clear()
          return nav('/') 
        }
      if(user.name){
        return nav('/service')
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user.name])

  return (
    <>
      <S.Item>
        <form onSubmit={(event)=>event.preventDefault()}>
              <Input inputType='email' 
              onChange={(event)=>setEmail(event.target.value)}
              avatar={userAvatar} placeholderText='Entre com seu e-mail' imageText='userIcon'/>
             
              <Input inputType='password'
              onChange={(event)=>setPassword(event.target.value)}
              avatar={key} placeholderText='Senha' imageText='keyIcon'/>
              <Button text='ENTRAR' color='#233327' bg='#2DC74F' 
              onClick={handleClick}/>
          </form>

      </S.Item>
      <Footer/>

    </>
  )
}

