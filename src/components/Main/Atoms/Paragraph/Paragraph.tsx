import React from 'react'
import styles from "./paragraph.module.scss"

interface ParagraphProps {
    text: string;
    color: 'green' | 'white'
}

const Paragraph: React.FC<ParagraphProps> = ({ text, color }) => {
    return (
        <p className={`${styles.paragraph} ${styles[color]}`}>{text}</p>
    )
}

export default Paragraph