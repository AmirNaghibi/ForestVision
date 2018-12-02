import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {toggleForm } from '../action/formAction';

import {connect} from 'react-redux';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            open: false,
        }
    }

    renderForm(){
        return (
            <div className="form">
                <form className="buttons-form">
                    <div className="button-container-left">
                        <Fab variant="extended" aria-label="Delete" >
                            <NavigationIcon/>
                            Share Location
                        </Fab>
                    </div>

                    <div className="button-container-right" onClick={() => this.props.toggleForm()}>
                        <Fab variant="extended" aria-label="Delete" >
                            <CloudUploadIcon/>
                            Upload Images
                        </Fab>
                    </div>
                </form>
            </div>
        )
    }

    render (){
        return (
            <div className="form-container">
                {this.renderForm()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleForm: () => {
            dispatch(toggleForm())
        }
    }
}

export default connect(null, mapDispatchToProps)(Form);
