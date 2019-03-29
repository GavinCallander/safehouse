import React, { Component } from 'react';
import MenuBar from './MenuBar';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatBody: [ 'Robot sighting in sector 4',
                        'Robot sighting in sector 9',
                        'We need water, urgently'],
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
            <section className='Chat'>
            <header>Crisis Notifications</header>
                <div className="Chat">
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

export default Chat;