import React from 'react';
import MenuBar from './MenuBar';
import HouseMap from './images/HouseMap.svg';

const SafehouseOne = (props) => {
    return(
        <>
        <section className="top">
            <div className='image-box'>
            <img src={HouseMap} />
            </div>
            <div className='desc'>
                <p>Capacity: 30</p>
                <p>Headcount: 28</p>
            </div>
        </section>
        <section className="bottom">
            <div className='supplies'>
                <p>Food: 1 month</p>
                <p>Water: 2 months</p>
                <p>First Aid: 10 medkits</p>
                <p>Power:  Yes</p>
            </div>
        </section>
        {MenuBar}
        </>
    )
}

export default SafehouseOne;