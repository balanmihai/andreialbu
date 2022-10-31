import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Nav.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const links = [
  {
    url: '/book',
    label: 'book ->',
  },
  {
    url: '/branding',
    label: 'branding & logos ->',
  },
  {
    url: '/type',
    label: 'type ->',
  },
  {
    url: '/photography',
    label: 'photography ->',
  }
];

const Nav = ({ page }) => {
  const router = useRouter();
  const { isMobile } = useIsMobile();
  return (
    <div className={isMobile ? style.containerMobile : style.container}>
      {links.map((link, i) => (
        <Link
          className={page === ' home' ? styles.blackText : ''}
          key={i}
          href={link.url}
        >
          <div
            className={`${isMobile ? style.linkMobile : style.link} ${
              router.pathname === link.url ? style.linkActive : ''
            }`}
          >
            <span>{link.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Nav), {
  ssr: false,
});
