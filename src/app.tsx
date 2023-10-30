import { Canvas } from "@react-three/fiber"
import './App.css'
import Waves from "./waves/Waves"

function App() {

  return (

    <div className='container'>

      <Canvas camera={{position: [0.0, 0.0, 8.0]}}>

        <Waves />

      </Canvas>

    </div>

  )

}

export default App
