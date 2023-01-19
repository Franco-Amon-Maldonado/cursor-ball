import '../index.css'
import { useEffect, useState } from 'react';

export const MouseFollow = () =>{
    const [enabled, setEnabled] = useState(false)
    const [move, setMove] = useState({x:0 , y:0})

    useEffect(() => {
     const handleMove = (event) => {
       const {clientX, clientY} = event
       setMove({x:clientX, y:clientY})
     }
 
     if(enabled){
       window.addEventListener('pointermove', handleMove)
     }
     return () => {
       window.removeEventListener('pointermove', handleMove)
     }
    },[enabled])

return (
    <>
 
     <div className="ball" style={{
     
       transform: `translate(${move.x}px, ${move.y}px)`
       }}></div>
 
 
     <button style={{marginRight: 20}}onClick={()=>setEnabled(!enabled)}> {enabled ? 'Desactivar' : 'Activar'} seguimiento del puntero</button>
    </>
  )
}
