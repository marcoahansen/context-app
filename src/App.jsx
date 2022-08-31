import './App.css'
import Alunos from './components/Aluno'

import UserProvider from './contexts/user'

function App() {

  return (
    <UserProvider>
      <div className="App">
        <h1>Context API início dos estudos</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  )
}

export default App
