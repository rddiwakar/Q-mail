import SidebarMenu from "./SidebarMenu";
import MailBox from "./MailBox";
import Mail from "./Mail";
import Message from "./Message";
import React from "react";
import inboxMessages from "./data/inboxMessages";

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            message:""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id) {        
        const message =inboxMessages.find(data => data.id === id);
        this.setState({message})
    }
    render(){
        return(
            <div className="h-screen pt-20 flex">
                <SidebarMenu />
                <MailBox />
                <Mail handleClick = {this.handleClick}/>
                <Message messageData ={this.state.message}/>
            </div>
        )
    }
}
export default Main;