import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import { robots } from './components/robots';
import SearchBox from './components/SearchBox';


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
            <h1>Robofans</h1>
            <SearchBox  searchChange={this.onSearchChange}/>
            <Cardlist robots={filteredRobots}/>
        </div>
    )
    }
}

export default App;