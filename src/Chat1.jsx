import React, { Component } from 'react';
import MenuBar from './MenuBar';

class Chat1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatBody: [ 'People have left, room has opened up',
                        'bring supplies',
                        'four beds remaining',
                        "Cops can't be trusted, neither can coders in a hackathon",
                        'Please, leave your weapons and shoes at the door',
                        'Life is short, drink beer'
                    ],
            chatLoader: ''
        }
    }
    chatSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.chatLoader)
        let chatThing = this.state.chatBody.slice()
        chatThing.push(this.state.chatLoader)
        this.setState({
            chatBody: chatThing, chatLoader: ''
        })
        console.log(this.state.chatBody)
    }

    handleChange = (e) => {
        let chatLoader = e.target.value
        this.setState({
            chatLoader: chatLoader
        })
    }

    render() {
        let chatFeed = this.state.chatBody.map((message, index) => {
            return <p key={index}>{message}</p>
        })
        return (
            <section className='container'>
            <header>Crisis Notifications</header>
            <section className='Chat'>
                <div className="Chatfeed">
                    {chatFeed}
                </div>
                <div className="chatform">
                    <form>
                        <input type="text" name="chat" placeholder="input message..." onChange={this.handleChange} value={this.state.chatLoader} />
                        <button type="submit" onClick={this.chatSubmit}>Chat</button>
                    </form>
                </div>
            </section>
            <MenuBar />
            </section>
        )
    }
}

export default Chat1;