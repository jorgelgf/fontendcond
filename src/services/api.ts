

import axios, {AxiosError} from 'axios';
//import { parseCookies } from 'nookies';
import { AuthTokenError } from './erros/AuthTokenError';
import { SignOut } from '../context/AuthContext';
export function setupApiClient(ctx = undefined){

  //let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL:"https://backendcond.vercel.app/",
    headers:{
    //  Authorization:` Bearer ${cookies['@auth.token']}`
    }
  })

  api.interceptors.response.use(response =>{
    return response
  }, (error:AxiosError)=>{
        if(error.response?.status===401){
          // eslint-disable-next-line valid-typeof
          if (typeof window !== undefined){
            SignOut()
          }else{
            return Promise.reject(new AuthTokenError())
          }
        }
        return Promise.reject(error)
        })
        
return api;
}