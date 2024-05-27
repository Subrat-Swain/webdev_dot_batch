import React from 'react';
import Card from './Card';

function Tours({tours, removeTour}){
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    // when we use map to a list we must have to pass key to uniquely identifying object
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                } 
            </div>
        </div>
    );
}


export default Tours;