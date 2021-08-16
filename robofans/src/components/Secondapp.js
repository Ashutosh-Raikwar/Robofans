import React,{Component} from 'react';
import './Secondapp.css';

class Secondapp extends Component{
    
    constructor(){
        super();
        this.state={
            subMessage:"Welcome to the website.",
            logMessage:"Please login to use the site",
            buttonName:"login",
        }
        
    }

    subscribe = () => {
        this.setState({subMessage:"You have subscribed to this page"})
    }

    logout = () =>{
        if(this.state.buttonName === "login")
        this.setState({logMessage:"Login successfull", buttonName:"logout" })
        else
        this.setState({logMessage:"Please login to use the site", buttonName:"login" })
    }
    
    render(){
        return(
            <div className={this.state.buttonName === "logout"? "green": "red"}>
                <h1 >{this.state.subMessage}</h1>
                <h2>{this.state.logMessage}</h2>
                <button className="bg-light-green" onClick={this.subscribe}>Subscribe</button>
                <button className="bg-light-green" onClick={this.logout} >{this.state.buttonName}</button>
            </div>
        )
    }
}

export default Secondapp;