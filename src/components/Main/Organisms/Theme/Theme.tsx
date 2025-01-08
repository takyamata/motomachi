import React from 'react'
import styles from "./theme.module.scss"
import Title from '@/components/Main/Molecules/Title/Title'
import Paragraph from '@/components/Main/Atoms/Paragraph/Paragraph'
import Link from 'next/link'
import ParkSVG from '@/components/SVG/ParkSVG'
import ArrowSVG from '@/components/SVG/ArrowSVG'
import Image from 'next/image'

const Theme = () => {
    return (
        <div className={styles.theme}>
            <div className={styles.lead}>
                <Title
                    label="THEME"
                    title={`元町公園の緑と過ごす\nワークスタイル`}
                    color='green'
                />
                <Paragraph
                    text={`WORK＆NAPもとまちは、元町ウェルネスパーク内にあるコワーキングスペースです。\n文京区の穏やかな空気と、元町公園の豊かな緑に囲まれたこの場所で働くことも、休むことも、もっと自由に、自分らしく。あなたのこころを満たす“ウェルビーイング”な空間をご提供します。`}
                    color='green'
                />
                <Link href="" className={styles.link}>
                    <ParkSVG />
                    <span>元町ウェルネスパーク公式サイト</span>
                    <ArrowSVG />
                </Link>
            </div>
            <div className={styles.image}>
                <Image
                    src="/home/theme01.webp"
                    width={410}
                    height={291.76}
                    alt="ウェルネスパークの場所を示したイラスト"
                />
            </div>
        </div>
    )
}

export default Theme