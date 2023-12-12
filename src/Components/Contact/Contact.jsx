import React from 'react'
import styles from './Contact.module.css'
export default function Contact() {
  return (
    <>
      <section className='contact py-5 '>
        <div className="container">
          <div className="row ">
            <h2 className='fw-bolder text-center text-uppercase'>contact section</h2>
            <div className={`mb-5 text-center ${styles.star}`}>
              <i className="fa-solid fa-star fa-2x"></i>
            </div>

            <div className="w-75 m-auto ">
              <form action="">
                <input type="text" className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' placeholder='UserName ' />
                <input type="number" className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' placeholder='UserAge' />
                <input type="text" className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' placeholder='UserEmail' />
                <input type="password" className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' placeholder='UserPassword' />
                <button className={`btn text-white ${styles.mainColor}`}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
