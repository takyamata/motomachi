import React from 'react'
import styles from "./mainVisual.module.scss";

const MainVisual = () => {
    return (
        <div className={styles.mainVisual}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    もとまち<br />WORK&NAP
                </div>
                <div className={styles.link}>
                    <div className={styles.entry}>
                        <span>コーワキングの<br />利用登録はLINEから</span>
                        <div className={styles.qr}>

                        </div>
                    </div>
                    <div className={styles.contact}>
                        <span>シェアオフィスの内見・お問い合わせ</span>
                        <div className={styles.arrow}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainVisual