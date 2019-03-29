import React from 'react';
import MenuBar from './MenuBar';
import Logo from './images/Group.svg';

const SafehouseTwo = (props) => {
    return (
        <>
        <section className='SafehouseTwo'>
            <div id='safehouse'className='top'>
                <img src={Logo} id='housemap' />
            </div>
            <div className='desc'>
                <p>Capacity: 8</p>
                <p>Headcount: 5</p>
            </div>
        </section>
        <section className='SafeHouseTwo'>
            <div id='safehouse'className='supplies'>
                <p>Food: 5 months</p>
                <p>Water: 4 months</p>
                <p>First Aid: 4 medkits</p>
                <p>Power:  Yes</p>
                <p>.            </p>
                <p>.           </p>
                <p>.           </p>
                <p>.            </p>
                <p>.            </p>
                <p>.            </p>
                <p>.            </p>
                <p>.           </p>
            </div>
        </section>
        <MenuBar />
        </>
    )
}

export default SafehouseTwo;