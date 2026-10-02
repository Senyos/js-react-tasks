import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Dialog  = (props) => <div className="modal-dialog">{props.children}</div>
const Content = (props) => <div className="modal-content">{props.children}</div>
const Header  = (props) => <>
        <div className="modal-header">{props.children}</div>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.toggle}
        ></button>
    </>
const Title  = (props) => <div className="modal-title">{props.children}</div>
const Body   = (props) => <div className="modal-body">{props.children}</div>
const Footer = (props) => <div className="modal-footer">{props.children}</div>

class Modal extends React.Component {
    static Dialog  = Dialog;
    static Content = Content;
    static Header  = Header;
    static Title   = Title;
    static Body    = Body;
    static Footer  = Footer;

    constructor(props) {
        super(props);
        this.state = { display: 'none' };
    }

    handleOpen() {
        this.setState({ display: 'block' });
    }

    render() {
        return (
            <div className={this.props.isOpen ? 'fade show' : 'modal'} style={{display: this.props.isOpen ? 'block' : 'none'}} role="dialog">
                {this.props.children}
            </div>
        );
    };
}

export default Modal;
// END
