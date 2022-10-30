import React from 'react';
import Nav from '../nav/Nav'
import styles from './SideMenu.module.css'

const title = 'Andrei Albu'
const about = `Bucharest based graphic designer specializing in branding and book design. My purpose is to bring ideas into their visual form.`
const mail = 'andrei.albu1998@gmail.com'
const instagram = '@andreihalbu'

const SideMenu = () => (
  <>
    <div className={styles.container}>
      <div className={styles.topText}>
        <span className={styles.title}>{title}</span>
        <span className={styles.about}>{about}</span>
      </div>
      <Nav/>
      <div className={styles.contactWrapper}>
        <span className={styles.mail}>{mail}</span>
        <span className={styles.instagram}>{instagram}</span>
      </div>
    </div>
  </>
);

export default SideMenu;
