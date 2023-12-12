import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
    return (
        <>

            <footer className={`text-center  text-white py-5  text-uppercase ${styles.bgColor}`}>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h4 className='fw-bold mb-2'>Location</h4>
                            <p>
                                2215 John Daniel Drive
                                <br />
                                Clark, MO 65243
                            </p>
                        </div>

                        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
                            <h4 className='fw-bold mb-4'>Around the Web</h4>
                            <div className="icons d-flex text-center mb-3">
                                <div className={`${styles.icon} me-2`}>
                                    <i className="fa-brands fa-facebook-f fa-1x"></i>

                                </div>

                                <div className={`${styles.icon} me-2`}>
                                    <i className="fa-brands fa-twitter fa-1x"></i>

                                </div>

                                <div className={`${styles.icon} me-2`}>
                                    <i className="fa-brands fa-instagram fa-1x"></i>

                                </div>

                                <div className={`${styles.icon} me-2`}>
                                    <i className="fa-brands fa-dribbble fa-1x"></i>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h4 className='fw-bold  mb-4'>About Freelancer</h4>
                            <p>Freelance is a free to use, MIT

                                <br />
                                licensed Bootstrap theme created by Route </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className={`${styles.copyright} text-center text-white py-4`}>
                Copyright © Your Website 2021
            </div>
        </>
    )
}
