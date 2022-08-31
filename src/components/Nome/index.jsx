import { useContext } from 'react'

import { UserContext } from '../../contexts/user'

function Nome() {
    const { alunos, setAlunos } = useContext(UserContext);
    return (
      <div className="App">
        <span style={{color:'lightskyblue', fontSize: "24px"}}>O nome do aluno é: {alunos}</span>
        <br/><br/>
        <button onClick={() => setAlunos('João')}>Mudar o nome</button>
      </div>
    )
  }
  
  export default Nome