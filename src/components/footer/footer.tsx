import React from 'react'
import styles from "./footer.module.css";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/about">About</Link>
            <Link href="/about/detail">About/detail</Link>
        </footer>
    )
}

export default Footer