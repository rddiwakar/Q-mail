import RecentMail from "./RecentMail"
import inboxMessages from "./data/inboxMessages";

function Mail(){
    return(
        <div className="w-full sm:w-80 border-r-2 overflow-x-auto">
            {
                inboxMessages.map(data => {
                    return (
                        <RecentMail
                            key={data.id}
                            name={data.name}
                            occupation={data.designation}
                            src = {data.image}
                            message={data.message}
                        /> 
                    )
                })
            }
        </div>
    )
}
export default Mail;