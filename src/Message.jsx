
function Message({messageData}){
    const { name, image, designation, message } = messageData;
    return(
        <>
            {
                name ? (
                    <section className = "hidden sm:block w-1/2 p-8">
                        <div className= "flex justify-start items-center border-b-2 mb-4 pb-2">
                            <img width="50" src={image} className="rounded-full" alt="profile"/>
                            <div className="pl-6">
                                <h1 className="text-lg ">{name}</h1>
                                <p className ="text-gray-400 text-sm">{designation}</p>
                            </div>
                            <div className ="text-gray-300 pl-6">10/09/2021</div>
                        </div>
                        <p className =" text-sm " >{message}</p>
                    </section>
                ) : (
                    <p className="hidden sm:block m-auto">There is nothing to show here. Select a message from inbox</p>
                )
            }
        </>
    )
}
export default Message;