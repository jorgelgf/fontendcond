import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import * as S from './styles'

import pool from '../../img/piscina.png'
import noise from '../../img/barulho.png'
export const Consult = () => {
  const nav = useNavigate();
  return (<>
    <div>AGENDA DE REGRAS</div>
    <S.Container>
      <img src={pool} alt="pool"/>
      <img src={noise} alt="noise" />
    </S.Container>
    <S.Back>
    <Button onClick={()=> nav('/service')} text='<' bg='#eeedac9b' color='#0000009b'></Button>
    </S.Back>
    </>
  )
}

