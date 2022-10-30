import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useIsMobile from '../hooks/useIsMobile';

export function Home() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
