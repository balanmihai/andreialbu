import React from 'react';
import Nav from '../nav/Nav'
import styles from './SideMenu.module.css'
import Link from 'next/link';

const title = 'Andrei Albu'
const about = `Bucharest based graphic designer specializing in branding and book design. My purpose is to bring ideas into their visual form.`
const mail = 'andrei.albu1998@gmail.com'
const instagram = '@ne.caz'

const SideMenu = () => (
  <>
    <div className={styles.container}>
      <div className={styles.topText}>
        <Link href="/">
          <span className={styles.title}>{title}</span>
        </Link>
        <span className={styles.about}>{about}</span>
      </div>
      <Nav/>
      <div className={styles.contactWrapper}>
          <a href="mailto: andrei.albu1998@gmail.com" target="_blank">
            <span className={styles.mail}>{mail}</span>
          </a>
          <a href="https://www.instagram.com/ne.caz/" target="_blank">
            <span className={styles.instagram}>{instagram}</span>
          </a>
      </div>
    </div>
  </>
);

export default SideMenu;
