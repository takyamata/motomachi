import React from 'react'
import styles from "./aside.module.scss";
import MainVisual from '@/components/MainVisual/MainVisual';
import Header from '@/components/Header/Header';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <MainVisual />
            <Header />
        </aside>
    )
}

export default Aside