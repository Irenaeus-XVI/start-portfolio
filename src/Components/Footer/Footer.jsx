import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
    return (
        <>
            <footer className={`fixed-bottom pt-3 ${styles.bgColor} text-white fw-bold text-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <h2 className='mb-3'>LOCATION</h2>
                                <p>2215 John Danial Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div>
                                <h2 className='mb-3'>
                                    AROUND THE WORLD
                                </h2>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className={`${styles.icon} me-3`}>
                                        <i className="fa-brands fa-facebook fa-1xl "></i>
                                    </div>
                                    <div className={`${styles.icon} me-3`}>
                                        <i className="fa-brands fa-x-twitter fa-1xl "></i>
                                    </div>
                                    <div className={`${styles.icon} me-3`}>
                                        <i className="fa-brands fa-linkedin fa-1xl "></i>
                                    </div>
                                    <div className={`${styles.icon} me-3`}>
                                        <i className="fa-solid fa-earth-americas fa-1xl "></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">

                            <div>
                                <h2 className='mb-3'>ABOUT FREELANCER</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia temporibus libero tempore a cupiditate minus amet vero, reprehenderit maiores quasi ex dolor modi quis voluptas deleniti officiis iste soluta. Eveniet.</p>
                            </div>
                        </div>



                    </div>

                </div>

                <div className={`${styles.footerDown}  py-3  `}>
                    <p>Copyright @ Your Website 2021</p>
                </div>
            </footer>

        </>
    )
}
