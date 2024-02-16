import * as S from './styles'
interface HeaderServiceProps{
  children:string
  image: string
  text:string
}
export const HeaderService = ({children,image,text}:HeaderServiceProps) => {
  return (
  <>
     <S.DivHeaderService>
      <div>
     <img src={image} alt={text} />
     </div>
     {children}
     </S.DivHeaderService>
  </>
  )
}

