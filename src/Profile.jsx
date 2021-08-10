

function Profile({name,occupation,src}){
    return(
        
            <div className= "flex justify-around items-center pb-2">
                <img width="50" src={src} className="rounded-full" alt=""/>
                <div className="p-3">
                    <h1 className="text-lg">{name}</h1>
                    <p className="text-sm text-gray-400">{occupation}</p>
                </div>  
            </div>
        
    )
}
export default Profile