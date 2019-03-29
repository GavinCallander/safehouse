import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { ReactComponent as Explore } from './images/binoculars-solid.svg';
import { ReactComponent as Profile } from '';
import { ReactComponent as Message} from '';


class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
        }
    }
render() {
    return (
    <div className='MenuBar'>
            <Link to='/App'>
        <Explore />
            </Link>
        <Link to='/Chat'>
        <Message />
            </Link>
        <Link to='/Profile'>
            <Profile />
        </Link>
        </div>
        );
    }
}

export default MenuBar;