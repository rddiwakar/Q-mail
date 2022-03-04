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
            message:"",
            messageDisplay: false
        }
        this.handleClick = this.handleClick.bind(this)
        // this.handleShowInbox = this.handleShowInbox(this);
    }
    handleClick(id) {        
        const message =inboxMessages.find(data => data.id === id);
        this.setState({
            message,
            messageDisplay: true,
        })
    }

    handleShowInbox = () => {
        this.setState({
            messageDisplay: false,
        });
    }

    render(){
        return(
            <div className="h-screen pt-20 flex justify-between">
                <SidebarMenu />
                <MailBox />
                <Mail handleClick = {this.handleClick} messageDisplay={this.state.messageDisplay} />
                <Message messageData ={this.state.message} handleShowInbox={this.handleShowInbox} messageDisplay={this.state.messageDisplay} />
            </div>
        )
    }
}
export default Main;
