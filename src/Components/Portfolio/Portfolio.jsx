import React, { useState } from 'react'
import styles from './Portfolio.module.css'
export default function Portfolio() {

  const [data, setData] = useState([

    { img: './img/1.png', id: 'img1' },
    { img: './img/2.png', id: 'img2' },
    { img: './img/3.png', id: 'img3' },
    { img: './img/4.png', id: 'img4' },
    { img: './img/5.png', id: 'img5' },
    { img: './img/6.png', id: 'img6' },
  ])
  return (
    <>
      <section className='portfolio py-5 text-center'>
        <h2 className='fw-bolder mb-5 '>portfolio component</h2>

        <div className="container">
          <div className="row g-4">
            {data.map((item) => (
              <>
                <div className="col-md-4" key={item.id}>
                  <div className={styles.portfolioItem} >
                    <img src={item.img} alt="" className='w-100 rounded-3' />
                    <div className={` ${styles.plus} d-flex justify-content-center align-items-center rounded-3 text-white `} data-bs-toggle="modal" data-bs-target={`#` + item.id}>
                      <i className="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div >
              </>
            ))}

            {data.map((item) => (
              <>


                <div className="modal fade " id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content ">

                      <div className="modal-body p-0">
                        <img src={item.img} alt="" className='w-100 rounded-3' data-bs-toggle="modal" data-bs-target={'#+item.id'} />

                      </div>

                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section >
    </>
  )
}
