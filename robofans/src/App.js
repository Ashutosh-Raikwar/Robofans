import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import { robots } from './components/robots';
import SearchBox from './components/SearchBox';
import Message from './components/Message';


class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: '', 
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield :event.target.value})
    }

    render(){

        const filteredRobots = this.state.robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


    return(
        <div className="tc">
            <Message Message={filteredRobots.length === 0? "No Record Found": "Robofans"}/>
            <SearchBox  searchChange={this.onSearchChange}/>
            <Cardlist robots={filteredRobots}/>
        </div>
    )
    }
}

export default App;