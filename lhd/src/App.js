import React, {Component} from 'react';
import Form from './components/Form';
import Map from './components/Map';
import Modal from './components/FormModal'
import './components/styles/styles.css';

class App extends Component{

    render (){
        return (
            <div class="main-app">
                <Map />
                <Form/>
                <Modal/>
            </div>
        )
    }
}

export default App;
