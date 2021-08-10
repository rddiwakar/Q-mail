
function IconStyle({Icon,hover}){
    return (
        <>
         <Icon className={`${hover}bg-green-600 rounded-full p-2 m-auto text-m`} color="#000" size={36} />
        </>
    )
}
export default IconStyle