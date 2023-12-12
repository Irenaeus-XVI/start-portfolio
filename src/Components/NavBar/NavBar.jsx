import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg py-4 ${styles.bgColor}`}>
                <div className="container">
                    <Link className="navbar-brand fd-bold text-white" to={''}>START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fd-bold text-white me-3 active" aria-current="page" to={''}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fd-bold text-white me-3" to={'about'}>ABOUT</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fd-bold text-white me-3" to={'portfolio'}>PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fd-bold text-white me-3" to={'contact'}>CONTACT</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
