import React, { Component } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatForm from './ChatForm/ChatForm';
import ChatMessage from './ChatMessage/ChatMessage';
import axios from 'axios';

// const CSSTransitionGroup = React.addons.CSSTransitionGroup;
// const TransitionGroup = React.addons.TransitionGroup;

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
    getMessage= (data) => {
        let messages = this.state.messages;
        let newMessage = {
            name: {
                first: data.name,
                last: ''
            },
            picture: {
                thumbnail: data.picture
            },
            registered: data.date,
            location: {
                state: data.state
            }
        };
        messages.push(newMessage);
        this.setState(() => {
            return {
                messages: messages
            }
        });
    }
    toggleBox = (data) => {
        console.log(data);
    }
    render() {
        return(
            <div className="live-chat">
                <ChatHeader name={this.state.name} messageCounter={this.state.messageCounter} status={this.state.status} callbackClick={this.toggleBox}/>
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
                    <ChatForm callbackMessage={this.getMessage}/>
                </div>
            </div>
        )
    }
}

export default Chat;
