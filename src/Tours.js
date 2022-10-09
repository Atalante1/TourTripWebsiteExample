import React from 'react';
import Tour from './Tour';
import Questions from './Questions';
import { FaGithubSquare } from 'react-icons/fa';
import Review from './Review';


const Tours = ({ tours, removeTour }) => {
    return (
        <section>

            <div className='container'>
                <div className=' title'>
                    <h2> our reviews</h2>
                    <div className='underline'> </div>
                </div>
                <Review></Review>
            </div>



            <div className='title'>
                <h2>our tours
                </h2>
                <div className='underline'></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id}{...tour}
                        removeTour={removeTour}></Tour>
                    //Tour.jsde apiden aldığımız bilgileri düzenleyip koyucaz 
                    //apide kaç eleman varsa o kadar tour.jsdekini yazdırır
                })}
            </div>

            <div className='cointaner'>
                <Questions></Questions>
            </div>
        </section>

    );
};

export default Tours;