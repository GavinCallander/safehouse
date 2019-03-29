import React, { Component } from 'react';

class ChatPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
        }
    }
    submitChat = () => {
        this.setState({
            body: req.body.body
        })
        console.log(this.state.body)
    }
    render() {
        return (
            <container>
                <div className="chatfeed">

                </div>
                <div className="chatform">
                    <form>
                        <input type="text" name="chat" placeholder="input message..." />
                        <button type="submit">Chat</button>
                    </form>
                </div>
            </container>
        )
    }
}

export default ChatPage;