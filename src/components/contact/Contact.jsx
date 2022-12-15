import './contact.css'
import { GrMail } from 'react-icons/gr';
import { SiGooglemessages, SiWhatsapp } from 'react-icons/si'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'


const data = [
    {
        icon: <GrMail className='contact__icon'/>,
        heading: 'Email',
        mail: "ho8483930@gaml.com",
    },
    {
        icon: <SiGooglemessages  className='contact__icon'/>,
        heading: 'Messenger',
        mail: "Elohoso",
    },
    {
        icon: <SiWhatsapp  className='contact__icon'/>,
        heading: 'WhatsApp',
        mail: "123-456-789",
    }
]

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wyj66nw', 'service_wyj66nw', form.current, 'FGER6S5WaPnM-YgaR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <GrMail className='contact__icon'/>
                        <h4>Email</h4>
                        <p>mailto:ho8483930@gmail.com</p>
                        <a href='mailto:ho8483930@gmail.com'><small>Send A Message</small></a>
                    </article>

                    <article className='contact__option'>
                        <SiGooglemessages  className='contact__icon'/>
                        <h4>Messenger</h4>
                        <p>hosotesting</p>
                        <a href='mailto:ho8483930@gmail.com'><small>Send A Message</small></a>
                    </article>

                    <article className='contact__option'>
                        <SiWhatsapp  className='contact__icon'/>
                        <h4>WhatsApp</h4>
                        <p>+123-456-789</p>
                        <a href='https://api.whatsapp.com/send?phone=+00200109342645'><small>Send A Message</small></a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Your Full Name' name='name' required/>
                    <input type="email" placeholder='Your Email' name='email'required/>
                    <textarea placeholder='Your Message' name='message' required></textarea>
                    <button type='submit' href='#' className='btn btn-primary'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact