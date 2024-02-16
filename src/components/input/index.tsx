import { InputHTMLAttributes, useState } from 'react' ;
import * as S from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  avatar?: string
  imageText?:string
  placeholderText?:string
  inputType?:string
}
export const Input = ({avatar,imageText,placeholderText,inputType,...props}:InputProps) => {
  const [validator, setValidator ] = useState(false)

  return (
    <S.Container>
        {!validator &&<S.DivAvatar><img src={avatar} alt={imageText}/></S.DivAvatar>}
        <S.InputComponent {...props} type={inputType} placeholder={placeholderText} 
        onClick={()=>setValidator(false)}/>
     </S.Container>
  )
}
