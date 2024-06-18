import React, { useContext } from 'react';
import Datacontext from '../context/datacontext';

const Start = () => {
    const {startQuiz, showStart} = useContext(Datacontext);
    return (
        <section className='text-white text-center bg-grey' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Quiz Game App</h1>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;