import React from 'react';
import MenuBar from './MenuBar';
import HouseMap from './images/HouseMap.svg';
import Logo from './images/Group.svg';


const SafehouseOne = (props) => {
    return(
        <div id='SAFEONE'>
        <section id='safehouse' className="SafehouseOne">
            <div className='image-box'>
            <a href="/"><img src={Logo} id='img4'/></a>
            <div className='desc'>
                <p>Capacity: 30</p>
                <p>Headcount: 28</p>
            </div>
        </div>
        </section>
        <section id='safehouse' className="SafehouseOne">
            <div className='supplies'>
                <p>Food: 1 month</p>
                <p>Water: 2 months</p>
                <p>First Aid: 10 medkits</p>
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
        </div>
    )
}

export default SafehouseOne;