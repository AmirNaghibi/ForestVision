import React, {Component} from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {toggleForm } from '../action/formAction';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {connect} from 'react-redux';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            open: false,
            isSnackBarOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    renderForm(){
        return (
            <div className="form">
                <form className="buttons-form">
                    <div className="button-container-left">
                        <Button variant="contained" aria-label="Delete" size="large" onClick={this.handleClick} >
                            <NavigationIcon/>
                            {" "}Share Location
                        </Button>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={this.state.open}
                            autoHideDuration={6000}
                            onClose={this.handleClose}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={<span id="message-id">Shared Location Successfully!</span>}
                            action={[
                                <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                                    UNDO
                                </Button>,
                                <IconButton
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={this.handleClose}
                                >
                                    <CloseIcon />
                                </IconButton>,
                            ]}
                        />
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
