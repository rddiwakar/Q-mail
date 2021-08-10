import Profile from "./Profile";
 
function RecentMail({name,occupation,src}){
    return(
        <div>
            <div className = "flex items-center">
                <Profile 
                    name ={name}
                    occupation = {occupation}
                    src = {src}
                />
                <div className ="text-gray-300">10/09/2021</div>
            </div>
            <p className = "pb-2 border-b-2">Lorem ipsum, dolor sit amet consecteturmporibus assumenda placeat voluptatum?</p>
        </div>
    )
}
export default RecentMail