//import { destroyCookie, setCookie} from 'nookies';
import { createContext,ReactNode,useState } from 'react';
import { api } from '../Fetch/apiClient';
import { toast } from 'react-toastify';


type AuthContextData = {
user:UserProps;
SigIn: (credentials:SignInProps) => Promise<void>;
SignOut: ()=>void;
Register:({id,date}:RegisterProps) => void
}
type UserProps  = {
  id:string;
  name: string;
  email: string;
  house:string;
  role:string;
} 


type SignInProps = {
  email:string;
  password:string;
}
type AuthProviderProps = {
  children: ReactNode
}
type RegisterProps = {
    id?:string
    date?:string
}
  
type InfoProps={
  info?: string
}
export const AuthContext = createContext({} as AuthContextData)

export function SignOut(){
  
localStorage.clear();
}


export function AuthProvider( {children}:AuthProviderProps){

const [user,setUser] = useState({} as UserProps)

async function Register({id,date}:RegisterProps){
      const allRegister = await api.get("register/all")

      if (!allRegister){
      return;
      }
      const filter = allRegister.data.filter(({info}:InfoProps)=> info ===date) 

      try{
        (filter.length===0)?(
                  await api.post('register',{id,info:date})
                  .then(()=>toast.success("Registrado com sucesso!",{autoClose: 1000}))
                  ):(toast.warning(`Já existe registro `,{autoClose: 1000}))
          return ;
      }catch(error){
      console.log("Erro gerado: ",error)
      }
    }

async function SigIn({email,password}:SignInProps){
  if(email==='' || password ===''){
    return
  }
  let response;
      try{ 
       response = await api.post('login',{email,password})

        const {token} = response.data;
        localStorage.setItem('token',token)
        localStorage.setItem('id',response.data.id) 
        localStorage.setItem('house',response.data.house) 
        localStorage.setItem('role',response.data.role) 
        localStorage.setItem('name',response.data.name)
      
        setUser({
              id:`${localStorage.getItem('id')}`,
              email:response.data.email,
              name:`${localStorage.getItem('name')}`,
              house:`${localStorage.getItem('house')}`,
              role:`${Number(localStorage.getItem('role'))}`,
        })

        api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          localStorage.setItem("auth","true")
      }catch(err){
        toast.warning("Errou sua credencial",{autoClose: 1000})
        console.log("Erro ao acessar ",err)
        }
        
}

return<AuthContext.Provider value={{user,SigIn,SignOut,Register}}>
          {children} 
      </AuthContext.Provider>

}