import { MockMail } from '../components/MockMailComponent';


export const MockMailContainer = ({ loggedIn, currentLoggedInUser, users }) => {
    console.log("loggedIn:", loggedIn);
    console.log("currentLoggedInUser:", currentLoggedInUser);
    return (
        <MockMail 
            loggedIn={loggedIn}
            currentLoggedInUser={currentLoggedInUser}
            users={users}
        />
    )
}