import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
    <>
      <section className={`vh-100 text-center about ${styles.aboutBg} text-white d-flex justify-content-center align-items-center`}>

        <div>
          <h2 className=' text-uppercase mb-4'>about component</h2>
          <div className={styles.star}>
            <i className="fa-solid fa-star fa-2x"></i>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
              </div>
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
