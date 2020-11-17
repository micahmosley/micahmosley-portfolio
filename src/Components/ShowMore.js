import React from 'react';
import { Button, Modal } from 'react-bootstrap'
class ShowMore extends React.Component {
    state={
        show:false, 
        
    }
    
    handleShow=()=>{
        this.setState({
            show:true
        })
    }
    
    handleClose=()=>{
        this.setState({
            show:false,
        })
    }

    render() {
        return (
            <>
            <Button onClick={this.handleShow}>SEE MORE</Button>

            <Modal className="demo-modal" size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>{this.props.project}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                        <img src={this.props.gif} alt="Project Gif" />
                        <Button className="modal-button" variant="danger" href={this.props.git} target="_blank">
                                Github
                        </Button> 
                        <span> </span>
                        <Button className="modal-button" variant="danger" href={this.props.demo} target="_blank">
                                Full Demo
                        </Button> 
                        </Modal.Body> 
                        
                </Modal>
                </>
        )
    }
}

export default ShowMore