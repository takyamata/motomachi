import React from 'react'
import styles from "./home.module.scss";
import Main from '@/components/Main/Main';
import Header from '@/components/Header/Header';
import MainVisual from '@/components/MainVisual/MainVisual';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <MainVisual />
                <Main />
                <Header />
            </div>
        </div>
    )
}

export default Home