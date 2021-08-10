import SidebarMenu from "./SidebarMenu";
import MailBox from "./MailBox";
import Mail from "./Mail";
import Message from "./Message";
function Main(){
    return(
        <div className="h-screen pt-20 flex">
            <SidebarMenu />
            <MailBox />
            <Mail/>
            <Message />
        </div>
    )
}
export default Main;