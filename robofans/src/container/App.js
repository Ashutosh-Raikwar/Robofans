import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
//import { robots } from './components/robots';
import SearchBox from '../components/SearchBox';
import Message from '../components/Message';
import Scroll from '../components/Scroll';
import "./App.css";


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }

        console.log("construtor!");
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }



    componentDidMount() {
        console.log("inside will");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    render() {
        console.log("render has runned");

        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


        return (
            <div className="tc">
                <Message Message={filteredRobots.length === 0 ? "No Record Found" : "Robofans"} />
                <SearchBox searchChange={this.onSearchChange} />

                <Scroll>
                    <Cardlist robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Ashutosh ",
//         }
//         console.log("inside constructor");
//     }
    
//     componentWillMount(){
//         console.log("inside component will mount");
//         setTimeout( () => {
//             this.setState({name:"arafat will"})
//             console.log("inside setimeout");
//         },3000)
//         console.log("i will too")
//     }

//     componentDidMount(){
//         console.log("inside component did mount");
//         setTimeout( () => {
//             this.setState({name:"rekha did"})
//         },1000)
//     }

//     render(){
//         console.log("inside render")
//         return(
//             <h1>hi world this is {this.state.name}</h1>
//         )
//     }
// }

export default App;