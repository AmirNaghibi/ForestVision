import React, {Component} from 'react';
import Form from './components/Form';
import Map from './components/Map';
import './components/styles/styles.css';

class App extends Component{

    render (){
        return (
            <div class="main-app">
                <Map />
                <Form/>
            </div>
        )
    }
}

export default App;
