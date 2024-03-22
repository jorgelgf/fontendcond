import React from 'react'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom';
import * as GS from '../globalStyles'

export const Contact = () => {
  const nav = useNavigate();

  return (
    <> 
           <h3>Contato Construtora</h3>
             <span>xxxxxx</span>
           <h3>Contato Sindico</h3>
               <span>xxxxxx</span>
        <GS.Exit>
          <Button onClick={()=>nav('/service')}
          text='<' bg='#f04a179b' color='#201e1d'/>
        </GS.Exit>

    </>
  )
}

