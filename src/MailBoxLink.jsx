
function MailBoxLink ({Icon,iconName,count}){
    return (
        <div className="flex justify-between items-center p-2 pr-6 pl-6">
            <Icon />
            <div>{iconName}</div>
            <div>{count}</div>
        </div>
    )
}
export default MailBoxLink