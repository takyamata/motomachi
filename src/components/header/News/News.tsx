import React from 'react'
import styles from "./news.module.scss";
import Label from '@/components/Label/Label'

const content = [
    { date: "2024.00.00 ", text: "シェアオフィスの申し込み受付を開始しました。" },
    { date: "2024.00.00 ", text: "シェアオフィスの申し込み受付を開始しました。" },
    // { date: "2024.00.00 ", text: "シェアオフィスの申し込み受付を開始しました。" },
    // { date: "2024.00.00 ", text: "シェアオフィスの申し込み受付を開始しました。" },
    // { date: "2024.00.00 ", text: "シェアオフィスの申し込み受付を開始しました。" },
];

const News = () => {
    return (
        <div className={styles.news}>
            <Label
                text="NEWS"
                variables="news"
            />
            <ul className={styles.ul}>
                {content.map((item, index) => (
                    <li key={index} className={styles.li}>
                        <span className={styles.date}>{item.date}</span>
                        <span className={styles.text}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News