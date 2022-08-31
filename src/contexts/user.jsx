import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [alunos, setAlunos] = useState("Marco Aurelio")
    const [qtdAlunos, setqtdAlunos] = useState(87)

    return(
        <UserContext.Provider value ={{ alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;