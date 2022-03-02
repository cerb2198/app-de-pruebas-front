import { createContext, useState } from "react";

const initalState = {correo:"cerb21982@gmail.com",
nombre:"Carlos Burbano",
rol:"Admin"};

const UserContext = createContext(initalState);

export function UserContextProvider({ children }) {

    const [user, setUser] = useState(initalState);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;