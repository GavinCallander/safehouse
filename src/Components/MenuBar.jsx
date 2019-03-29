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
            <Link to='/Explore'>
        <Explore />
            </Link>
        <Link to='/message'>
        <Message />
            </Link>
        <Link to='/profile'>
            <Profile />
        </Link>
        </div>
        );
    }
}

export default MenuBar;