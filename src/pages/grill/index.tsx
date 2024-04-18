import { Button, HeaderService,ModalAgree } from '../../components'
import grill from '../../img/grill.png'
import { useNavigate } from 'react-router-dom'
import { useState,useContext } from 'react'
import Calendar from 'react-calendar'
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../Fetch/apiClient'
import { MonthList } from './functions/MonthList'
import * as S from './styles'
import * as GS from '../globalStyles'
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

type RegisterUserType={
info:string ;
}
interface RegUserProps{
  data: RegisterUserType
}


export const Grill = () => {
  const [scheduler, setScheduler] = useState(false)
  const [consult, setConsult] = useState(false)
  const [modalOkay, setModalOkay] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [users,setUsers] = useState<UsersProps[]>()
  const [register,setRegister] =useState<RegisterProps[]>()
  const [registerUser, setRegisterUser] = useState<RegUserProps>()
  const[info,setInfo] = useState('')
  const nav = useNavigate()  
  const{Register} = useContext(AuthContext)
  
  const date = new Date()

   const  handleSave = async()=>{
    const data = {
      date:info,id:`${localStorage.getItem('id')}`
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

  const handleClickSchedule =async()=>{
    setScheduler(true);
    setConsult(false);
          try{
            const  id_user = localStorage.getItem("id");
            const {data} = await api.post(`register/user/?id_user=${id_user}`,null,{
              headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              }
            })
            setRegisterUser(data)
            

          }catch(error){
            console.log("error schedule ", error)
       }}

    const handleClickConsult = async ()=>{
      setConsult(true);
      setScheduler(false);
            try{

              const {data} = await api.get('register/all',{
            headers:{
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }    
          })
          setRegister(data)
        }catch(error){
          console.log('meu erro está aqui: ',error)
          }

       try{
         const  dataUSer = await api.get('list',{
            headers:{
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
          }
          ) 
          return setUsers(dataUSer.data);
        }catch(error){
      console.log("entrou neste erro1", error)
        }
    }

    const handleClickCalendar = (e:any)=>{
          setModalOkay(true)
          setInfo(e.toLocaleDateString())
            }
    
    const handleClickDelete  = (id_register:string) =>{
      localStorage.setItem("idRegister",id_register)
      setModalDelete(true)
        }

    const handleKill = async() =>{
      try{
       await api.delete(`/register/remove/?id_=${localStorage.getItem("idRegister")}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
       })
    }catch(erro){
      console.log(erro)
    }finally{
      setModalDelete(false)
      nav('/service')
      toast.success('Dia desmarcado',{autoClose:1500})
    }

    }
/*Information structure*/
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
     {register?.map((item,i:number)=>{
    const userFilter =  users?.find((u) => u.id === item.user_id);
    return <div key={i}>
             <div className='spaceBetween'>
                <span>{userFilter?.house || "..."}</span>
                
                {
                    `${localStorage.getItem('role')}`==='2'? 
                      <span className='spanTrash'><div className='trash'onClick={()=>handleClickDelete(item.id)}>DESMARCAR</div></span> : 
                   <>
                    {userFilter?.id ===`${localStorage.getItem('id')}`&& 
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
      {/*Modal structure*/ }
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
        <HeaderService image={grill} text='grill-icon'children='RESERVAR ESPAÇO'/>
        <div
        style={{
          marginBottom:'1.5rem'
        }}>
        <Button text=' ↻ ATUALIZAR' bg='#69e059' color="#222422" onClick={()=>{return nav('/service')}}/> 
        </div>
    <S.Container>
        <Button text='AGENDAR' onClick={handleClickSchedule} bg='#f5f4b3' color="#1b1d0d"/>
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
    <GS.Exit>    
        <Button onClick={()=> nav('/service')} text='<' bg='#eeedac9b' color='#0000009b'></Button>
    </GS.Exit>
    </>
  )
}

