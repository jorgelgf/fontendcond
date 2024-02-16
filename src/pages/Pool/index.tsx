import { Button, HeaderService,ModalAgree } from '../../components'
import pool from '../../img/pool.png'
import { useNavigate } from 'react-router-dom'
import { useState,useContext, useEffect } from 'react'
import Calendar from 'react-calendar'
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../services/apiClient'
import { MonthList } from './functions/MonthList'
import * as S from './styles'

interface UsersProps{
    email:string,
    name:string,
    role:string,
    id:string,
    house:string
}
interface RegisterProps{
    id:string,
    info:string
    user_id:string
}
interface userListProps{
  data:UsersProps[] | undefined
}

type RegisterUserType={
info:string ;
}
interface RegUserProps{
  data: RegisterUserType
}


export const Pool = () => {
  const [scheduler, setScheduler] = useState(false)
  const [consult, setConsult] = useState(false)
  const [modalOkay, setModalOkay] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [users,setUsers] = useState<UsersProps[]>()
  const [register,setRegister] =useState<RegisterProps[]>()
  const [registerUser, setRegisterUser] = useState<RegUserProps>()
  const[info,setInfo] = useState('')
  const nav = useNavigate()  

  const{user,Register} = useContext(AuthContext)
  const date = new Date()
  

  useEffect(()=>{
    if (user.name===undefined){
      toast.warning('Favor entrar novamente!')
      return nav('/')
     }

    const allUsers =async () => {
      const data:userListProps = await api.get('list') 
      return setUsers(data.data);
    }
    const allRegisters = async () =>{
      const {data} = await api.get('register/all')
      return setRegister(data)
    }
    const allRegisterUser = async () =>{
    const  id_user = '8bb4c227-8601-4830-b497-dee2bb10b2b5'
    const {data} = await api.post(`/register/user/?id_user=${id_user}`)
    setRegisterUser(data)
    }

    allUsers();
    allRegisters();
    allRegisterUser();
    },[nav, user.name])


  const  handleSave = async()=>{
    const data = {
      date:info,id:user.id
    }

    try {
      //firstly, logic for the month of December
      if (date.getMonth()+2===13) {1 === (+info.substring(3,5)) && Register(data)}

      else{

      //year logic
      if((+(`${date.getUTCFullYear()}`.substring(2,5))<= +info.substring(8,12)) && 
      //logic for next month
      (((date.getMonth()+1 - +info.substring(3,5)===-1))))
      { return Register(data)}
      
      //restriction for use of a distant month or day before the current date
      if ((date.getMonth()+1 - +info.substring(3,5)< (-1))|| 
      (date.getMonth()+1 - +info.substring(3,5)===0 && date.getDate()>+info.substring(0,2))){ 
        return toast.warning(`Registre em um mês/dia mais próximo!`,{autoClose:1500})
      }

      //logic for same month
      (+(`${date.getUTCFullYear()}`.substring(2,5))<= +info.substring(8,12)) &&
      (((date.getMonth()+1 - +info.substring(3,5)===0))) && 
      (date.getDate()<= +info.substring(0,2) ) && ( Register(data))
    }
  
  } catch (e) {
        toast.warning(`Erro gerado: ${e}`,{autoClose:1500})
    }
  }
  const handleClickSchedule =()=>{
    setScheduler(true);
    setConsult(false);
    
  }

    const handleClickConsult = ()=>{
      setConsult(true);
      setScheduler(false);
    }

    const handleClickCalendar = (e:any)=>{
          setModalOkay(true)
          const data = new Date(e)
          setInfo(data.toLocaleDateString())
            }
    
    const handleClickDelete  = (id:string) =>{
      localStorage.setItem('id',id)
      setModalDelete(true)
        }

    const handleKill = async() =>{
      const id = localStorage.getItem('id')
      try{
       await api.delete(`/register/remove/?id=${id}`)
    }catch(erro){
      console.log(erro)
    }finally{
      setModalDelete(false)
      localStorage.clear()
      nav('/service')
      toast.success('Dia desmarcado',{autoClose:1500})
    }

    }
  const showRegisters = () =>{
    return <>{
      register &&
      <S.DivConsult>
            <S.HeaderMonth>
                <MonthList month={date.getMonth()}/>
            </S.HeaderMonth>

  <div className='MonthDay'>
     <div className='spaceBetween '>
      <div className='headerList'>
        <span className='house'>CASA</span>
        <span className='day'>DIA</span>
      </div>
  </div>
     {register.map((item,i:number)=>{
    const userFilter =  users?.find((u) => u.id === item.user_id);
    return <div key={i}>
             <div className='spaceBetween'>
                <span>{userFilter?.house || "Casa não identificada"}</span>
                
                {
                    user.role==='2'? 
                      <span className='spanTrash'><div className='trash'onClick={()=>handleClickDelete(item.id)}>DESMARCAR</div></span> : 
                   <>
                    {userFilter?.id ===user.id && 
                     <span className='spanTrash'>
                    <div className='trash' 
                    onClick={()=>handleClickDelete(item.id)}>DESMARCAR</div></span>}
                    </>
                    }
                     <span className='infoSpan'>
                  {(//current and next month filter
                        (+item.info.substring(3,5) ===date.getMonth()+1 )||
                        (+item.info.substring(3,5) ===date.getMonth()+2 ))&&
                        item.info
                  }
                      </span>
                   
              </div>
         </div>
     }
     
     )}</div>

   </S.DivConsult>}
   </>
  }
         return (
      <>
      {modalOkay && 
       <S.DivOpacity onClick={()=>setModalOkay(false)}>
          <ModalAgree 
          text='QUER AGENDAR?'
          onClickNo={()=> toast.warning("Não agendado!",{autoClose: 1000})} 
          onClickYes={handleSave}/>
       </S.DivOpacity>}
       {modalDelete && 
       <S.DivOpacity onClick={()=>setModalOkay(false)}>
          <ModalAgree 
          text='QUER APAGAR A DATA?'
          onClickNo={()=> {
            setModalDelete(false)
            toast.warning("Não deletado!",{autoClose: 1000})}} 
          onClickYes={handleKill}/>
       </S.DivOpacity>}
        <HeaderService image={pool} text='pool-icon'children='ÁREA DE LAZER'/>
    
    <S.Container>
        <Button text='AGENDAR' onClick={handleClickSchedule} bg='#9cf3a0' color="#222422"/>
        <Button text='CONSULTAR' onClick={handleClickConsult}bg='#9cf3f3' color="#1f2020"/>
    </S.Container>
    

    {/*scheduling structure*/}
    {scheduler && <S.DivCalendar> 
      <Calendar onChange={handleClickCalendar}/>
            <div className='listRegisterUser'>
                <span>SEUS DIAS AGENDADOS</span>
                      <div className='itemRegisterUSer'>
                        {registerUser && 
                        Object.values(registerUser)
                        .map(({info},e:number)=>
                        <div key={e}>
                          {info}
                        </div>)
                        }
                      </div>
            </div>
      </S.DivCalendar>}
    {consult   &&  showRegisters() }
    <S.Back>    
        <Button onClick={()=> nav('/service')} text='<' bg='#eeedac9b' color='#0000009b'></Button>
    </S.Back>
    </>
  )
}

