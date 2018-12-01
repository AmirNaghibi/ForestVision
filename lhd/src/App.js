import React, {Component} from 'react';
import Form from './components/Form';
import Map from './components/Map';
import './components/styles/styles.css';

class App extends Component{

    render (){
        return (
            <div>
                <div className="header">HEADER</div>
                <div className="main-app">
                    <Map />
                    <Form/>
                </div>
            </div>
        )
    }
}

export default App;
