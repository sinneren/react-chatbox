import React, { Component } from 'react';

class ChatMessage extends Component {
    render() {
        return (
            <div className="chat-message clearfix">
                <img src={this.props.picture} alt="" width="32" height="32" />
                <div className="chat-message-content clearfix">
                    <span className="chat-time">{this.props.datetime.substr(11, 5)}</span>
                    <h5>{this.props.name}</h5>
                    <p>{'Hello, my name is ' + this.props.name + '. Im from ' + this.props.text + '.'}</p>
                </div>
                <hr />
            </div>
        )
    }
}

export default ChatMessage;
