import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Message from '../components/Message';
import Scroll from '../components/Scroll';
import PopUp from '../components/PopUp';
import "./App.css";


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            PopUp: false,
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

    openPopup = () =>{
        this.setState({PopUp: true})
    }

    closePopup = () =>{
        this.setState({PopUp: false})
    }

    render() {
        const {robots,searchfield} = this.state;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !filteredRobots.length?  <h1>Loading......</h1>
            :(
                <React.Fragment>
                {this.state.PopUp ? <PopUp closePopup={this.closePopup} />: ""}
                
                <div className="tc">
                    <Message Message={filteredRobots.length === 0 ? "No Record Found" : "Robofans"} />
                    <SearchBox searchChange={this.onSearchChange} />
                    <button onClick={this.openPopup} style={{cursor:'pointer'}}>Open pop Up</button>

                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div>

                </React.Fragment>
            )
    }
}


export default App;