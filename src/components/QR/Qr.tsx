import React from 'react'
import styles from "./qr.module.scss"
import Image from 'next/image'

const Qr = () => {
    return (
        <div className={styles.qr}>
            <span className={styles.text}>LINEから<br />利用登録する</span>
            <Image
                src="/home/QR.webp"
                width={67}
                height={67.47}
                alt="QRコード"
                className={styles.image}
            />
        </div>
    )
}

export default Qr