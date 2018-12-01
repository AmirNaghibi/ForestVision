import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import Map from './components/Map';

class App extends Component{
    render (){
        return (
            <div>
                TEST
                <Map />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
}

export default App;
