import  InboxIcon from "remixicon-react/Download2LineIcon";
import DeletedIcon from "remixicon-react/DeleteBin2LineIcon";
import DraftIcon from "remixicon-react/DraftLineIcon";
import FavouriteIcon from "remixicon-react/StarLineIcon";
import SendIcon from "remixicon-react/SendPlaneFillIcon";
import LabelIcon from "remixicon-react/CheckboxBlankCircleLineIcon";
import Profile from "./Profile";
import MailBoxLink from "./MailBoxLink";

 const MailBox = ()=>{
    return(
        <div className="hidden lg:block w-60 border-r-2 overflow-y-scroll">
            <section className="mb-8">
                <h1 className="border-b-2 text-center p-2 ">MailBox</h1>
                <div>
                    <MailBoxLink 
                        Icon = {InboxIcon}
                        iconName = "Inbox"
                        count = "6"
                        pt="pt-4"
                    />
                    <MailBoxLink 
                        Icon = {DraftIcon}
                        iconName = "Drafts"
                        count = "4"
                    />
                    <MailBoxLink 
                        Icon = {FavouriteIcon}
                        iconName = "Favourite"
                        count = "2"
                    />
                    <MailBoxLink 
                        Icon = {SendIcon}
                        iconName = "SendItem"
                        count = "6"
                    />
                    <MailBoxLink 
                        Icon = {DeletedIcon}
                        iconName = "Deleted"
                        count = "3"
                    />
                </div>
            </section>
            <section className="mb-8">
            <h1 className="border-b-2 text-center p-2">Label</h1>
                <div>
                    <MailBoxLink 
                        Icon = {LabelIcon}
                        iconName = "Bussiness"
                        count = "8"
                        pt="pt-4"
                    />
                    <MailBoxLink 
                        Icon = {LabelIcon}
                        iconName = "Social"
                        count = "6"
                    />
                    <MailBoxLink 
                        Icon = {LabelIcon}
                        iconName = "Public"
                        count = "5"
                    />
                    
                </div>
            </section>
            <section className="mb-8">
            <h1 className="border-b-2 text-center p-2 mb-2">Contact</h1>
             <div>
             <Profile 
               name = "Sanidia Pani"
               occupation = "Engineer"
               src = "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
            /> 
            <Profile 
               name = "Sanidia Pani"
               occupation = "Engineer"
               src = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            /> 
            <Profile 
               name = "Rajesh"
               occupation = "Construction"
               src = "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /> 
            <Profile 
               name = "Swastik yadav"
               occupation = "software Developer"
               src = "https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg"
            />
             </div> 
            </section>
            
        </div>
    )
}
export default MailBox;