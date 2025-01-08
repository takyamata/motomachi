import React from 'react'
import styles from "./main.module.scss";
import Theme from '@/components/Main/Organisms/Theme/Theme';
import Concept from '@/components/Main/Organisms/Concept/Concept';
import Floor from '@/components/Main/Organisms/Floor/Floor';
import Voice from '@/components/Main/Organisms/Voice/Voice';
import Access from '@/components/Main/Organisms/Access/Access';
import News from '@/components/Main/Organisms/News/News';
import Footer from '@/components/Main/Organisms/Footer/Footer';

const sections = [
    { content: <Theme /> },
    { content: <Concept /> },
    { content: <Floor /> },
    { content: <Voice /> },
    { content: <Access /> },
    { content: <News /> },
    { content: <Footer /> },
]

const Main = () => {
    return (
        <main className={styles.main}>
            <article className={styles.article}>
                {sections.map((section, index) => (
                    <section key={index}>
                        {section.content}
                    </section>
                ))}
            </article>
        </main>
    )
}

export default Main