import React from 'react';
import MenuBar from './MenuBar';

const SafehouseOne = (props) => {
    return(
        <>
        <section className="top">
            <div className='image-box'>
            </div>
            <div className='desc'>
            </div>
        </section>
        <section className="bottom">
            <div className='supplies'>

            </div>
        </section>
        {MenuBar}
        </>
    )
}

export default SafehouseOne;