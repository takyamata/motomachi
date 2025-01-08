import React from 'react'
import styles from "./concept.module.scss"
import Title from '@/components/Main/Molecules/Title/Title'
import Card from '@/components/Main/Molecules/Card/Card'
import Paragraph from '@/components/Main/Atoms/Paragraph/Paragraph'

const Concept = () => {
    const cardData = [
        {
            imagePath: '/home/card01.webp',
            ImageAlt: '勉強する女性のイラスト',
            labelText1: 'CONCEPT',
            labelText2: '01',
            text: `静寂に包まれた\nプライベートルームは、\n自分だけの`,
            strong: '集中時間に。',
            tag: 'WORK'
        },
        {
            imagePath: '/home/card01.webp',
            ImageAlt: '勉強する女性のイラスト',
            labelText1: 'CONCEPT',
            labelText2: '02',
            text: `グリーンが彩る\nラウンジエリアは、\n心と体を癒やす\n`,
            strong: 'リフレッシュ時間に',
            tag: 'NAP'
        },
        {
            imagePath: '/home/card01.webp',
            ImageAlt: '勉強する女性のイラスト',
            labelText1: 'CONCEPT',
            labelText2: '03',
            text: `心地良いリラックスソファで、\n生活リズムを整える\n`,
            strong: 'パワーナップ時間を',
            tag: 'NAP'
        }
    ]
    return (
        <div className={styles.concept}>
            <div className={styles.lead}>
                <Title
                    label='CONCEPT'
                    title={`働くことも、休むことも、\n自由に、自分らしく。`}
                    color='white'
                />
                <Paragraph
                    text={`「働く」も「休む」も自由に選べる、\n新しいスタイルのコワーキングスペースです。\n働くことも、休むことも、もっと自由に。\n私のウェルビーイングは、ここから生まれる。`}
                    color='white'
                />
            </div>
            <div className={styles.card}>
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        imagePath={item.imagePath}
                        ImageAlt={item.ImageAlt}
                        labelText1={item.labelText1}
                        labelText2={item.labelText2}
                        text={item.text}
                        strong={item.strong}
                        tag={item.tag}
                    />
                ))}
            </div>
        </div>
    )
}

export default Concept