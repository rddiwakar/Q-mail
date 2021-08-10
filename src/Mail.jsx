import RecentMail from "./RecentMail"
import inboxMessages from "./data/inboxMessages";

function Mail({handleClick, messageDisplay}){
    return(
        <div className={`${messageDisplay ? "hidden" : ""} sm:block w-full sm:w-80 border-r-2 overflow-y-scroll p-2`}>
            {
                inboxMessages.map(data => {
                    return (
                        <RecentMail
                            id = {data.id}
                            key={data.id}
                            name={data.name}
                            occupation={data.designation}
                            src = {data.image}
                            message={data.message}
                            handleClick = {handleClick}
                        /> 
                    )
                })
            }
        </div>
    )
}
export default Mail;