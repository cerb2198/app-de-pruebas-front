import { useContext } from "react";
import UserContext from "../context/UserContext.js";

const Home = () => {

    const {user, setUser} = useContext(UserContext);

    return(
        <>
            {console.log("User desde Home es:", user)}
            <h1> Bienvenido { JSON.stringify(user) }</h1> 
        </>
    )
};

export default Home;