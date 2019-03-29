import React from 'react';
import MenuBar from './MenuBar';
import HouseMap from './images/HouseMap.svg';

const SafehouseTwo = (props) => {
    return (
        <>
        <section>
            <div className='image-box'>
                <img src={HouseMap} />
            </div>
            <div className='desc'>
                <p>Capacity: 8</p>
                <p>Headcount: 5</p>
            </div>
        </section>
        <section>
            <div className='supplies'>
                <p>Food: 5 months</p>
                <p>Water: 4 months</p>
                <p>First Aid: 4 medkits</p>
                <p>Power:  Yes</p>
            </div>
        </section>
        {MenuBar}
        </>
    )
}

export default SafehouseTwo;