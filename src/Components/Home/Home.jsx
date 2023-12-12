import React from 'react'
import styles from './Home.module.css'
export default function Home() {
  return (
    <>
      <header className={`vh-100 d-flex justify-content-center align-items-center text-center  text-white`} style={{ backgroundColor: '#1ABC9C' }}>
        <div>
          <img src="./img/avataaars.svg" alt="" className='w-100 mb-2' />
          <div className={styles.star}>
            <i className="fa-solid fa-star fa-2xl"></i>
          </div>
          <h1>START PORTFOLIO</h1>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    </>
  )
}
