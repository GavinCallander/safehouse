import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatBody: [ 'robot sighting in sector 4',
                        'robot sighting in sector 9',
                        'we need water, urgently'],
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
            <section>
                <div className="chatfeed">
                    {chatFeed}
                </div>
                <div className="chatform">
                    <form>
                        <input type="text" name="chat" placeholder="input message..." onChange={this.handleChange} value={this.state.chatLoader} />
                        <button type="submit" onClick={this.chatSubmit}>Chat</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Chat;