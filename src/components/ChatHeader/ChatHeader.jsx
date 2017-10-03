import React, { Component } from 'react';

class ChatHeader extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        this.props.callbackClick(true);
    }
    render() {
        function chatMessageCounter(prop) {
            if (prop > 0) {
                return <span className="chat-message-counter">{prop}</span>;
            }
        }
        return(
            <header className="clearfix">
                <div className="chat-close" onClick={this._handleClick}>x</div>
                <h4 className={this.props.status}>{this.props.name}</h4>
                {chatMessageCounter(this.props.messageCounter)}
            </header>
        )
    }
}
ChatHeader.defaultProps = {
    name: 'John Doe',
    status: 'is-online',
    messageCounter: 0
}
export default ChatHeader;
