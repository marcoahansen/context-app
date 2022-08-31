import { useContext } from 'react'

import { UserContext } from '../../contexts/user'

import Nome from "../Nome"

function Alunos() {
    const { alunos, qtdAlunos } = useContext(UserContext)
  
    return (
      <div className="App">
        <h1>Quantidade de Alunos: {qtdAlunos}</h1>
        <h2>Nome do Aluno no online: {alunos}</h2>
        <br/>
        <Nome/>
      </div>
    )
  }
  
  export default Alunos