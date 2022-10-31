import React, { useState } from 'react';
import styles from './Photography.module.css'
import Dialog from '@mui/material/Dialog';
import bw1 from "../../../public/images/bw/1.JPG"
import bw2 from "../../../public/images/bw/2.JPG"
import bw3 from "../../../public/images/bw/3.JPG"
import bw4 from "../../../public/images/bw/4.jpg"
import bw5 from "../../../public/images/bw/5.jpg"
import bw6 from "../../../public/images/bw/6.jpg"
import bw7 from "../../../public/images/bw/7.jpg"
import bw8 from "../../../public/images/bw/8.jpg"
import bw9 from "../../../public/images/bw/9.jpg"
import bw10 from "../../../public/images/bw/10.jpg"
import bw11 from "../../../public/images/bw/11.JPG"
import bw12 from "../../../public/images/bw/12.JPG"
import bw13 from "../../../public/images/bw/13.jpg"
import bw14 from "../../../public/images/bw/14.png"
import bw15 from "../../../public/images/bw/15.png"
import bw16 from "../../../public/images/bw/16.png"
import bw17 from "../../../public/images/bw/17.jpg"
import bw18 from "../../../public/images/bw/18.JPG"
import nye1 from "../../../public/images/nye/1.jpg"
import nye2 from "../../../public/images/nye/2.jpg"
import nye3 from "../../../public/images/nye/3.jpg"
import nye4 from "../../../public/images/nye/4.jpg"
import nye5 from "../../../public/images/nye/5.jpg"
import nye6 from "../../../public/images/nye/6.jpg"


const title1 = "black & white"
const p1 = `
Black and white film photography, realized using Ilford HP5 and XP2. The selection includes portraits of people I know or that I met briefly. Some of the pictures are taken using a medium format, 120mm camera (Mamiya RB67), some on my 35mm SLR, or my point & shoot whenever I had to think quick.
`

const title2 = `NYE party print`

const p2 = `
Film photography meets riso printing.
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
    
      <div className={styles.content}>
      <button
        className={styles.close}
        onClick={handleClose1}
        >(close)</button>
      <div className={styles.wrapper}>
        <img src={bw1.src} alt="" />
        <img src={bw2.src} alt="" />
        <img src={bw3.src} alt="" />
        <img src={bw4.src} alt="" />
        <img src={bw5.src} alt="" />
        <img src={bw6.src} alt="" />
        <img src={bw7.src} alt="" />
        <img src={bw8.src} alt="" />
        <img src={bw9.src} alt="" />
        <img src={bw10.src} alt="" />
        <img src={bw11.src} alt="" />
        <img src={bw12.src} alt="" />
        <img src={bw13.src} alt="" />
        <img src={bw14.src} alt="" />
        <img src={bw15.src} alt="" />
        <img src={bw16.src} alt="" />
        <img src={bw17.src} alt="" />
        <img src={bw18.src} alt="" />
      </div>
      
      </div>
    </div>

    </Dialog>
    </>
  );
}




function Dialog2(props) {
  const { onClose2, open2 } = props;

  function handleClose2() {
    onClose2();
  }

  return (
    <>

      <Dialog
      onClose={handleClose2}
      open={open2}
      BackdropProps={{ style: { backdropFilter: "blur(5px)" } }}
    >
      

      <div className={styles.modal}>
      <div className={styles.overlay}></div>
    
      <div className={styles.content}>
      <button
        className={styles.close}
        onClick={handleClose2}
        >(close)</button>
      <div className={styles.wrapper}>
        <img src={nye1.src} alt="" />
        <img src={nye2.src} alt="" />
        <img src={nye3.src} alt="" />
        <img src={nye4.src} alt="" />
        <img src={nye5.src} alt="" />
        <img src={nye6.src} alt="" />
      </div>
      
      </div>
    </div>


    </Dialog>
    </>
  );
}



function Photography() {

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  function handleClickOpen1() {
    setOpen1(true);
  }

  const handleClose1 = value => {
    setOpen1(false);
  };

  function handleClickOpen2() {
    setOpen2(true);
  }

  const handleClose2 = value => {
    setOpen2(false);
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
                  <img src={bw1.src} alt="" />
                </button>
          </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title2}</span>
            <span className={styles.p}>{p1}</span>
          </div>
          <div className={styles.right}>
                <button className={styles.open} onClick={handleClickOpen2}>
                  <img src={nye1.src} alt="" />
                </button>
          </div>
        </div>

    </div>

    <Dialog1
        open1={open1}
        onClose1={handleClose1}
      />

      <Dialog2
        open2={open2}
        onClose2={handleClose2}
      />
   </>
  );
}

export default Photography;
