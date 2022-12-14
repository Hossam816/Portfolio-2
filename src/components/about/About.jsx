import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa'

function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="about-me" />
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about-icons'/>
                            <h5>Experience</h5>
                            <small>3+ years of practising</small>
                        </article>
                        <article className='about__card'>
                            <FaUsers className='about-icons'/>
                            <h5>Clients</h5>
                            <small>200+ worldwid</small>
                        </article>
                        <article className='about__card'>
                            <FaFolder className='about-icons'/>
                            <h5>Projects</h5>
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia praesentium ut laborum incidunt ipsum similique alias, nobis cum, cumque veritatis maiores? Sapiente eaque modi non magnam ex reprehenderit deserunt?
                    </p>
                    <a href='#contact' className='btn btn-primary'>
                        LEt's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About