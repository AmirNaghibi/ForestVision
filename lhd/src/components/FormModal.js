import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {toggleForm} from '../action/formAction';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';

class FormModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            acceptedFiles : [],
            rejectedFiles: [],
            fileNames: [],
            page: 1,
        }
    }

    onDrop(acceptedFiles, rejectedFiles) {

        acceptedFiles.map(file => {
            this.state.fileNames.push(file.name);
            this.state.acceptedFiles.push(file);
        });

          if(rejectedFiles){
            this.state.rejectedFiles.push(rejectedFiles);
          }
    }

    renderUploadForm = () => {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
                    <div className="image-drop-div">
                        <Dropzone onDrop={(files) => this.onDrop(files)} type="file" id="file">
                            <h5>Click or drop some images here for the process</h5>
                        </Dropzone>
                    </div>
                        <Button variant="contained" color="primary" type="submit" className="btn btn-outline-success" disabled={this.state.acceptedFiles.length > 0}> Upload images</Button>
                </form>
            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();

        console.log(this.state);

        // this.state.acceptedFiles.forEach((data) => {
        //     const fd = new FormData();
        //     fd.append(`file`, data);
        //     // this.props.uploadBulkImages(fd);

        // });
        // this.props.page_number(3);
    }


    render (){
        const {toggle_modal} = this.props;

        return (
            <div>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={toggle_modal}
                onClose={this.props.toggleForm}
                >
                <div className="modal-div">
                    <Typography variant="h6" id="modal-title">
                    Upload images
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                    You can drop or upload images from the app
                    </Typography>
                    <div>
                        {this.renderUploadForm()}
                    </div>
                </div>
                </Modal>
            </div>
        )
    }
}

const MapStateToProps = state => {
    const {
        toggle_modal
    }= state.formReducer;

    return {
        toggle_modal
    }
}


const mapDispatchToProps = dispatch => {
    return {
        toggleForm: () => {
            dispatch(toggleForm())
        }
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(FormModal);