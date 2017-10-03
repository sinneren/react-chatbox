import React, { Component } from 'react';

class ChatForm extends Component {
    render() {
        return(
            <form>
                <fieldset>
                    <input type="text" placeholder="Type your message…" autoFocus />
                    <input type="hidden" />
                </fieldset>
            </form>
        )
    }
}

export default ChatForm;
