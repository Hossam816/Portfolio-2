import React from 'react'
import './experience.css'
import { FaCheckCircle  } from 'react-icons/fa'

function Experience() {
    return (
        <section id='exerience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontEnd'>
                    <h3>Frontend Devolpment</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
                <div className='experience__framework'>
                    <h3>Fram Work Devolpment</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>Reactjs</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>SASS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>JQuery</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCheckCircle className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience