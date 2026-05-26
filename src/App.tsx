import './App.css'
import { Counter } from './components/Counter'
import { BasicFunctions } from './typescript/BasicFunctions'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript/ObjectLiterals'


function App() {

  return (
    <div>
      <h1>React + Vite + TypeScript</h1>
      <BasicTypes />
      <BasicFunctions />
      <ObjectLiterals />
      <Counter />
    </div>
  )
}

export default App
