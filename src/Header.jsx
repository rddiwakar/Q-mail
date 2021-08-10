import MailIcon from "remixicon-react/MailLineIcon";
import NotificationBellIcon from "remixicon-react/Notification3LineIcon";
import SelectorIcon from "remixicon-react/ArrowDownSLineIcon";
import SearchIcon from "remixicon-react/Search2LineIcon";
import Profile from "./Profile";
import IconStyle from "./IconStyle"


export default function Header(){
    return(
        <div className="h-20 w-full flex justify-between border-b-2 fixed top-0 left-0">
            <div className="w-20 sm:w-40 flex justify-center h-full border-r-2 items-center p-2">
                <IconStyle Icon = {MailIcon} hover="" />
                <h1 className="hidden sm:block">Q-Mail</h1>
            </div>
            <div className="hidden w-7/12 md:flex items-center justify-start p-6">
                <SearchIcon/>
                <input type="text" placeholder="write your list" className="w-96 focus:outline-none p-3" />
            </div>
            <div className="hidden w-1/12 md:flex items-center h-full border-r-2 border-l-2 justify-center">
                <NotificationBellIcon />
            </div>
            <div className= "w-9/12 md:w-3/12 flex items-center justify-center">
                <Profile  
                    
                    name = "Rahul"
                    occupation ="Software Developer"
                    src = "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="profile"
                />
                <SelectorIcon />
            </div>
        </div>
    )
}