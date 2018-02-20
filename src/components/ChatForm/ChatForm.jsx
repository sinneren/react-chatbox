import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChatForm extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick(e) {
        e.preventDefault();
        const textInput = ReactDOM.findDOMNode(this.refs.text);
        if (textInput.value != '') {
            let item = {
                name: 'John Gult',
                date: '2017-02-02 13:15:00',
                picture: 'https://randomuser.me/api/portraits/thumb/men/66.jpg',
                state: 'Russia',
                textmessage: textInput.value
            }
            textInput.value='';
            this.props.callbackMessage(item);
            return false;
        } else {
            return false;
        }
    }
    render() {
        return(
            <form>
                <fieldset>
                    <input type="text" placeholder="Type your message…" autoFocus ref="text" />
                    <button className="submit-btn" onClick={this._handleClick}>Send</button>
                </fieldset>
            </form>
        )
    }
}

export default ChatForm;
