import MenuIcon from "remixicon-react/AppsLineIcon";
import MailOpenIcon from "remixicon-react/MailOpenLineIcon";
import BookMarkIcon from "remixicon-react/Bookmark3LineIcon";
import CalenderIcon from "remixicon-react/Calendar2FillIcon";
import IndentIcon from "remixicon-react/IndentIncreaseIcon";
import IconStyle from "./IconStyle";

function SidebarMenu(){
    return(
        <div className="hidden w-16 h-full lg:flex flex-col items-center justify-center border-r-2">
            <div>
                <IconStyle Icon ={MenuIcon} hover="hover:"/>
                <IconStyle Icon ={MailOpenIcon} hover="" />
                <IconStyle Icon = {BookMarkIcon} hover="hover:" />
                <IconStyle Icon = {CalenderIcon} hover ="hover:" />
                <IconStyle Icon = {IndentIcon} hover = "hover:" />
                
            </div>
        </div>
    )
}
export default SidebarMenu;