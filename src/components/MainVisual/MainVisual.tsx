"use client";
import React from 'react'
import styles from "./mainVisual.module.scss";
import { useResponsive } from '@/components/Hooks/Responsive';
import Image from 'next/image'

const MainVisual = () => {
    const { isTBDown } = useResponsive();
    return (
        <>
            {!isTBDown && (
                <div className={styles.mainVisual}>
                    <div className={styles.content}>
                        <Image
                            src="/home/mv.webp"
                            width={600}
                            height={688}
                            alt="メインビジュアル"
                            className={styles.image}
                        />
                        <div className={styles.lead}>
                            <span className={styles.span}>仕事と休憩が共存する<br />新しいコワーキング</span>
                            <i className={styles.leftTop}></i>
                            <i className={styles.rightDown}></i>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MainVisual