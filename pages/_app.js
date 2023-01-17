'use client'

import '../app/globals.css'
import styles from '../styles/index';
import { ThemeProvider } from 'next-themes';

// components
import Header from '../components/Header';
import NavMenu from '../components/NavMenu'

// redux
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider attribute='class'>
        <div className={`${styles.flexCenter} relative w-screen bg-primary-color-4 dark:bg-secondary-color min-h-screen`}>
          <div className={`${styles.innerWidth} ${styles.flexCenter} w-full flex-col relative h-full`}>
            <Header/>
            <NavMenu/>
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    )
  }

export default wrapper.withRedux(MyApp);