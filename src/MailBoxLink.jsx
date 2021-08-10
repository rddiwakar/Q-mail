
function MailBoxLink ({Icon,iconName,count,pt=""}){
    return (
        <div className={`flex justify-between items-center p-2 pr-6 pl-6 ${pt}`}>
            <Icon />
            <div>{iconName}</div>
            <div>{count}</div>
        </div>
    )
}
export default MailBoxLink