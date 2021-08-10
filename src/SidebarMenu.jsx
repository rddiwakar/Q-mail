import MenuIcon from "remixicon-react/AppsLineIcon";
import MailOpenIcon from "remixicon-react/MailOpenLineIcon";
import BookMarkIcon from "remixicon-react/Bookmark3LineIcon";
import CalenderIcon from "remixicon-react/Calendar2FillIcon";
import IndentIcon from "remixicon-react/IndentIncreaseIcon";

function SidebarMenu(){
    return(
        <div className="hidden w-16 h-full lg:flex flex-col items-center justify-center border-r-2">
            <div>
                <MenuIcon className="mb-4 hover:bg-green-600 rounded-full p-2"  size={36}/>
                <MailOpenIcon className=" mb-4 bg-green-600 p-2 rounded-full" color="#fff" size={36} />
                <BookMarkIcon className="mb-4 hover:bg-green-600 rounded-full p-2"  size={36}/>
                <CalenderIcon className="mb-4 hover:bg-green-600 rounded-full p-2" c size={36}/>
                <IndentIcon className="mb-4 hover:bg-green-600 rounded-full p-2"  size={36}/>
            </div>
        </div>
    )
}
export default SidebarMenu;