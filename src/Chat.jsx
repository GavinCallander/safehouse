import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatBody: ['robot sighting in sector 4'],
        }
    }
    // chatSubmit = (e) => {
    //     e.preventDefault()
    //     let chatLoad = e.target.value
    // }


    render() {
        console.log(this.state.chatBody)
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
                        <input type="text" name="chat" placeholder="input message..." />
                        <button type="submit">Chat</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Chat;