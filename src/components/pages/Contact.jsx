import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form action="https://formsubmit.co/daviddelima2222@gmail.com" method="POST" >
                <div className='flex'>
                  <input name="name" required type='text' placeholder='Name' data-aos='flip-left' />
                  <input name="number" required type='number' placeholder='numero' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='textarea' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button  type="submit" data-aos='zoom-in-up'>Enviar</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}