import RecentMail from "./RecentMail"
function Mail(){
    return(
        <div className="w-full sm:w-80 border-r-2 overflow-x-auto">
           <RecentMail 
                name="Swastik"
                occupation="Software Developer"
                src = "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
           /> 
        </div>
    )
}
export default Mail;