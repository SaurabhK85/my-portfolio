import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { email, social } = contact

  if (!email) return null

  return (
    <div className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <a href={`mailto:${email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {social?.github && (
          <a
            href={social.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='link link--icon'
          >
            <FaGithub size={30} />
          </a>
        )}
        {social?.linkedin && (
          <a
            href={social.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='link link--icon'
          >
            <FaLinkedin size={30} />
          </a>
        )}
      </div>
    </div>
  )
}

export default Contact
