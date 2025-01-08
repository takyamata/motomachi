import React from 'react'
import styles from "./floor.module.scss"
import Image from 'next/image'
import Title from '@/components/Main/Molecules/Title/Title'
import Link from 'next/link'
import ArrowSVG from '@/components/SVG/ArrowSVG'

const Floor = () => {
    return (
        <div className={styles.floor}>
            <div className={styles.h2}>FLOOR GUIDE</div>
            <div className={styles.content}>
                <div className={styles.detail}>
                    <div className={styles.image}>
                        <Image
                            src="/home/floor01.webp"
                            width={366.27}
                            height={274.43}
                            alt="コワーキングスペースの写真"
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.place}>
                            <span>{`東館\n`}</span>
                            <b>2</b>
                            <i>F</i>
                        </div>
                        <div className={styles.document}>
                            <Title
                                label='CO-WOKING'
                                title="コワーキングスペース"
                                color='green'
                            />
                            <span className={styles.aside}>月額も一時利用も可能</span>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    <span>利用時間</span>
                                    <i>8:00 〜 22:00</i>
                                </li>
                                <li className={styles.li}>
                                    <span>ドロップイン利用</span>
                                    <i>250円 / 15分</i>
                                </li>
                                <li className={styles.li}>
                                    <span>月額フリー利用</span>
                                    <i>25,000円 / 月</i>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="/" className={`${styles.button} ${styles.map}`}>
                                <span>フロアマップを見る</span>
                                <ArrowSVG />
                            </Link>
                            <Link href="/" className={`${styles.button} ${styles.line}`}>
                                <span>LINEから利用登録する</span>
                                <ArrowSVG />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Floor