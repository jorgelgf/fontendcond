//import { destroyCookie, setCookie} from 'nookies';
import { createContext,ReactNode,useState } from 'react';
import { api } from '../services/apiClient';
import { toast } from 'react-toastify';


type AuthContextData = {
user:UserProps;
isAuthenticated: boolean;
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
      try{
     // destroyCookie(undefined,'@auth.token')
      }catch(error){
       //  console.log("Erro ao deslogar ",error)
      }
}


export function AuthProvider( {children}:AuthProviderProps){
const [user,setUser] = useState({} as UserProps)
const isAuthenticated = !!user.name;

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
      try{ 
        const response = await api.post('login',{email,password})
        const {token} = response.data;
        setUser({
              id:response.data.id,
              email:response.data.email,
              name:response.data.name,
              house:response.data.house,
              role:response.data.role,
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

      }catch(err){
        toast.warning("Errou sua credencial",{autoClose: 1000})
        console.log("Erro ao acessar ",err)
        }
}

return<AuthContext.Provider value={{user, isAuthenticated,SigIn,SignOut,Register}}>
          {children} 
      </AuthContext.Provider>

}