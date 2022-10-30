import React, { useState } from 'react';
import styles from './Photography.module.css'
import tbv1 from "../../../public/images/tbv/TBV-01.png"
import tbv2 from "../../../public/images/tbv/TBV-02.png"
import tbv3 from "../../../public/images/tbv/TBV-03.png"
import tbv4 from "../../../public/images/tbv/TBV-04.png"
import tbv5 from "../../../public/images/tbv/TBV-05.png"
import tbv6 from "../../../public/images/tbv/TBV-06.png"
import tbv7 from "../../../public/images/tbv/TBV-07.png"
import tbv8 from "../../../public/images/tbv/TBV-08.png"
import tbv9 from "../../../public/images/tbv/TBV-09.png"
import tbv10 from "../../../public/images/tbv/TBV-10.png"
import tbv11 from "../../../public/images/tbv/TBV-11.png"
import tbv12 from "../../../public/images/tbv/TBV-12.png"
import clip from "../../../public/images/tbv/Clip.gif"
import gara1 from "../../../public/images/gara/1.png"
import gara2 from "../../../public/images/gara/2.png"
import gara3 from "../../../public/images/gara/3.png"
import gara4 from "../../../public/images/gara/4.png"
import gara5 from "../../../public/images/gara/5.png"
import gara6 from "../../../public/images/gara/6.png"
import gara7 from "../../../public/images/gara/7.png"



function Photography() {

  const title1 = "tbv."
  const p1 = `
  “Word for word” proposes a fusion between calendar and dictionary. The calendar provides a word for every day of the year, the goal being to learn something new everyday. To make sure that every word is a surprise, the selection is comprised of neologisms (new words) and archaisms (old words), but not exclusively.
The project experiments with the learning process as well. Part of the 365 terms and their definitions are accompanied by typographic experiments. These are meant to illustrate, contributing to the assimilation and memorization of the words.

This project has also been selected for DIPLOMA 2022.
`

const title2 = `North Railway Station wayfinding`

const p2 = `
Dicționar onomastic / Onomastic Dictionary addresses fragments of Mircea Horia Simionescu’s text through typography and film photography. M. H. Simionescu (the author of the text) presents various human typologies and surreal stories, using names as a pretext. The texts are pure fiction and they flirt with the absurd.
The foundation of the project is the classic structure of the dictionary. But the layout takes a less conventional turn, so the “normal” pages are alternated with playful or contrasting elements. Therefore, you should not be surprised if you find pages full of text, very small photos or pages with a single paragraph. The design of the layout is meant to capture the essence, the atmosphere of the narrative, balancing the real with the imaginary, the crazy with the sane.

This project has also been selected for DIPLOMA 2020.
`

const title3 = `Logofolio`

const p3 = `
Dicționar onomastic / Onomastic Dictionary addresses fragments of Mircea Horia Simionescu’s text through typography and film photography. M. H. Simionescu (the author of the text) presents various human typologies and surreal stories, using names as a pretext. The texts are pure fiction and they flirt with the absurd.
The foundation of the project is the classic structure of the dictionary. But the layout takes a less conventional turn, so the “normal” pages are alternated with playful or contrasting elements. Therefore, you should not be surprised if you find pages full of text, very small photos or pages with a single paragraph. The design of the layout is meant to capture the essence, the atmosphere of the narrative, balancing the real with the imaginary, the crazy with the sane.

This project has also been selected for DIPLOMA 2020.
`


  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

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

  const toggleModal3 = () =>{
    setModal3(!modal3)
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
                  <img src={tbv1.src} alt="" />
                </button>
          </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title2}</span>
            <span className={styles.p}>{p1}</span>
          </div>
          <div className={styles.right}>
                <button className={styles.open} onClick={toggleModal2}>
                  <img src={gara1.src} alt="" />
                </button>
          </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title3}</span>
            <span className={styles.p}>{p2}</span>
          </div>
          <div className={styles.right}>
            <button className={styles.open} onClick={toggleModal3}>
                    <img src={tbv1.src} alt="" />
            </button>
          </div>
        </div>
    </div>

    {modal1 && (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.contentTbv}>
      <div className={styles.wrapper}>
        <img src={tbv1.src} alt="" />
        <img src={tbv2.src} alt="" />
        <img src={tbv3.src} alt="" />
        <img src={tbv4.src} alt="" />
        <img src={tbv5.src} alt="" />
        <img src={tbv6.src} alt="" />
        <img src={tbv7.src} alt="" />
        <img src={tbv8.src} alt="" />
        <img src={tbv9.src} alt="" />
        <img src={tbv10.src} alt="" />
        <img src={tbv11.src} alt="" />
        <img src={tbv12.src} alt="" />
        <img src={clip.src} alt="" />
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
        <img src={gara1.src} alt="" />
        <img src={gara2.src} alt="" />
        <img src={gara3.src} alt="" />
        <img src={gara4.src} alt="" />
        <img src={gara5.src} alt="" />
        <img src={gara6.src} alt="" />
        <img src={gara7.src} alt="" />
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

export default Photography;
