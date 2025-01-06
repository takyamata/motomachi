import React from 'react'
import styles from "./header.module.scss";

const links = [
    { link: "", en: "Concept", ja: "コンセプト" },
    { link: "", en: "News", ja: "お知らせ" },
    { link: "", en: "Coworking", ja: "コワーキング" },
    { link: "", en: "Access", ja: "アクセス" },
    { link: "", en: "Share Office", ja: "シェアオフィス" },
    { link: "", en: "Contact", ja: "お問い合わせ" }
];

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {links.map((item, index) => (
                        <li key={index} className={styles.li}>
                            <a href={item.link} className={styles.a}>
                                <span className={styles.span}>{item.en}</span>
                                <i className={styles.i}>{item.ja}</i>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header