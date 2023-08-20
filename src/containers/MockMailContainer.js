import { MockMail } from '../components/MockMail';


export const MockMailContainer = ({ loggedIn, currentLoggedInUser }) => {
    console.log("loggedIn:", loggedIn);
    console.log("currentLoggedInUser:", currentLoggedInUser);
    

    return (
        <MockMail 
        loggedIn={loggedIn}
        currentLoggedInUser={currentLoggedInUser}
        />
    )
}