import React from 'react';
import Cardlist from './components/Cardlist';
import { robots } from './components/robots';


const App= () =>{
    return(
        <div>
            <h1>Robofans</h1>
            <Cardlist robots={robots}/>
        </div>
    )
}

export default App;