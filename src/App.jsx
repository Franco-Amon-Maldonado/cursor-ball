import { useState } from 'react';
import { MouseFollow } from './components/MouseFollow';


function App() {
  const [close, setClose] = useState(true)
  return (
    <main>
        {close && <MouseFollow/>}
        <button onClick={() => setClose(!close)}>{close ? 'Cerrar' : 'Abrir'} siguimiento del cursor</button>
    </main>
    

  )

  

}

export default App
