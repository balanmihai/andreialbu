import React, { useState } from 'react';
import styles from './Type.module.css'
import Dialog from '@mui/material/Dialog';
import l1 from "../../../public/images/lapsus/Lapsus-01.png"
import l2 from "../../../public/images/lapsus/Lapsus-02.png"
import l3 from "../../../public/images/lapsus/Lapsus-03.png"
import l4 from "../../../public/images/lapsus/Lapsus-04.png"
import l5 from "../../../public/images/lapsus/Lapsus-05.png"
import l6 from "../../../public/images/lapsus/Lapsus-06.png"
import l7 from "../../../public/images/lapsus/Lapsus-07.png"
import l8 from "../../../public/images/lapsus/Lapsus-08.png"
import l9 from "../../../public/images/lapsus/Lapsus-09.png"
import l10 from "../../../public/images/lapsus/Lapsus-10.png"
import l11 from "../../../public/images/lapsus/Lapsus-11.png"
import l12 from "../../../public/images/lapsus/Lapsus-12.png"

const title1 = "Lapsus"
const p1 = `
“Word for word” proposes a fusion between calendar and dictionary. The calendar provides a word for every day of the year, the goal being to learn something new everyday. To make sure that every word is a surprise, the selection is comprised of neologisms (new words) and archaisms (old words), but not exclusively.
The project experiments with the learning process as well. Part of the 365 terms and their definitions are accompanied by typographic experiments. These are meant to illustrate, contributing to the assimilation and memorization of the words.

This project has also been selected for DIPLOMA 2022.
`



function Dialog1(props) {
  const { onClose1, open1 } = props;

  function handleClose1() {
    onClose1();
  }

  return (
    <>

      <Dialog
      onClose={handleClose1}
      open={open1}
      BackdropProps={{ style: { backdropFilter: "blur(5px)" } }}
    >
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.contentTbv}>
      <div className={styles.wrapper}>
        <img src={l1.src} alt="" />
        <img src={l2.src} alt="" />
        <div className={styles.flex} >
        <img src={l3.src} alt="" />
        <img src={l4.src} alt="" />
        </div>
        <div className={styles.flex}>
        <img src={l5.src} alt="" />
        <img src={l6.src} alt="" />
        </div>
        <div className={styles.flex}>
        <img src={l7.src} alt="" />
        <img src={l8.src} alt="" />
        </div>
        <img src={l9.src} alt="" />
        
        <img src={l10.src} alt="" />
        <img src={l11.src} alt="" />
        <img src={l12.src} alt="" />
      </div>
        <button
        className={styles.close}
        onClick={handleClose1}
        >(close)</button>
      </div>
    </div>

    </Dialog>
    </>
  );
}

function Type() {
  const [open1, setOpen1] = React.useState(false);
  function handleClickOpen1() {
    setOpen1(true);
  }

  const handleClose1 = value => {
    setOpen1(false);
  };


  return (
   <>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.left}>
              <span className={styles.title}>{title1}</span>
              <span className={styles.p}>{p1}</span>
            </div>
          <div className={styles.right}>
                <button className={styles.open} onClick={handleClickOpen1}>
                  <img src={l1.src} alt="" />
                </button>
          </div>
        </div>
    </div>


    <Dialog1
        open1={open1}
        onClose1={handleClose1}
      />


   </>
  );
}

export default Type;
