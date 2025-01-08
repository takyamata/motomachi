import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import Label from '@/components/Label/Label'

interface CardProps {
    imagePath: string;
    ImageAlt: string;
    labelText1: string;
    labelText2: string;
    text: string;
    tag: string;
    strong: string;
}

const Card: React.FC<CardProps> = ({
    imagePath,
    ImageAlt,
    labelText1,
    labelText2,
    text,
    tag,
    strong
}) => {
    return (
        <div className={styles.card}>
            <Image
                src={imagePath}
                width={131.2}
                height={196.8}
                alt={ImageAlt}
                className={styles.image}
            />
            <div className={styles.content}>
                <div className={styles.label}>
                    <Label text={labelText1} variables={'concept'} color='white' />
                    <Label text={labelText2} variables={'concept'} color='green' />
                </div>
                <p className={styles.paragraph}>{text}<strong className={styles.strong}>{strong}</strong></p>
                <span className={styles.tag}># {tag}</span>
            </div>
        </div>
    )
}

export default Card