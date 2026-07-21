import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { motion } from 'framer-motion';
import { RevealText, SectionKicker } from '../common/RevealText'
import Watermark from '../common/Watermark'

const STATUS_MESSAGE = {
  sending: 'Sending…',
  sent: 'Message sent — talk soon.',
  error: 'Something went wrong, please try again.',
}

const EMAIL = 'tech.lokeshponraj@gmail.com'

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('service_k91w9ui', 'template_wipj5vc', form.current, 'JETPR0f3YfqTQg-h5')
      .then(() => {
        setStatus('sent');
        form.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="contact section" id="contact">
      <Watermark text="Talk" align="right" />
      <div className="container contact__container">
        <div className="contact__intro">
          <SectionKicker>Contact</SectionKicker>
          <h2 className="heading-lg">
            <RevealText text="Let's build something great." />
          </h2>

          <motion.a
            href={`mailto:${EMAIL}`}
            className="contact__email"
            data-cursor-label={copied ? 'Copied!' : 'Copy'}
            onClick={copyEmail}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {EMAIL}
          </motion.a>
          {copied && <span className="contact__copied">Copied to clipboard</span>}

          <div className="contact__cards">
            <motion.a
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="https://www.github.com/lokesh-ponraj"
              className="contact__card"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github contact__card-icon"></i>
              <span className="contact__card-title">GitHub</span>
            </motion.a>

            {/* TODO: swap in the real LinkedIn profile URL */}
            <motion.a
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="#"
              className="contact__card"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <span className="contact__card-title">LinkedIn</span>
            </motion.a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-div">
            <label className="contact__form-tag">Name</label>
            <input type="text" name="name" className="contact__form-input" placeholder="Enter your name" required />
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag">Email</label>
            <input type="email" name="email" className="contact__form-input" placeholder="Enter your email" required />
          </div>
          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">Ideas</label>
            <textarea name="ideas" rows="6" className="contact__form-input" placeholder="Enter your message" required></textarea>
          </div>

          <button className="button button--flex" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
            <svg className="button__icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          {status !== 'idle' && (
            <p className={status === 'error' ? 'contact__status contact__status--error' : 'contact__status'}>
              {STATUS_MESSAGE[status]}
            </p>
          )}
        </form>
      </div>
    </section>

  )
}

export default Contact
