import React from 'react'
import styles from "./label.module.scss";

interface LabelProps {
    text: string;
    variables: 'news' | 'leaf' | 'concept';
    color?: 'green' | 'white';
}
const Label: React.FC<LabelProps> = ({
    text,
    variables,
    color
}) => {
    const classNames = [
        styles.label,
        styles[variables],
        color ? styles[color] : ''
    ].filter(Boolean).join(' ');
    return (
        <span className={classNames}>{text}</span>
    )
}

export default Label