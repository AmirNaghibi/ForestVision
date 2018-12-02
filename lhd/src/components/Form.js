import React, {Component} from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {toggleForm } from '../action/formAction';
import Button from '@material-ui/core/Button';

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
                        <Button variant="contained" aria-label="Delete" size="large" >
                            <NavigationIcon/>
                            {" "}Share Location
                        </Button>
                    </div>

                    <div className="button-container-right" onClick={() => this.props.toggleForm()}>
                        <Button variant="contained" aria-label="Delete" size="large" >
                            <CloudUploadIcon/>
                            {" "}Upload Images
                        </Button>
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
