import *  as S from './styles'
import { Button } from '../button'
interface PropsModalAgree{
  onClickYes?:()=>void;
  onClickNo?:()=>void;
  text?:string;
}
export const ModalAgree = ({onClickYes,onClickNo,text}:PropsModalAgree) => {
  return (
    <S.Container >
        {text}
        <div className='dv'>
          <Button color='#20221f' bg='#89ff1a'text='SIM'onClick={onClickYes}/>
          <Button color='#131010'bg='#ff5555'text='NÃO'onClick={onClickNo}/>
        </div>
    </S.Container>
  )
}

