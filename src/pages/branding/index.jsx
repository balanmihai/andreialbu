import React, { useState } from 'react';
import styles from './Branding.module.css'
import Dialog from '@mui/material/Dialog';
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
import logo1 from "../../../public/images/logo/1.png"
import logo2 from "../../../public/images/logo/2.png"
import logo3 from "../../../public/images/logo/3.png"
import logo4 from "../../../public/images/logo/4.png"
import logo5 from "../../../public/images/logo/5.png"
import logo6 from "../../../public/images/logo/6.png"
import logo7 from "../../../public/images/logo/7.png"
import logo8 from "../../../public/images/logo/8.png"
import coverlogo from "../../../public/images/logo/cover.png"





const title1 = "tbv."
const p1 = `
Tbv. or tineri bunavestire is a community for youth that promotes Christian values. It is a space for students and young adults to get to know each other and make friends and debate certain topics.
The community wanted a new visual identity that better encapsulates what the brand stands for. The logo is designed to look friendly and at the same time to inspire confidence. The color scheme focusing on bold contrasting colors reflects the youthful spirit. The pairing of black background and pale yellow elements creates the illusion of “light in the darkness”, which is exactly what the community strives to be. The visual identity is created mainly for the online, mostly being used for Instagram posts, stories and announcements.
`

const title2 = `North Railway Station wayfinding`

const p2 = `
For this concept I reimagined the wayfinding system for the North Railway Station in Bucharest. The current system served as a starting point. The icons I designed use a rough geometry (reminding of mathematical sheets) to represent even the more organic shapes. This stylized version makes it easier for the user to “read” the signs, at the same time keeping a tidy and cohesive look all around. The typeface used, Space Grotesk, is a proportional sans-serif based on Space Mono family. Originally designed by Florian Karsten in 2018, Space Grotesk retains the monospace's idiosyncratic details while optimizing for improved readability even at non-display sizes.
`

const title3 = `Logofolio`

const p3 = `
A collection of marks, symbols and logos (both concept and in use). This project includes work from my very early start, in 2018, up to my most recent projects.
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
        onClick={handleClose1}
        >(close)</button>
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
        onClick={handleClose2}
        >(close)</button>
      </div>
    </div>

    </Dialog>
    </>
  );
}


function Dialog3(props) {
  const { onClose3, open3 } = props;

  function handleClose3() {
    onClose3();
  }

  return (
    <>
      <Dialog
      onClose={handleClose3}
      open={open3}
      BackdropProps={{ style: { backdropFilter: "blur(5px)" } }}
    >
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
      <div className={styles.wrapper}>
        <img src={logo1.src} alt="" />
        <img src={logo2.src} alt="" />
        <img src={logo3.src} alt="" />
        <img src={logo4.src} alt="" />
        <img src={logo5.src} alt="" />
        <img src={logo6.src} alt="" />
        <img src={logo7.src} alt="" />
        <img src={logo8.src} alt="" />
      </div>

        <button
        className={styles.close}
        onClick={handleClose3}
        >(close)</button>
      </div>
    </div>

    </Dialog>
    </>
  );
}


function Branding() {



  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

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

  function handleClickOpen3() {
    setOpen3(true);
  }

  const handleClose3 = value => {
    setOpen3(false);
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
                  <img src={tbv1.src} alt="" />
                </button>
          </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title2}</span>
            <span className={styles.p}>{p2}</span>
          </div>
          <div className={styles.right}>
                <button className={styles.open} onClick={handleClickOpen2}>
                  <img src={gara1.src} alt="" />
                </button>
          </div>
        </div>
        <div className={styles.row}>
            <div className={styles.left}>
            <span className={styles.title}>{title3}</span>
            <span className={styles.p}>{p3}</span>
          </div>
          <div className={styles.right}>
            <button className={styles.open} onClick={handleClickOpen3}>
                    <img src={coverlogo.src} alt="" />
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

      <Dialog3
        open3={open3}
        onClose3={handleClose3}
      />
   </>
  );
}

export default Branding;
