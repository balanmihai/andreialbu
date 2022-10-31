import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useIsMobile from '../hooks/useIsMobile';
import necas from '../../public/images/intrare.gif'

export function Home() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <img className={styles.necas} src={necas.src} alt="" />
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
