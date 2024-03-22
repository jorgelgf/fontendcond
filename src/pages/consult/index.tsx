import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import poolImg from '../../img/piscina.png'
import noiseImg from '../../img/barulho.png'
import { useState } from 'react'
export const Consult = () => {
  const [pool, setPool] = useState(false);
  const [noise, setNoise] = useState(false);
  const [showNoise,setShowNoise] = useState(true);
  const [showPool,setShowPool] = useState(true);
  const nav = useNavigate();

  const handleClickPool = () => {
    setPool(true);
    setNoise(false);
    setShowNoise(false)
  }

  const handleClickNoise = () => {
    setPool(false);
    setNoise(true);
    setShowPool(false)
  }

  const resetBoolean = ()=>{
    setPool(false);
    setNoise(false);
    setShowPool(true)
    setShowNoise(true)
  }
  
  return (<>
    <div>AGENDA DE REGRAS</div>
    <S.Container>
          {  showPool && (pool ? <>
          <S.LaborBack>Toque para voltar </S.LaborBack>
          <img src={poolImg} alt="noise" 
              onClick={resetBoolean}/></>:
                  <Button text='> Área de uso comum - Piscina, Churrasqueira e Parquinho'
                  onClick={handleClickPool}/>
        )} 
            {showNoise &&  (noise  ? <>
            <S.LaborBack>Toque para voltar </S.LaborBack>
            <img src={noiseImg} alt="noise"  
                onClick={resetBoolean}/></>:
                    <Button text='> Norma de Convivência' 
                    onClick={handleClickNoise}/>
        )}
      </S.Container>
            <S.Back>
                <Button onClick={()=> nav('/service')} text='<' bg='#eeedac9b' color='#0000009b'></Button>
            </S.Back>
    </>
  )
}

