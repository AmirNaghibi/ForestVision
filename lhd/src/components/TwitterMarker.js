import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Whatshot } from '@material-ui/icons';


class TwitterMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { tweetId } = this.props;

        return (
            <div>
                <Whatshot onClick={this.handleOpen}>Open Modal</Whatshot>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className="modal-div-twit">
                        <TwitterTweetEmbed tweetId={tweetId} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default TwitterMarker;
