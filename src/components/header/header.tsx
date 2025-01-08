"use client";
import React from 'react'
import styles from "./header.module.scss";
import Link from 'next/link';
import { useResponsive } from '@/components/Hooks/Responsive';
import News from '@/components/Header/News/News';
import QR from '@/components/QR/Qr';

const links = [
    { link: "", text: "CO-WORKING" },
    { link: "", text: "SHARE OFFICE" },
    { link: "", text: "ACCESS" },
    { link: "", text: "NEWS" },
    { link: "", text: "CONTACT" },
];

const Header = () => {
    const { isSP } = useResponsive();
    return (
        <>
            {!isSP && (
                <header className={styles.header}>
                    <News />
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            {links.map((item, index) => (
                                <li key={index} className={styles.li}>
                                    <Link href={item.link} className={styles.a}>
                                        <span className={styles.span}>{item.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <QR />
                </header>
            )}
        </>
    )
}

export default Header