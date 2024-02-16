import * as S from './styles'
interface ButtonProps{
  text?: string
  onClick?:()=>void
  color?:string
  bg?:string
}
export const Button = ({text,onClick,color,bg}:ButtonProps)=>{
 return  <S.ButtonItem children={text} onClick={onClick} 
  style={{color:`${color}`, backgroundColor:`${bg}`}}/>
}