import React, { useState } from 'react';
import styles from './Book.module.css'
import cuc1 from "../../../public/images/cuc/ccc1.jpeg"
import cuc2 from "../../../public/images/cuc/ccc2.jpeg"
import cuc3 from "../../../public/images/cuc/ccc3.jpeg"
import cuc4 from "../../../public/images/cuc/ccc4.jpeg"
import cuc5 from "../../../public/images/cuc/ccc5.jpeg"
import cuc6 from "../../../public/images/cuc/ccc6.jpg"
import cuc7 from "../../../public/images/cuc/ccc7.jpg"
import cuc8 from "../../../public/images/cuc/ccc8.jpg"
import cuc9 from "../../../public/images/cuc/ccc9.jpg"
import cuc10 from "../../../public/images/cuc/ccc10.jpeg"
import cuc11 from "../../../public/images/cuc/ccc11.jpeg"
import cuc12 from "../../../public/images/cuc/ccc12.jpeg"
import cover2 from "../../../public/images/cuc/cover2.png"
import cover from "../../../public/images/do/cover.png"
import do1 from "../../../public/images/do/DO1.jpg"
import do2 from "../../../public/images/do/DO2.jpg"
import do3 from "../../../public/images/do/DO3.jpg"
import do4 from "../../../public/images/do/DO4.jpg"
import do5 from "../../../public/images/do/DO5.jpg"
import do6 from "../../../public/images/do/DO6.png"
import do7 from "../../../public/images/do/DO7.png"
import do8 from "../../../public/images/do/DO8.png"
import do9 from "../../../public/images/do/DO9.png"
import do10 from "../../../public/images/do/DO10.png"
import do11 from "../../../public/images/do/DO11.png"


function Book() {

  const title1 = "Cuvânt cu cuvânt"
  const p1 = `
  “Word for word” proposes a fusion between calendar and dictionary. The calendar provides a word for every day of the year, the goal being to learn something new everyday. To make sure that every word is a surprise, the selection is comprised of neologisms (new words) and archaisms (old words), but not exclusively.
The project experiments with the learning process as well. Part of the 365 terms and their definitions are accompanied by typographic experiments. These are meant to illustrate, contributing to the assimilation and memorization of the words.

This project has also been selected for DIPLOMA 2022.
`

const title2 = `Dicționar onomastic`

const p2 = `
Dicționar onomastic / Onomastic Dictionary addresses fragments of Mircea Horia Simionescu’s text through typography and film photography. M. H. Simionescu (the author of the text) presents various human typologies and surreal stories, using names as a pretext. The texts are pure fiction and they flirt with the absurd.
The foundation of the project is the classic structure of the dictionary. But the layout takes a less conventional turn, so the “normal” pages are alternated with playful or contrasting elements. Therefore, you should not be surprised if you find pages full of text, very small photos or pages with a single paragraph. The design of the layout is meant to capture the essence, the atmosphere of the narrative, balancing the real with the imaginary, the crazy with the sane.

This project has also been selected for DIPLOMA 2020.
`

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)

  const toggleModal1 = () =>{
    setModal1(!modal1)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  }

  const toggleModal2 = () =>{
    setModal2(!modal2)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  }

  return (
   <>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title1}</span>
            <span className={styles.p}>{p1}</span>
          </div>
          <div className={styles.right}>
                <button className={styles.open} onClick={toggleModal1}>
                  <img src={cuc1.src} alt="" />
                </button>
          </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title2}</span>
            <span className={styles.p}>{p2}</span>
          </div>
          <div className={styles.right}>
          <button className={styles.open} onClick={toggleModal2}>
                  <img src={do2.src} alt="" />
                </button>
          </div>
        </div>
    </div>

    {modal1 && (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.divLeft}>
          <img src={cuc1.src} alt="" />
          <img src={cuc3.src} alt="" />
          <img src={cuc5.src} alt="" />
          <img src={cuc7.src} alt="" />
          <img src={cuc9.src} alt="" />  
          <img src={cuc11.src} alt="" />
        </div>

        <div className={styles.divRight}>
          <img src={cuc2.src} alt="" />
          <img src={cuc4.src} alt="" />
          <img src={cuc6.src} alt="" />
          <img src={cuc8.src} alt="" />
          <img src={cuc10.src} alt="" /> 
          <img src={cuc12.src} alt="" />
        </div>
        <button
        className={styles.close}
        onClick={toggleModal1}
        >(close)</button>
      </div>
    </div>
    )}


{modal2 && (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
      <div className={styles.wrapper}>
        <img src={do1.src} alt="" />
        <div className={styles.flex}>
          <img src={do2.src} alt="" />
          <img src={do3.src} alt="" />
        </div>
        <img src={do4.src} alt="" />
        <img src={do5.src} alt="" />
        <img src={do6.src} alt="" />
        <div className={styles.flex}>
          <img src={do7.src} alt="" />
          <img src={do8.src} alt="" />
        </div>
        <img src={do9.src} alt="" />
        <img src={do10.src} alt="" />
        <img src={do11.src} alt="" />
      </div>

        <button
        className={styles.close}
        onClick={toggleModal2}
        >(close)</button>
      </div>
    </div>
    )}
   </>
  );
}

export default Book;
