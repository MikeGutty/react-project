import './App.css'
// import { Counter } from './components/Counter'
// import { LoginPage } from './components/LoginPage'
import { UsersPage } from './components/UsersPage'
import { AuthProvider } from './context/AuthContext'
// import { BasicFunctions } from './typescript/BasicFunctions'
// import { BasicTypes } from './typescript/BasicTypes'
// import { ObjectLiterals } from './typescript/ObjectLiterals'


function App() {

  return (
    <AuthProvider>
    <div>
      <h1>React + Vite + TypeScript</h1>
      {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* {BasicFunctions} */}
        {/* <Counter /> */}
      {/* <LoginPage /> */}
      <UsersPage />
    </div>
    </AuthProvider>
  )
}

export default App
