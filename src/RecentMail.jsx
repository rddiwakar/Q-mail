import Profile from "./Profile";
 
function RecentMail({name,occupation,src,message,handleClick, id}){
    return(
        <div onClick ={() => handleClick(id)}  >
            <div className = "flex items-center">
                <Profile 
                    name ={name}
                    occupation = {occupation}
                    src = {src}
                />
                <div className ="text-gray-300">10/09/2021</div>
            </div>
            <p className = "pb-2 border-b-2">{message.slice(0, 56) + "..."}</p>
        </div>
    )
}
export default RecentMail