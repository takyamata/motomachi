import React from 'react'
import styles from "./title.module.scss"
import Label from '@/components/Label/Label'

interface TitleProps {
    label: string;
    title: string;
    color: 'green' | 'white';
}

const Title: React.FC<TitleProps> = ({ label, title, color = 'green' }) => {
    return (
        <div className={styles.title}>
            <h2><Label text={label} variables="leaf" color={color} /></h2>
            <span className={`${styles.text} ${styles[color]}`}>{title}</span>
        </div>
    )
}

export default Title