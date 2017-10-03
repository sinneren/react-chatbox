import React, { Component } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatForm from './ChatForm/ChatForm';
import ChatMessage from './ChatMessage/ChatMessage';
import axios from 'axios';

class Chat extends Component {
    componentWillMount() {
        const randomUserUrl = 'https://randomuser.me/api/?results=5';
        axios.get(randomUserUrl)
            .then(res => {
                const messages = res.data.results;
                this.setState({ messages });
            });
        this.setState({
            messages: [],
            name: 'John Gult',
            messageCounter: 0,
            status: 'is-online',
            picture: 'https://randomuser.me/api/portraits/thumb/men/66.jpg'
        })
    }
    render() {
        return(
            <div className="live-chat">
                <ChatHeader name={this.state.name} messageCounter={this.state.messageCounter} status={this.state.status} />
                <div className="chat">
                    <div className="chat-history">
                        {this.state.messages.map((item, index) => (
                                <ChatMessage key={index}
                                    name={item.name.first + ' ' + item.name.last}
                                    picture={item.picture.thumbnail}
                                    datetime={item.registered}
                                    text={item.location.state}
                                    />
                            )
                        )}
                    </div>
                    <ChatForm />
                </div>
            </div>
        )
    }
}

export default Chat;
