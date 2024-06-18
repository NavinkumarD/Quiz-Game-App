import React, { useContext } from 'react';
import Datacontext from '../context/datacontext';

const Quiz = () => {
    const {
        showQuiz,question,quizs,
        checkAnswer,
        correctAnswer,
        selectedAnswer,
        questionIndex,
        nextQuestion,
        showTheResult,
    } = useContext(Datacontext);

    return (
        <section className="bg-blue text-white" style={{ display: `${showQuiz? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>
                                    {quizs.indexOf(question) + 1} / {quizs?.length}
                                </h5>
                            </div>
                            {question?.options?.map((item, index) => (
                                <button
                                    key={index}
                                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                                    onClick={(event) => checkAnswer(event, item)}
                                >
                                    {item}
                                </button>
                            ))}
                            <button
                                className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold'
                                onClick={questionIndex + 1!== quizs.length? nextQuestion : showTheResult}
                                disabled={!selectedAnswer}
                            >
                                {questionIndex + 1!== quizs.length? 'Next Question' : 'Show Result'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;